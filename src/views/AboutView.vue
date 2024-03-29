<template>
  <div class="about">
    <div
      class="map"
      ref="map"
      style="width: 100%; height: calc(100vh - 10px)"
    ></div>
  </div>
</template>
<script setup>
  import "ol/ol.css";
  import Map from "ol/Map";
  import View from "ol/View";
  import TileLayer from "ol/layer/Tile";
  import VectorLayer from "ol/layer/Vector";
  import OSM from "ol/source/OSM";
  import Vector from "ol/source/Vector";
  import Style from "ol/style/Style";
  import Stroke from "ol/style/Stroke";
  import Draw from "ol/interaction/Draw";
  import { transform } from "ol/proj";
  import { ref, onMounted } from "vue";
  const map = ref();

  onMounted(() => {
    // Source(ol/source/xxx)和Layer(ol/layer/xxx)是一对一的关系，有一个Source，必然需要一个Layer，然后把这个Layer添加到Map上，就可以显示出来了
    console.log("🚀 ~ map:", map);
    let _map = new Map({
      // 设置地图图层
      layers: [
        // 创建一个使用Open Street Map地图源的瓦片图层
        new TileLayer({ source: new OSM() }),
      ],
      // 设置显示地图的视图
      view: new View({
        // 地图中心点
        center: transform([104, 30], "EPSG:4326", "EPSG:3857"),
        zoom: 10, // 层级显示为10
      }),
      // ref="map"作为地图的容器
      target: map.value,
    });
    // 添加一个绘制的线使用的layer
    let lineLayer = new VectorLayer({
      source: new Vector(),
      style: new Style({
        stroke: new Stroke({
          color: "red",
          size: 1,
        }),
      }),
    });
    _map.addLayer(lineLayer);

    _map.addInteraction(
      new Draw({
        type: "LineString",
        source: lineLayer.getSource(), // 注意设置source，这样绘制好的线，就会添加到这个source里
      })
    );
  });
</script>
<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
