import { Feature } from "ol";

import { Polygon } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import { Vector } from "ol/source";
import { Fill, Style } from "ol/style";

export default class DrawArea {
  constructor(map) {
    this.map = map;
    this.areasLayer = [];
    this.styles = {};
  }

  singleArea(data) {
    const polygonFeature = new Feature({
      type: 'polygon',
      geometry: new Polygon([data]),
    });

    return {
      layer: new VectorLayer({
        source: new Vector({
          features: [polygonFeature],
        }),
        style: (feature) => {
          return this.styles[feature.get('type')];
        },
      }),
    };
  };

  initMultiplyArea(areas) {
    return areas.map((item) => {
      return this.singleArea(item)
    });
  };

  addLayer(areas) {
    this.styles = {
      polygon: new Style({
        fill: new Fill({
          color: 'rgba(0, 0, 255, 0.3)' // 设置填充颜色为蓝色
        })
      }),
    };
    if (Array.isArray(areas) && areas.length > 0) {
      this.areasLayer = this.initMultiplyArea(areas);
      this.areasLayer.forEach((item) => {
        // 在地图中画不同区域
        this.map.addLayer(item.layer);
      });
    }
  };

  addArea(data) {
    console.log("🚀 ~ addArea ~ data:", data)
    this.addLayer(data);
  };

}