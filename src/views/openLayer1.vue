<template>
  <div class="about">
    <div class="map" id="map" ref="myMap"></div>
    <button @click="startMove">start animate</button>
    <button @click="stopMove">stop animate</button>
    <button @click="resetMove">resetMove animate</button>
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
  // 轨迹动画的速度，数值越大位移越快
  const speed = 200;
  let tracksLayer = [];
  let styles = {};
  let lastTime;
  let distance = 0;
  let animating = false;
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
        zoom: 9,
        // minZoom: 8,
      }),
    });
  };
  // EPSG:4326 用于存储数据 是WGS84是目前最流行的地理坐标系统，通常我们说的经纬度GPS就是这个
  // EPSG:3857 用于显示数据 投影坐标系 openlayer使用的是这个
  // 121.9281067, 30.90944 水滴湖coordinates
  const coordinates = [
    transform([114.0, 30.0], "EPSG:4326", "EPSG:3857"),
    transform([114.1, 30.1], "EPSG:4326", "EPSG:3857"),
    transform([114.2, 30.1], "EPSG:4326", "EPSG:3857"),
    transform([114.2, 30.4], "EPSG:4326", "EPSG:3857"),
    transform([114.4, 30.4], "EPSG:4326", "EPSG:3857"),
  ];

  const coordinates1 = [
    transform([115.0, 30.0], "EPSG:4326", "EPSG:3857"),
    transform([115.1, 30.1], "EPSG:4326", "EPSG:3857"),
    transform([115.2, 30.1], "EPSG:4326", "EPSG:3857"),
    transform([115.2, 30.4], "EPSG:4326", "EPSG:3857"),
    transform([115.4, 30.4], "EPSG:4326", "EPSG:3857"),
  ];

  const singleTrack = (trackLine) => {
    // 矢量图层几何图形 - 线
    const trackFeature = new Feature({
      type: "track",
      geometry: trackLine,
    });
    // 矢量图层几何图形 - 移动痕迹的线
    const carTrackFeature = new Feature({
      type: "carTrack",
      geometry: new LineString([trackLine.getFirstCoordinate()]),
    });
    // 矢量图层几何图形 - 开始点
    const startMarker = new Feature({
      type: "geoMarker",
      geometry: new Point(trackLine.getFirstCoordinate()),
    });
    // 矢量图层几何图形 - 结束点
    const endMarker = new Feature({
      type: "geoMarker",
      geometry: new Point(trackLine.getLastCoordinate()),
    });
    // 点几何对象：new Point([经度, 纬度])
    // 复制开始点(startMarker)的点几何对象
    const position = startMarker.getGeometry().clone();
    // 线几何对象: ：new LineString([[经度, 纬度]])
    // carTrackFeature是特征对象 carPosition是特征对象里的几何图形属性
    const carPosition = carTrackFeature.getGeometry().clone();
    // 矢量图层几何图形 - 移动点
    const geoMarker = new Feature({
      type: "icon",
      geometry: position,
    });

    return {
      trackLine, // 默认的轨迹线
      carTrackFeature, // 移动轨迹线
      carPosition, // 移动轨迹线的线几何线图形
      geoMarker, // 移动点
      position, // 移动点的点几何图形
      passCoordinates: [], // 存放当前动画的移动轨迹线的坐标数据
      layer: new VectorLayer({
        source: new Vector({
          features: [
            trackFeature,
            carTrackFeature,
            geoMarker,
            startMarker,
            endMarker,
          ],
        }),
        style: (feature) => {
          return styles[feature.get("type")];
        },
      }),
    };
  };

  const initMultiplyTrack = (tracks) => {
    return tracks.map((item) => singleTrack(item));
  };

  const addLayer = (tracks) => {
    styles = {
      track: new Style({
        stroke: new Stroke({
          width: 6,
          color: [220, 30, 60, 0.9],
        }),
      }),
      carTrack: new Style({
        stroke: new Stroke({
          width: 6,
          color: [117, 46, 195, 1],
        }),
      }),
      icon: new Style({
        image: new Icon({
          anchor: [0.5, 0.5],
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
    if (Array.isArray(tracks) && tracks.length > 0) {
      tracksLayer = initMultiplyTrack(tracks);
      console.log("🚀 ~ addLayer ~ tracksLayer:", tracksLayer);
      tracksLayer.forEach((item) => {
        // 在地图中画不同轨迹layer
        map.value.addLayer(item.layer);
      });
    }
  };
  const drawCarTrack = (event, item) => {
    const vectorContext1 = getVectorContext(event);
    vectorContext1.setStyle(styles.carTrack);
    vectorContext1.drawGeometry(item.carPosition);
  };
  const moveFeature = (event, item) => {
    const time = event.frameState.time;
    const elapsedTime = time - lastTime;
    distance = (distance + (speed * elapsedTime) / 1e6) % 2;
    lastTime = time;

    const currentCoordinate = item.trackLine.getCoordinateAt(
      distance > 1 ? 2 - distance : distance
    );
    if (distance >= 1) {
      stopMove("single", item);
      console.log("🚀 ~ moveFeature ~ stopMove:");
    }
    // 给点几何图形设置坐标 ol/geom/Point/setCoordinates
    item.position.setCoordinates(currentCoordinate);
    // 给移动线几何设置坐标
    item.passCoordinates.push(currentCoordinate);
    item.carPosition.setCoordinates(item.passCoordinates);
    drawCarTrack(event, item);
    // 得到矢量画布的上下文用于后面画到画布上
    const vectorContext = getVectorContext(event);
    // 给点几何图形设置icon样式
    vectorContext.setStyle(styles.icon);
    // 把几何图形画到画布上 drawGeometry接收geometry - new Point()
    vectorContext.drawGeometry(item.position);
    // tell OpenLayers to continue the postrender animation
    map.value.render();
  };

  const startMove = () => {
    if (animating) return;
    if (distance >= 1) return;
    animating = true;
    lastTime = Date.now();
    tracksLayer.forEach((item) => {
      item.moveFeature = (e) => moveFeature(e, item);
      item.layer.on("postrender", item.moveFeature);
      // hide geoMarker and trigger map render through change event
      // 此处geoMarker只是页面第一次渲染时展示，动画开始时隐藏
      // postrender的事件在每次渲染后触发，geoMarker.setGeometry(null);会触发一次渲染
      item.geoMarker.setGeometry(null);
    });
  };

  const stopMove = (type, item) => {
    if (!animating) return;
    console.log("🚀 ~ stopMove ~ item:", item);
    if (type === "single") {
      // Keep marker at current animation position
      item.geoMarker.setGeometry(item.position);
      // 留住小车移动的痕迹
      item.carTrackFeature.setGeometry(item.carPosition);
      item.layer.un("postrender", item.moveFeature);
      return;
    }
    animating = false;

    tracksLayer.forEach((item) => {
      // Keep marker at current animation position
      item.geoMarker.setGeometry(item.position);
      // 留住小车移动的痕迹
      item.carTrackFeature.setGeometry(item.carPosition);
      item.layer.un("postrender", item.moveFeature);
    });
  };

  const resetMove = () => {
    // 重新开始
    stopMove();
    distance = 0;
    lastTime = null;

    animating = false;
    tracksLayer.forEach((item) => {
      item.layer.getSource().clear();
    });
    tracksLayer = [];

    addTrack();
  };

  const addTrack = () => {
    let trackLine = new LineString(coordinates);
    let trackLine1 = new LineString(coordinates1);
    addLayer([trackLine, trackLine1]);
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
