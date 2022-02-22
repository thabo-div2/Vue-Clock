<template>
	<h1>Analog Clock</h1>
	<div class="clock-container">
		<div class="analog">
			<div class="outer-clock-face">
				<div class="marking marking-one"></div>
				<div class="marking marking-two"></div>
				<div class="marking marking-three"></div>
				<div class="marking marking-four"></div>
				<div class="inner-clock-face">
					<div class="needle hour" :style="analogStyles.hours"></div>
					<div class="needle minute" :style="analogStyles.minutes"></div>
					<div class="needle second" :style="analogStyles.seconds"></div>
					<div class="center-point"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AnalogClock",

	data() {
		return {
			hours: 24,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
			n: 13,
		};
	},

	watch: {
		hours(newValue) {
			return newValue % 24;
		},
		minutes(newValue) {
			return newValue % 60;
		},
		seconds(newValue) {
			// this._refreshDisplay();
			return newValue % 60;
		},
	},

	computed: {
		analogStyles() {
			const generateStyle = (deg) => {
				return { transform: `translate(-50%, -100%) rotate(${deg}deg)` };
			};
			const styles = {
				hours: generateStyle(this._getHoursDegree()),
				minutes: generateStyle(this._getMinutesDegree()),
				seconds: generateStyle(this._getSecondsDegree()),
			};
			return styles;
		},
	},

	mounted() {
		this._setDate();
		this._pendulum();
		// window.addEventListener("focus", this._refreshDisplay);
	},

	methods: {
		_pendulum() {
			let _this = this;

			const SecondPendulum = () => {
				setTimeout(() => {
					_this.seconds++;
					SecondPendulum();
				}, 1000);
			};

			SecondPendulum();

			const milliSecondPendulum = () => {
				setTimeout(() => {
					_this.milliseconds++;
					milliSecondPendulum();
				}, 1);
			};

			milliSecondPendulum();
		},

		// _refreshDisplay() {
		// 	if (this.seconds > 59) this._setDate();
		// },

		_setDate() {
			let now = new Date();
			this.hours = now.getHours();
			this.minutes = now.getMinutes();
			this.seconds = now.getSeconds();
			this.milliseconds = now.getMilliseconds();
		},

		_getZerofillString(value, divisor) {
			let zeroFill = "00" + value;
			return zeroFill.slice(-2);
		},

		_getHoursDegree() {
			let DEGREE_PER_HOUR = 30;
			let deg = DEGREE_PER_HOUR * this.hours;
			deg += DEGREE_PER_HOUR * (this.minutes / 60);
			return deg;
		},

		_getMinutesDegree(number) {
			let DEGREE_PER_MINUTE = 6;
			let deg = DEGREE_PER_MINUTE * this.minutes;
			deg += DEGREE_PER_MINUTE * (this.seconds / 60);
			return deg;
		},

		_getSecondsDegree(value, divisor) {
			let DEGREE_PER_SECOND = 6;
			let deg = DEGREE_PER_SECOND * this.seconds;
			return deg;
		},
	},
};
</script>

<style>
.clock-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.analog {
	position: relative;
	width: 200px;
	height: 200px;
	box-shadow: -4px -4px 10px rgba(67, 67, 67, 0.5),
		inset 4px 4px 10px rgba(0, 0, 0, 0.5),
		inset -4px -4px 10px rgba(67, 67, 67, 0.5), 4px 4px 10px rgba(0, 0, 0, 0.3);
	border-radius: 50%;
	margin: 50px auto;
}
.outer-clock-face {
	position: relative;
	background: #282828;
	overflow: hidden;
	width: 100%;
	height: 100%;
	border-radius: 100%;
}

.outer-clock-face::after {
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	transform: rotate(90deg);
}

.outer-clock-face::after,
.outer-clock-face::before,
.outer-clock-face .marking {
	content: "";
	position: absolute;
	width: 5px;
	height: 100%;
	background: #1df52f;
	z-index: 0;
	left: 49%;
}
.outer-clock-face .marking {
	background: #bdbdcb;
	width: 3px;
}

.outer-clock-face .marking.marking-one {
	-webkit-transform: rotate(30deg);
	-moz-transform: rotate(30deg);
	transform: rotate(30deg);
}

.outer-clock-face .marking.marking-two {
	-webkit-transform: rotate(60deg);
	-moz-transform: rotate(60deg);
	transform: rotate(60deg);
}

.outer-clock-face .marking.marking-three {
	-webkit-transform: rotate(120deg);
	-moz-transform: rotate(120deg);
	transform: rotate(120deg);
}

.outer-clock-face .marking.marking-four {
	-webkit-transform: rotate(150deg);
	-moz-transform: rotate(150deg);
	transform: rotate(150deg);
}
.inner-clock-face {
	position: absolute;
	top: 10%;
	left: 10%;
	width: 80%;
	height: 80%;
	background: #282828;
	-webkit-border-radius: 100%;
	-moz-border-radius: 100%;
	border-radius: 100%;
	z-index: 1;
}

.inner-clock-face::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 16px;
	height: 16px;
	border-radius: 18px;
	margin-left: -9px;
	margin-top: -6px;
	background: #4d4b63;
	z-index: 11;
}
.needle {
	position: absolute;
	top: 50%;
	left: 50%;
	height: 65px;
	width: 3px;
	transform-origin: bottom center;
	transition: all 0.5s ease-in;
}
.needle.hour {
	transform: translate(-50%, -100%) rotate(0deg);
	background-color: #ed2d34;
}
.needle.minute {
	transform: translate(-50%, -100%) rotate(0deg);
	height: 100px;
	background-color: #ed2d34;
}
.needle.second {
	transform: translate(-50%, -100%) rotate(0deg);
	height: 100px;
	background-color: #ed2d34;
}
.center-point {
	background-color: #e74c3c;
	width: 10px;
	height: 10px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
}

.center-point::after {
	content: "";

	width: 5px;
	height: 5px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
}
</style>
