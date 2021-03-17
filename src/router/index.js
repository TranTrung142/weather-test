import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import Today from "../components/Today";

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			name: "home",
			path: "/today",
			component: Today,
		},
		{
			name: "home",
			path: "/",
			component: Home,
		},
	]
});