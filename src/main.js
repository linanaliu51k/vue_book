import Vue from 'vue';
import App from './App.vue';
import router from './routers';

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';
import 'bootstrap/dist/css/bootstrap.css';

new Vue({
	el: '#app',
	render: h => h(App),
	router
});
