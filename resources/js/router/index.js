import Vue from "vue";
window.VueRouter = require("vue-router/dist/vue-router.common");
Vue.use(VueRouter);

import Core from "../views/layouts/core.vue";
import DashboardRoutes from "../views/dashboard/routes";
import PageRoutes from "../views/page/routes";
import PeopleRoutes from "../views/people/routes";
import ContactRoutes from "../views/contact/routes";
import PageNotFound from "../views/404.vue";

const router = new VueRouter({
    mode: "history",
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact',
    scrollBehavior (to, from, savedPosition) {
        // if(to.hash) {
        //     return {
        //         selector: to.hash
        //     }
        // }
        // return { x: 0, y: 0 }
    },
    routes: [
        {
            path: "",
            component: Core,
            children: [
                ...DashboardRoutes,
                ...PageRoutes,
                ...PeopleRoutes,
                ...ContactRoutes
            ]
        },
        {
            path: "*",
            component: Core,
            children: [
                {
                    path: "",
                    name: "404",
                    components: {
                        default: PageNotFound
                    }
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    next()
})

export default router;