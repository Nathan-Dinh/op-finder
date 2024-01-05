import "./assets/main.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";

import "primevue/resources/themes/vela-blue/theme.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  MdHomeOutlined,
  MdPersonsearchTwotone,
  MdViewlistOutlined,
  RiGithubLine,
  RiLinkedinBoxLine,
  BiFileEarmarkPerson,
} from "oh-vue-icons/icons";

addIcons(
  MdHomeOutlined,
  MdPersonsearchTwotone,
  MdViewlistOutlined,
  RiGithubLine,
  RiLinkedinBoxLine,
  BiFileEarmarkPerson
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(PrimeVue);
app.use(router);

app.mount("#app");
