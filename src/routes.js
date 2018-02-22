import Home from './components/home/Home.vue';

export const routes = [
    { path: '', name: 'home', component: Home, title: 'Home', menu: true},
    { path: '*', component: Home, menu: false}
];
