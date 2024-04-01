

## 项目开始

```sh
pnpm install
```

或者

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### 效果展示

如果没有动态图展示，可能网速不好，请刷新重试

#### 多轨迹,不同车辆轨迹颜色不一样

![211](https://github.com/mrcluo/vue3-openlayer/assets/40492120/b9b8a371-69a0-4a4e-9a2e-03a33147f87e)

#### 小车移动,轨迹留痕,暂停,重置,展示当前时刻的小车数据

![212](https://github.com/mrcluo/vue3-openlayer/assets/40492120/59204f8c-58af-46b0-b177-74c122389446)

### 使用说明

#### 坐标转换问题

注意这里的坐标，根据你用的是默认的OSM瓦片层`new TileLayer({ source: new OSM() })`

那么这里你需要用`transform`把后端给你的坐标转换成投影坐标系

@/core/DrawTracks.js

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

@src/views/openLayer.vue

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
