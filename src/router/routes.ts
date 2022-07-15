export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */'../views/Home.vue')
    }, {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "Home" */'../views/About.vue')
    }
]
