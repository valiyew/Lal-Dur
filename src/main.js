import { createApp } from "vue";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css";

import router from "./router";

import App from "./App.vue";

const app = createApp(App);

app.use(router).use(PrimeVue);

app.mount("#app");
