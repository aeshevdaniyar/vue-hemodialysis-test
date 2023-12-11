import { createApp } from "vue";

import App from "./App.vue";
import Antd from "ant-design-vue";

import { createPinia } from "pinia";
import "ant-design-vue/dist/reset.css";
const pinia = createPinia();
const app = createApp(App);

app.use(Antd);

app.use(pinia);

app.mount("#app");
