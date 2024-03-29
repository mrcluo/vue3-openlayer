<template>
  <div class="track-area">
    <div
      class="flex flex-justify-between flex-items-center"
      v-show="getGOTracks(streamsData, [])"
    >
      <div class="mb-3 flex-shrink flex">
        <el-image
          v-if="!animating"
          class="w-9 mr-2"
          @click="_drawTracks?.startMove(chooseTracks)"
          :src="startIcon"
        />
        <el-image
          v-else
          class="w-9 mr-2"
          @click="_drawTracks?.stopMove()"
          :src="pauseIcon"
        />
        <el-image class="w-9 mr-2" @click="resetMoveEvent" :src="resetIcon" />
      </div>
      <div>
        <el-checkbox-group v-model="chooseTracks" @change="handleTrack">
          <el-checkbox
            :disabled="animating"
            v-for="(item, index) in tabTracks"
            :key="index"
            :label="item"
          >
            <span>{{ item.hphm || `车辆${index + 1}` }}</span>
            <span
              class="trackColor"
              :style="`background: rgba(${item.color})`"
            ></span>
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div
      v-show="Object.keys(trackDetails).length"
      class="details rounded-2 overflow-hidden px-5 bg-dark-100 bg-opacity-90"
    >
      <div
        class="w-60 text-[14px] text-stone-400 py-3 line-height-7 dash-border"
        v-for="(item, index) in trackDetails"
        :key="index"
      >
        <div class="text-[15px] text-white line-clamp-1">
          {{ item?.hphm || "-" }}
        </div>
        <div class="des flex flex-justify-between">
          <span class="">时间</span>
          <span class="">{{ item?.timestamp || "0" }}</span>
        </div>
        <div class="des flex flex-justify-between">
          <span class="">经度</span>
          <span class="">{{ item?.longitude || "0" }}</span>
        </div>
        <div class="des flex flex-justify-between">
          <span class="">维度</span>
          <span class="">{{ item?.latitude || "0" }}</span>
        </div>
        <div class="des flex flex-justify-between">
          <span class="">高程</span>
          <span class="">{{ item?.elevation || "0" }}</span>
        </div>
        <div class="des flex flex-justify-between">
          <span class="">俯仰角</span>
          <span class="">{{ item?.pitch || "0" }}</span>
        </div>
        <div class="des flex flex-justify-between">
          <span class="">偏航角</span>
          <span class="">{{ item?.yaw || "0" }}</span>
        </div>
        <div class="des flex flex-justify-between">
          <span class="">滚转角</span>
          <span class="">{{ item?.roll || "0" }}</span>
        </div>
      </div>
    </div>
    <div id="viewer" class="w-full h-full" v></div>
  </div>
</template>

<script name="baseMap" setup>
  import ColourfulMapLayer from "~/src/components/RaLayers/layers/ColourfulMapLayer.js";
  import LayerManager from "~/src/components/RaLayers/core/LayerManager.js";
  import DrawTracks from "~/src/components/RaLayers/core/DrawTracks.js";
  import MapBuilder from "~/src/components/RaLayers/core/MapBuilder.js";
  import { getTrajectoryStream } from "@/api/trajectory/trajectory.js";
  import startIcon from "@/assets/images/start.png";
  import pauseIcon from "@/assets/images/pause.png";
  import resetIcon from "@/assets/images/reset.png";
  import useAccidentStore from "@/store/modules/accident";

  const accidentStore = useAccidentStore();
  const map = ref();
  const streamsData = ref([]);
  const chooseTracks = ref([]);
  const tabTracks = ref([]);
  // 类里的核心属性
  const animating = ref(false);
  const trackDetails = ref([]);

  let _trackDetails = {};
  let _layerManager = null;
  let _drawTracks = null;
  const initMap = () => {
    // 初始化地图对象
    map.value = MapBuilder.defaultBuild("viewer");
    // 图层管理对象
    _layerManager = new LayerManager(map.value);
    _layerManager.addLayer("ColourfulMapLayer", new ColourfulMapLayer());

    _drawTracks = new DrawTracks(map.value, animating, trackDetails);
  };
  const resetMoveEvent = () => {
    let _data = getGOTracks(streamsData.value, chooseTracks.value);
    _drawTracks.resetMove(_data, chooseTracks.value);
  };
  const clearPannel = () => {
    _trackDetails = {};
    chooseTracks.value.map((item) => {
      let eachTrack = trackDetails.value[item.rybh];
      if (eachTrack?.rybh) {
        _trackDetails[eachTrack.rybh] = eachTrack;
      }
    });
    trackDetails.value = _trackDetails;
  };
  const handleTrack = () => {
    // 展示勾选的轨迹面板
    clearPannel();
    // 重新绘制
    resetMoveEvent();
  };
  // 得到车辆轨迹并绘制
  const getGOTracks = (data, tracks) => {
    let _data = [];
    tracks.forEach((track) => {
      let stream = data.filter((item) => track.rybh === item.rybh);
      if (stream.length) {
        _data.push(stream[0].streams);
      }
    });
    return _data;
  };
  onBeforeUnmount(() => {
    _drawTracks?.stopMove();
  });
  onMounted(async () => {
    initMap();
    if (!accidentStore.sgId) return;
    let { data = [] } = await getTrajectoryStream({ sgid: accidentStore.sgId });
    let colors = [
      [220, 30, 60, 0.9],
      [255, 165, 0, 0.9],
      [255, 255, 0, 0.9],
      [0, 128, 0, 0.9],
      [0, 0, 255, 0.9],
      [0, 255, 255, 0.9],
    ];
    let _data = data.map((item, index) => {
      let { hphm, rybh, sgid } = item;
      return {
        hphm,
        rybh,
        sgid,
        color: colors[index],
      };
    });
    streamsData.value = data;
    tabTracks.value = _data;
    const _trackData = getGOTracks(data, []);
    _drawTracks.addTrack(_trackData, chooseTracks.value);
  });
</script>
<style scoped lang="scss">
  .track-area {
    height: calc(100vh - 209px);
    .details {
      position: fixed;
      right: 26px;
      top: 189px;
      z-index: 2;
      border: 1px solid #3351e0;
      .dash-border {
        border-bottom: 1px dashed #ccc;
      }
      .dash-border:last-child {
        border-bottom: none;
      }
      .block {
        display: inline-block;
        width: 96px;
        text-align: center;
      }
      .bg {
        background: #f4f4f5ab;
      }
    }
    .trackColor {
      display: inline-block;
      width: 50px;
      height: 6px;
      margin-left: 5px;
      margin-bottom: 2px;
    }
  }
</style>
