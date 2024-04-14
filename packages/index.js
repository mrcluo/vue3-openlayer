import vue3OpenlayerTrack from "./index.vue"; // 引入封装好的组件
export {vue3OpenlayerTrack}

// 批量组件注册
const install = function (Vue) {
  Vue.component('vue3OpenlayerTrack', vue3OpenlayerTrack);
};

export default {install}; // 这个方法以后再使用的时候可以被use调用

/**
 * 发包流程
 * 1. 配置vite.config.js
 * 2. 配置package.json
 * 3. 打包 npm run build
 * 4. npm login 浏览器打开提供地址进行登录
 * 5. 如果失败：切回镜像 npm config set registry http://registry.npmjs.org/
 * 6. npm publish
 */