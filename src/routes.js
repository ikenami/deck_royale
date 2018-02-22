const Info = () => System.import('./components/card-info/CardInfo.vue');
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', name: 'home', component: Home, title: 'Home', menu: true},
    { path: '/card-info/:id', name: 'cardInfo', component: Info, title: 'Card Info', menu: false},
    { path: '*', component: Home, menu: false}
];
