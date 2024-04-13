## github仓库地址

展示效果和更多介绍请移步：

```js
https://github.com/mrcluo/vue3-openlayer
```


## npm包使用

```sh
pnpm add vue3-openlayer-track
```

或者

```sh
yarn add vue3-openlayer-track
```
或者

```sh
npm install vue3-openlayer-track
```

在项目scr/main.js

```js
import Vue3OpenlayerTrack from "vue3-openlayer-track"
import "vue3-openlayer-track/style.css"

// import { createApp } from 'vue'
// const app = createApp(App)
app.use(Vue3OpenlayerTrack)
```

业务文件中就可正常使用了

```js
<template>
  <div class="about">
    <vue3-openlayer-track  
      :showHeader="showHeader" 
      :streams="data"/>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import { streamData } from "@/core/data";
  const data = ref([]);
  data.value = streamData;
  const showHeader = ref(true);
  {/* const colors = ref([
    [220, 30, 60, 0.9],
    [255, 165, 0, 0.9],
    [255, 255, 0, 0.9],
    [0, 128, 0, 0.9],
    [0, 0, 255, 0.9],
    [0, 255, 255, 0.9],
  ]);
  const source = ref("");
  const showDetails = ref(true);
  const height = ref("width:100%;height: calc(100vh - 209px);"); */}
</script>

```

组件提供了六个属性

<table>
  <tr>
    <td>streams</td>
    <td>轨迹坐标数组，数据格式 * 必须(src/core/data.js)</td>
  </tr>
   <tr>
    <td>colors</td>
    <td>多轨迹的颜色</td>
  </tr>
   <tr>
    <td>source</td>
    <td>瓦片图的源(目前项目用的官方的,可换成自己的)</td>
  </tr>
   <tr>
    <td>height</td>
    <td>地图的自定义高</td>
  </tr>
   <tr>
    <td>showHeader</td>
    <td>是否展示地图的头部车辆信息</td>
  </tr>
   <tr>
    <td>showDetails</td>
    <td>是否展示小车行驶的时刻数据</td>
  </tr>
</table>