function Stopwatch() {

	var timeStart = null 
	var timeStop = null
	var stopDuration = 0;
	var started = null;

	function clock() {
		var currentTime = new Date();
		var timeElapsed = new Date(currentTime - timeStart - stopDuration);
		var min = timeElapsed.getUTCMinutes();
		var sec = timeElapsed.getUTCSeconds();
		var ms = timeElapsed.getUTCMilliseconds();

		document.getElementById("display").innerHTML =
		(min > 9 ? min : "0" + min) + ":" +
		(sec > 9 ? sec : "0" + sec) + "." +
		(ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
	}

	this.start = function() {
		if (timeStart === null) {
			timeStart = new Date();
		}
		if (timeStop !== null) {
			stopDuration += (new Date() - timeStop);
		}

		started = setInterval(clock, 10);
	}

	this.stop = function() {
		timeStop = new Date();
		clearInterval(started);
	}

	this.reset = function() {
		clearInterval(started);
		stoppedDuration = 0;
		timeStart = null;
		timeStop = null;
		document.getElementById("display").innerHTML = "00:00:00.000";
	}
}
const sw = new Stopwatch()
