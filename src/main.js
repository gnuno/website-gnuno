import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Ckeditor from "@ckeditor/ckeditor5-vue";

createApp(App)
  .use(store)
  .use(Ckeditor)
  .use(router)
  .mount("#app");
