
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



## 普通使用

### 项目开始

```sh
pnpm install
```

或者

```sh
npm install
```

### 运行

```sh
npm run dev
```

### 效果展示

如果没有动态图展示，可能网速不好，请刷新重试

#### 多轨迹,不同车辆轨迹颜色不一样

![111](https://github.com/mrcluo/vue3-openlayer/assets/40492120/3a1dc700-1056-4d3d-9161-9b2d83922f6f)


#### 小车移动,轨迹留痕,暂停,重置,展示当前时刻的小车数据

![222](https://github.com/mrcluo/vue3-openlayer/assets/40492120/c51a2fcb-6746-4983-a32c-5cbd89ff60bf)


### 使用说明

#### 普通使用把下面这个注释掉

**@/packages/index.vue**

```js
// npm包所需: 按需引入element组件
  import 'element-plus/dist/index.css'
  import {
    ElCheckbox, ElCheckboxGroup, ElImage
  } from 'element-plus'
  // npm包所需: no.css
  import 'virtual:uno.css'

```

#### 坐标转换问题

注意这里的坐标，根据你用的是默认的OSM瓦片层`new TileLayer({ source: new OSM() })`

那么这里你需要用`transform`把后端给你的坐标转换成投影坐标系

**@/core/DrawTracks.js**

```js
singleTrack(trackLineCoordinate, currentTrackColor) {
    let coordinates = trackLineCoordinate.map(item => {
      let { longitude, latitude } = item
      return transform([longitude, latitude], "EPSG:4326", "EPSG:3857")
      // return [longitude, latitude]
    })
```

#### 瓦片地图

因为隐私问题，demo中的瓦片地址改成了自带的`OSM`，地图展示的UI和上方面的demo有出入。开发者请使用改成你们内部的瓦片源地址

更改位置：

**@/packages/index.vue**

```js
  const initMap = () => {
    // 初始化地图对象
    map.value = new Map({
      // 设置地图图层
      layers: [
        // 创建一个使用Open Street Map地图源的瓦片图层
        new TileLayer({ source: '此处写你们自己的瓦片引入方式和地址' }),
      ],
      // ...
    });
  };
```
**OSM瓦片形式的地图UI**

![1122](https://github.com/mrcluo/vue3-openlayer/assets/40492120/99ed29cd-29b9-408d-9d78-f8e904e9dce5)

