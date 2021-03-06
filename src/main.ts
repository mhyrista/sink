import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import "./assets/index.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");

// Import Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMicrophone, faCamera } from "@fortawesome/free-solid-svg-icons";

library.add(faMicrophone);
library.add(faCamera);
