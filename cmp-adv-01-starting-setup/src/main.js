import { createApp } from "vue";

import App from "./App.vue";

import BaseBadge from "./components/BaseBadge.vue";
import baseCard from "./components/baseCard";
const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-card", baseCard);
app.mount("#app");
