import { createApp } from "vue";
import "./style/style.css";
import "./style/main.css";
import router from "./router";
import App from "./App.vue";


createApp(App)
.use(router)
.mount("#app");
