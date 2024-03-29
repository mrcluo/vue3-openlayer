<template>
  <div class="map-area h-full relative">
    <div class="details">
      <el-select
        class="mr-1"
        v-model="value1"
        placeholder="请选择"
        size="default"
        style="width: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select
        class="mr-1"
        v-model="value"
        placeholder="请选择"
        size="default"
        style="width: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value2"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-date-picker
        style="width: 240px"
        v-model="value3"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
    </div>
    <div id="viewer" class="w-full h-full"></div>
  </div>
</template>

<script name="baseMap" setup>
  import ColourfulMapLayer from "~/src/components/RaLayers/layers/ColourfulMapLayer.js";
  import LayerManager from "~/src/components/RaLayers/core/LayerManager.js";
  import MapBuilder from "~/src/components/RaLayers/core/MapBuilder.js";
  import DrawArea from "@/core/DrawArea.js";
  import useAccidentStore from "@/store/modules/accident";
  import { getFeatures } from "~/src/api/map/map-api.js";

  const accidentStore = useAccidentStore();
  const map = ref();
  let _layerManager = null;
  let _drawAreas = null;

  const value1 = ref("");
  const value2 = ref("");
  const value3 = ref("");
  const options = [
    {
      value: "Option1",
      label: "Option1",
    },
    {
      value: "Option2",
      label: "Option2",
    },
  ];

  const initMap = () => {
    // 初始化地图对象
    map.value = MapBuilder.defaultBuild("viewer");
    // 图层管理对象
    _layerManager = new LayerManager(map.value);
    _layerManager.addLayer("ColourfulMapLayer", new ColourfulMapLayer());

    _drawAreas = new DrawArea(map.value);
  };

  onMounted(() => {
    initMap();
    // if (!accidentStore.sgId) return;

    getFeatures([310114, 310116]).then((res) => {
      res.data.forEach((feature) => {
        console.log("🚀 ~ ~ res:", feature.shapes[feature.featureCodes[0]]);
        _drawAreas.addArea([feature.shapes[feature.featureCodes[0]]]);
      });
    });
  });
</script>
<style scoped lang="scss">
  .map-area {
    // height: calc(100vh - 398px);
    .details {
      position: absolute;
      left: 8px;
      top: 8px;
      z-index: 2;
    }
  }
</style>
