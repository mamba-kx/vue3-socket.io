import { createApp } from "vue";
import "./style.css";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { router } from "./router/index";
import { createPinia } from "pinia";

const store = createPinia();
const app = createApp(App);
app.use(router).use(Antd).use(store);
app.mount("#app");
