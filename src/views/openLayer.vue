<template>
  <div class="my-component">
    <button @click="startAnimate">开始</button>
    <button @click="stopAnimate">暂停</button>
    <button @click="resetAnimate">重置</button>
    <vOpenlayer
      ref="olRef"
      :streams="data"
      :colors="colors"
      :source="source"
      :height="height"
      :showHeader="showHeader"
      :showDetails="showDetails"
    />
  </div>
</template>

<script name="baseMap" setup>
  import { ref, onMounted } from "vue";
  import vOpenlayer from "/packages/index.vue";
  import { streamData } from "@/core/data";
  const data = ref([]);
  data.value = streamData;
  const colors = ref([
    [220, 30, 60, 0.9],
    [255, 165, 0, 0.9],
    [255, 255, 0, 0.9],
    [0, 128, 0, 0.9],
    [0, 0, 255, 0.9],
    [0, 255, 255, 0.9],
  ]);
  const source = ref("");
  const height = ref("height: calc(100vh - 209px);");
  const showHeader = ref(true);
  const showDetails = ref(true);
  const olRef = ref(null);

  const startAnimate = () => {
    console.log("🚀 ~ olRef:", olRef);
    olRef.value.startAnimate();
  };

  const stopAnimate = () => {
    olRef.value.stopAnimate();
  };

  const resetAnimate = () => {
    olRef.value.resetAnimate();
  };
  onMounted(() => {});
</script>
<style scoped lang="scss"></style>
