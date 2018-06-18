require("./mixins");

import router from "./router";
import store from "./store";

require("./bootstrap");
require("./components");

const app = new Vue({
    router,
    store
});

app.$mount("#app")