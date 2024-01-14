import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./state/store";



const app = createApp(App);
console.log(store)

app.use(store);
app.use(router);


app.mount("#app");
