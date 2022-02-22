<template>
	<h1>Digital Clock</h1>
	<div class="container">
		<div class="timer">
			<div>{{ hours }}</div>
			<div>:</div>
			<div>{{ minutes }}</div>
			<div>:</div>
			<div>{{ seconds }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DigitalClock",
	data() {
		return {
			// storing variables
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	},
	methods: {
		// function to get the time
		getClock() {
			const d = new Date();
			// hours: minutes: seconds
			let hours = d.getHours();
			let minutes = d.getMinutes();
			let seconds = d.getSeconds();
			hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
			minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
			seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds;
			this.hours = hours;
			this.minutes = minutes;
			this.seconds = seconds;
		},
	},
	// when mounted display the time
	mounted() {
		setInterval(() => this.getClock(), 1000);
	},
};
</script>

<style>
.timer {
	display: flex;
	justify-content: center;
	align-items: center;
}
.timer > div {
	font-family: "alarm clock";
	font-size: x-large;
}
</style>
