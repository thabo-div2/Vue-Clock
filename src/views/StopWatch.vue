<template>
	<div class="stopWatch-container">
		<h1>StopWatch</h1>
		<div class="time">
			<span>00:</span>
			<span>00:</span>
			<span>00:</span>
			<span>00</span>
		</div>
		<div class="stopWatch-btns">
			<button @click="startTime(true)" class="startBtn">Start</button>
			<button @click="stopTime()" class="stopBtn">Stop</button>
			<button @click="resetTime()" class="resetBtn">Reset</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "StopWatch",
	data() {
		return {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
			startTimer: false,
			timeOutId: null,
		};
	},
	methods: {
		startTime(val) {
			if (val) {
				this.startTimer = true;
				document.querySelector(".startBtn").disabled = true;
			}

			this.timeOutId = setTimeout(() => {
				this.milliseconds = parseInt(this.milliseconds);
				this.seconds = parseInt(this.seconds);
				this.minutes = parseInt(this.minutes);
				this.hours = parseInt(this.hours);

				this.milliseconds++;

				if (this.milliseconds == 100) {
					this.seconds += 1;
					this.milliseconds = 0;
				}
				if (this.seconds == 60) {
					this.minutes += 1;
					this.seconds = 0;
				}

				if (this.minutes == 60) {
					this.hours += 1;
					this.minutes = 0;
				}
				if (this.milliseconds < 10) {
					this.milliseconds = "0" + this.milliseconds;
				}

				if (this.seconds < 10) {
					this.seconds = "0" + this.seconds;
				}

				if (this.minutes < 10) {
					this.minutes = "0" + this.minutes;
				}

				if (this.hours < 10) {
					this.hours = "0" + this.hours;
				}
				document.querySelector(".time").innerHTML = `
                    <span>${this.hours}:</span>
                    <span>${this.minutes}:</span>
                    <span>${this.seconds}:</span>
                    <span>${this.milliseconds}</span>
                `;
				this.startTime();
			}, 10);
		},
		stopTime() {
			clearTimeout(this.timeOutId);
			document.querySelector(".startBtn").disabled = false;
			// document.querySelector(".stopBtn").disabled = true;
		},
		resetTime() {
			this.milliseconds = 0;
			this.seconds = 0;
			this.minutes = 0;
			this.hours = 0;
			clearTimeout(this.timeOutId);
			document.querySelector(".time").innerHTML = `
                    <span>00:</span>
                    <span>00:</span>
                    <span>00:</span>
                    <span>00</span>
                `;
			document.querySelector(".startBtn").disabled = false;
			// document.querySelector(".resetBtn").disabled = true;
		},
	},
};
</script>

<style></style>
