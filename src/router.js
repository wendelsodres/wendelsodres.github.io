import Vue from "vue"
import VueRouter from "vue-router"

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import PortfolioPageDetails from './pages/PortfolioPageDetails.vue';
import ContactPage from './pages/ContactPage.vue';

Vue.use(VueRouter)

export const router = new VueRouter({

    scrollBehavior(to, from , savedPosition){

        if(savedPosition){
            return savedPosition
        } else if(to.hash){
            return { selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },

    mode: 'history',
    routes: [
        { path: '/', name: 'Home', component: HomePage},
        { path: '/sobre', name: 'Sobre', component: AboutPage},
        { path: '/portfolio', name: 'Portfolio', component: PortfolioPage},
        {
            path: '/portfolio/:slug',
            name: 'details',
            component: PortfolioPageDetails,
            props: true,
        },
        { path: '/contato', name: 'Contato', component: ContactPage}
    ]
});

router.beforeEach((to, from, next) => {

    if(to.name !== "details"){
        document.title = to.name + ' - Wendel Sodré';
    }

    next();
});
