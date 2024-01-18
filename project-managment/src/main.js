import 'material-dashboard/assets/scss/material-dashboard.scss';
import 'material-dashboard/assets/js/core/bootstrap.min.js';
import 'material-dashboard/assets/js/material-dashboard.min.js';
import './assets/scss/variables.scss'

import 'material-dashboard/assets/css/nucleo-icons.css';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./state/store";

const app = createApp(App);
console.log(store)

app.use(store);
app.use(router);


app.mount("#app");
