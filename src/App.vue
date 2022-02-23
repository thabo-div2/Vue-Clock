<template>
	<TopNavbar />
	<BottomNavbar />
	<router-view />
</template>

<script>
import TopNavbar from "./components/TopNavbar.vue";
import BottomNavbar from "./components/BottomNavbar.vue";

export default {
	components: {
		TopNavbar,
		BottomNavbar,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column; */
}
</style>
