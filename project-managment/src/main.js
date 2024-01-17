import 'material-dashboard/assets/css/material-dashboard.css';
import 'material-dashboard/assets/css/nucleo-icons.css';
import './assets/style.css'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./state/store";

const app = createApp(App);
console.log(store)

app.use(store);
app.use(router);


app.mount("#app");
