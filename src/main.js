import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import { ValidationProvider } from "vee-validate";
import { extend } from "vee-validate";
import { ValidationObserver } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

import { required, email, min, alpha_num } from "vee-validate/dist/rules";
extend("required", required);
extend("email", email);
extend("min", min);
extend("alpha_num", alpha_num);
import moment from "moment";
Vue.prototype.$moment = moment;
var infiniteScroll = require("vue-infinite-scroll");
Vue.use(infiniteScroll);

import locale from "element-ui/lib/locale/lang/en";

Vue.use(ElementUI, {
  locale,
});
Vue.use(VueRouter);

Vue.config.productionTip = false;

import axios from "axios";

Vue.prototype.$axios = axios;
import { store } from "./vuexStore.js";

const routes = [
  {
    path: "/",
    components: {
      Index: LandingPage,
    },
  },
  {
    path: "/signup",
    components: {
      Index: SignUp,
    },
  },
  {
    path: "/login",
    components: {
      Index: Login,
    },
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
