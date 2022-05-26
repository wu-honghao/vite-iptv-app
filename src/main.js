import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router/index.js";
import "ant-design-vue/dist/antd.css";
import "video.js/dist/video-js.css";

createApp(App).use(store).use(router).mount("#app");
