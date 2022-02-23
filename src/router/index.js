import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import StopWatch from "../views/StopWatch.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/stop-watch",
		name: "StopWatch",
		component: StopWatch,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
