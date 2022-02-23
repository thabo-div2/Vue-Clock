<template>
	<nav class="navbar">
		<h1>Clock App</h1>
		<button @click="changeColor()" class="nav-button">
			<i class="fas fa-moon"></i>
		</button>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isDarkMode: false,
		};
	},
	methods: {
		changeColor() {
			let navButton = document.querySelector(".nav-button");
			if (!this.isDarkMode) {
				this.isDarkMode = !this.isDarkMode;
				document.querySelector("html").classList.add("dark");
				navButton.innerHTML = `<i class="fas fa-sun"></i>`;
			} else {
				this.isDarkMode = !this.isDarkMode;
				document.querySelector("html").classList.remove("dark");
				navButton.innerHTML = `<i class="fas fa-moon"></i>`;
			}
		},
	},
};
</script>

<style scoped>
.navbar {
	display: flex;
	position: relative;
}
h1 {
	top: 0;
	left: 0;
	position: absolute;
}
.nav-button {
	top: 0;
	right: 0;
	position: absolute;
	border: none;
}
</style>
