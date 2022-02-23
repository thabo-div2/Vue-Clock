<template>
	<div class="home">
		<DigitalClock v-if="isShowing" />
		<AnalogClock v-else />
	</div>
	<button @click="isDisplaying">Toggle</button>
</template>

<script>
import DigitalClock from "../components/DigitalClock.vue";
import AnalogClock from "../components/AnalogClock.vue";
export default {
	components: {
		DigitalClock,
		AnalogClock,
	},
	data() {
		return {
			isShowing: false,
		};
	},

	methods: {
		isDisplaying() {
			this.isShowing = !this.isShowing;
		},
	},
};
</script>

<style scoped>
.home {
	display: flex;
	justify-content: center;
	align-items: center;
}
button {
	display: flex;
	justify-content: center;
	align-items: center;
	place-items: center;
	position: absolute;
	top: 50%;
	right: 46%;
	margin: 30px 20px;
}
</style>
