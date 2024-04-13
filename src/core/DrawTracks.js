import { Feature } from "ol";

import { LineString, Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import { Vector } from "ol/source";
import { Circle, Fill, Icon, Stroke, Style } from "ol/style";
import { getVectorContext } from "ol/render";
import { transform } from "ol/proj";
import markIcon from "@/assets/images/car-track.png";

export default class DrawTracks {
  constructor(map, animating, trackDetails) {
    this.map = map;
    this.speed = 200;
    this.tracksLayer = [];
    this.allOverAnimates = []
    this.styles = {};
    this.lastTime;
    this.distance = 0;
    this.animating = animating;
    this.trackDetails = trackDetails
  }

  singleTrack(trackLineCoordinate, currentTrackColor) {
    let coordinates = trackLineCoordinate.map(item => {
      let { longitude, latitude } = item
      return transform([longitude, latitude], "EPSG:4326", "EPSG:3857")
      // return [longitude, latitude]
    })
    let trackLine = new LineString(coordinates)
    const trackFeature = new Feature({
      type: 'track',
      geometry: trackLine,
    });
    const carTrackFeature = new Feature({
      type: 'carTrack',
      geometry: new LineString([trackLine.getFirstCoordinate()]),
    });
    const startMarker = new Feature({
      type: 'geoMarker',
      geometry: new Point(trackLine.getFirstCoordinate()),
    });
    // const endMarker = new Feature({
    //   type: 'geoMarker',
    //   geometry: new Point(trackLine.getLastCoordinate()),
    // });
    const position = startMarker.getGeometry().clone();
    const carPosition = carTrackFeature.getGeometry().clone();
    // 矢量图层几何图形 - 移动点
    const geoMarker = new Feature({
      type: 'icon',
      geometry: position,
    });

    return {
      trackLine,
      carTrackFeature,
      carPosition,
      geoMarker,
      position,
      passCoordinates: [],
      trackLineCoordinate,
      layer: new VectorLayer({
        source: new Vector({
          features: [trackFeature, carTrackFeature, geoMarker],
        }),
        style: (feature) => {
          // 自定义线的颜色
          if (feature.get('type') === 'track') {
            return new Style({
              stroke: new Stroke({
                width: 6,
                color: currentTrackColor,
              }),
            })
          }
          return this.styles[feature.get('type')];
        },
      }),
    };
  };

  initMultiplyTrack(tracks, chooseTracks) {
    return tracks.map((item) => {
      let currentTrackColor = chooseTracks.filter(val => +val.rybh === +item[0]?.rybh)[0]?.color
      // console.log("🚀 ~ returntracks.map ~ currentTrackColor:", currentTrackColor)
      return this.singleTrack(item, currentTrackColor)
    });
  };

  addLayer(tracks, chooseTracks) {
    this.styles = {
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
          fill: new Fill({ color: '#333' }),
          stroke: new Stroke({
            color: '#f00',
            width: 2,
          }),
        }),
      }),
    };
    if (Array.isArray(tracks) && tracks.length > 0) {
      this.tracksLayer = this.initMultiplyTrack(tracks, chooseTracks);
      this.tracksLayer.forEach((item) => {
        // 在地图中画不同轨迹layer
        this.map.addLayer(item.layer);
      });

    }
  };
  drawCarTrack(event, item) {
    const vectorContext1 = getVectorContext(event);
    vectorContext1.setStyle(this.styles.carTrack);
    vectorContext1.drawGeometry(item.carPosition);
  };
  moveFeature(event, item) {
    const time = event.frameState.time;
    const elapsedTime = time - this.lastTime;
    this.distance = (this.distance + (this.speed * elapsedTime) / 1e6) % 2;
    // 得到当前时刻的坐标数据
    let _index = Math.floor(this.distance * item.trackLineCoordinate.length)
    let _item = item.trackLineCoordinate[_index]
    if (_item) this.trackDetails.value[_item.rybh] = _item

    this.lastTime = time;

    const currentCoordinate = item.trackLine.getCoordinateAt(this.distance > 1 ? 2 - this.distance : this.distance);
    if (this.distance >= 1) {
      this.stopMove('single', item);
    }
    // 给点几何图形设置坐标 ol/geom/Point/setCoordinates
    item.position.setCoordinates(currentCoordinate);
    // 给移动线几何设置坐标
    item.passCoordinates.push(currentCoordinate);
    item.carPosition.setCoordinates(item.passCoordinates);
    this.drawCarTrack(event, item);
    // 得到矢量画布的上下文用于后面画到画布上
    const vectorContext = getVectorContext(event);
    // 给点几何图形设置icon样式
    vectorContext.setStyle(this.styles.icon);
    // 把几何图形画到画布上 drawGeometry接收geometry - new Point()
    vectorContext.drawGeometry(item.position);
    // tell OpenLayers to continue the postrender animation
    this.map.render();
  };

  resetMove(data, chooseTracks) {
    // console.log("🚀 ~ DrawTracks ~ resetMove ~ chooseTracks:", chooseTracks)
    // 重新开始
    this.stopMove()
    this.distance = 0;
    this.lastTime = null
    this.allOverAnimates = []
    this.animating.value = false;
    this.tracksLayer.forEach((item) => {
      item.layer.getSource().clear();
    });
    this.tracksLayer = [];

    this.addTrack(data, chooseTracks)
  }

  startMove(chooseTracks) {
    if (!chooseTracks.length) return
    if (this.animating.value) return
    if (this.distance >= 1) return
    this.animating.value = true;
    this.lastTime = Date.now();
    this.tracksLayer.forEach((item) => {
      item.moveFeature = (e) => this.moveFeature(e, item);
      item.layer.on('postrender', item.moveFeature);
      item.geoMarker.setGeometry(null);
    });
  };

  checkAllOverAnimating() {
    if (this.allOverAnimates.length === this.tracksLayer.length) this.animating.value = false;
  }

  stopMove(type, item) {
    if (!this.animating.value) return
    // console.log('🚀 ~ stopMove ~ item:', item);
    if (type === 'single') {
      item.geoMarker.setGeometry(item.position);
      item.carTrackFeature.setGeometry(item.carPosition);
      item.layer.un('postrender', item.moveFeature);
      this.allOverAnimates.push(true)
      this.checkAllOverAnimating()
      return;
    }
    // 这个animating是全局的动画属性，不适用single
    this.animating.value = false;
    this.tracksLayer.forEach((item) => {
      item.geoMarker.setGeometry(item.position);
      item.carTrackFeature.setGeometry(item.carPosition);
      item.layer.un('postrender', item.moveFeature);
    });
  };

  addTrack(data, chooseTracks) {
    // console.log("🚀 ~ addTrack ~ data:", data)
    this.addLayer(data, chooseTracks);
  };

}