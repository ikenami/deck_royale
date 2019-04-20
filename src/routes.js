// const Info = () => import('./components/card-info/CardInfo.vue');
// const Cards = () => import('./components/cards/Cards.vue');
// const Arenas = () => import('./components/arenas/Arenas.vue');
import Home from './components/home/Home.vue';
import Arenas from './components/arenas/Arenas.vue';
import Cards from './components/cards/Cards.vue';
import Info from './components/card-info/CardInfo.vue';

export const routes = [
    { path: '', name: 'home', component: Home, title: 'Home', menu: true},
    { path: '/arenas', name: 'arenas', component: Arenas, title: 'Arenas', menu: true},
    { path: '/cards', name: 'cards', component: Cards, title: 'Cards', menu: true},
    { path: '/card-info/:id', name: 'cardInfo', component: Info, title: 'Card Info', menu: false},
    { path: '/cards/card-info/:id', name: 'cardsInfo', component: Info, title: 'Cards Info', menu: false},
    { path: '*', component: Home, menu: false}
];
