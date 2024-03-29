<template>
  <div class="about">
    <div class="map" id="map" ref="myMap"></div>
    <button @click="startMove">start animate</button>
  </div>
</template>
<script setup>
  import { Feature, Map, View } from "ol";

  import { LineString, Point } from "ol/geom";
  import TileLayer from "ol/layer/Tile";
  import VectorLayer from "ol/layer/Vector";
  import { transform } from "ol/proj";
  import RenderEvent from "ol/render/Event";
  import { Vector, XYZ } from "ol/source";
  import { Circle, Fill, Icon, Stroke, Style } from "ol/style";
  import { getVectorContext } from "ol/render";
  import { onBeforeUnmount, onMounted, ref } from "vue";
  import markIcon from "./car.png";

  const map = ref();
  const myMap = ref();
  const featureLayer = ref();
  const passCoordinates = ref([]);

  //  记录开始动画的时间
  const startTime = ref(0);
  // 轨迹分割的颗粒度，数值越小分的越细
  const particle = 20;
  // 轨迹动画的速度，数值越大位移越快
  const speed = 6;
  let lastTime;
  let trackLine;
  let position;
  let styles = {};
  let distance = 0;

  onMounted(() => {
    initMap();
    addTrack();
  });
  const initMap = () => {
    const amap = new TileLayer({
      source: new XYZ({
        url: "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
        wrapX: false,
      }),
    });
    map.value = new Map({
      target: myMap.value,
      layers: [amap],
      view: new View({
        center: transform([114.3, 30.5], "EPSG:4326", "EPSG:3857"),
        zoom: 10,
        minZoom: 3,
      }),
    });
  };
  // EPSG:4326 用于存储数据 是WGS84是目前最流行的地理坐标系统，通常我们说的经纬度GPS就是这个
  // EPSG:3857 用于显示数据 投影坐标系 openlayer使用的是这个
  const coordinates = [
    transform([114.0, 30.0], "EPSG:4326", "EPSG:3857"),
    transform([114.1, 30.1], "EPSG:4326", "EPSG:3857"),
    transform([114.2, 30.1], "EPSG:4326", "EPSG:3857"),
    transform([114.2, 30.4], "EPSG:4326", "EPSG:3857"),
    transform([114.4, 30.4], "EPSG:4326", "EPSG:3857"),
  ];

  const addLayer = () => {
    const trackFeature = new Feature({
      type: "track",
      geometry: trackLine,
    });

    const startMarker = new Feature({
      type: "geoMarker",
      geometry: new Point(passCoordinates.value[0]),
    });

    const endMarker = new Feature({
      type: "geoMarker",
      geometry: new Point(passCoordinates.value.at(-1)),
    });

    position = startMarker.getGeometry().clone();

    const geoMarker = new Feature({
      type: "icon",
      geometry: position,
    });
    geoMarker.setId("point");

    styles = {
      track: new Style({
        stroke: new Stroke({
          width: 6,
          color: [220, 30, 60, 0.9],
        }),
      }),
      icon: new Style({
        image: new Icon({
          anchor: [0.5, 0.3],
          scale: 0.3,
          src: markIcon,
        }),
      }),
      geoMarker: new Style({
        image: new Circle({
          radius: 8,
          fill: new Fill({ color: "#333" }),
          stroke: new Stroke({
            color: "#f00",
            width: 2,
          }),
        }),
      }),
    };

    featureLayer.value = new VectorLayer({
      source: new Vector({
        features: [trackFeature, geoMarker, startMarker, endMarker],
      }),
      style: (feature) => {
        return styles[feature.get("type")];
      },
    });

    map.value.addLayer(featureLayer.value);
  };

  const move = (evt) => {
    const time = evt.frameState.time;
    // 执行动画已经过了多少时间（秒）
    const timeout = (time - startTime.value) / 1000;
    let count = Math.round(speed * timeout);

    if (count >= passCoordinates.value.length - 1) {
      // 确保到达最后一个点位，并停止移动动画
      count = passCoordinates.value.length - 1;
      stopMove();
    }
    const point = featureLayer.value.getSource().getFeatureById("point");
    // point.setGeometry(new Point(passCoordinates.value[count]));
    point.getGeometry().setCoordinates(passCoordinates.value[count]);
    map.value.render();
  };

  const startMove = () => {
    startTime.value = new Date().getTime();
    map.value.on("postrender", move);
    // // 第一次需要手动调用一遍，否则不执行postcompose
    map.value.render();
  };

  const stopMove = () => {
    map.value.un("postrender", move);
  };

  /**
   * 根据一组坐标得到一段轨迹路径：trackLine = new LineString(coordinates);
   * 得到路径在地图上的长度
   * 根据自定义的颗粒度把路径分割的细致点(让路径上的小车走的更平滑点)，得到分割后的细致坐标组
   *   分辨率：getResolution得到分辨率
   *   细致坐标组长度：分辨率 / (路径长度*自定义颗粒度)
   *   细致坐标组：遍历坐标组通过trackLine.getCoordinateAt(i / pointCount)得到每个点的坐标并汇总成组
   *  */
  const addTrack = () => {
    trackLine = new LineString(coordinates);
    // 轨迹在投影平面上的长度
    const trackLineLen = trackLine.getLength();
    // 当前平面的分辨率
    const resolution = map.value.getView().getResolution();

    // 点有可能是小数，要到终点需要手动添加最后一个点
    const pointCount = trackLineLen / (resolution * particle);
    console.log("🚀 ~ addTrack ~ pointCount:", pointCount);
    for (let i = 0; i <= pointCount; i++) {
      passCoordinates.value.push(trackLine.getCoordinateAt(i / pointCount));
      // console.log(
      //   "🚀 ~ addTrack ~ pointCount:",
      //   pointCount,
      //   trackLine.getCoordinateAt(i / pointCount)
      // );
    }
    passCoordinates.value.push(coordinates.at(-1));
    addLayer();
  };

  onBeforeUnmount(stopMove);
</script>
<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  .map {
    width: 100vw;
    height: 80vh;
  }
</style>
