import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "vue-toastification/dist/index.css";
import mitt from "mitt";

// Initialize Pinia
const pinia = createPinia();

// Add FontAwesome icons
library.add(faCoffee, fas);

// Create Vuetify instance
const vuetify = createVuetify({
    components,
    directives,
});

// Create an event emitter
const Emitter = mitt();

// Create Vue app
const app = createApp(App);

// Configure the app with plugins and provide necessary instances
app.use(pinia)
    .use(vuetify)
    .use(router)
    .provide("Emitter", Emitter)
    .component("font-awesome-icon", FontAwesomeIcon);

// Mount the Vue app
app.mount("#app");
