import Vue from 'vue';
import Router from 'vue-router';
import Home from '../page/Home';
import List from '../page/List';
import Add from '../page/Add';
import Detail from '../page/Detail';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/home', component: Home
		},
		{
			path: '/list', component: List
		},
		{
			path: '/add', component: Add
		},
		{
			path: '/detail/:bid', component: Detail, name: 'detail'
		},
		{
			path: '*', redirect: '/home'
		}
	]
});
