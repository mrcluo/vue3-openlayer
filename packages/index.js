import vue3OpenlayerTrack from "./index.vue"; // 引入封装好的组件
export {vue3OpenlayerTrack}

// 批量组件注册
const install = function (Vue) {
  Vue.component('vue3OpenlayerTrack', vue3OpenlayerTrack);
};

export default {install}; // 这个方法以后再使用的时候可以被use调用