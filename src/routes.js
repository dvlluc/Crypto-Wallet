// default
import Vue from "vue";
import Router from "vue-router"

Vue.use(Router);

// Pages

import Home from "./pages/Home.vue"
import CoinInfo from "./pages/CoinInfo.vue"
import NotFound from "./pages/404.vue"

// Routering

export default new Router({
    routes:[
        {
            path:'/',
            name:"home",
            component: Home
        },
        {
            path:'/coininfo/:id',
            name:"coininfo",
            component: CoinInfo
        },
        {
            path:'*',
            name:"notFound",
            component: NotFound
        },
    ]
})