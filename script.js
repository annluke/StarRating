function showAvg() {
	var i, j, radioInput, score, rate = [], k = 0, avg = 0;
	for (i = 1; i <= 3; i++) {
		for (j = 1; j <= 5; j++) {
			title = i.toString();
			score = j.toString();
			radioInput = document.getElementById(title + '-' +score);
			if (radioInput.checked) {
				rate[k] = j;
				k++;
				break;
			}
		}
	}
	for (i = 0; i < rate.length; i++) {
		avg += rate[i];
	}
	avg = parseFloat(avg / rate.length).toFixed(0);
	for (i = 1; i <= 5; i++) {
		score = i.toString();
		radioInput = document.getElementById(score);
		if (i <= avg) {
			radioInput.style.color = "#ffbb04";
		}
		else {
			radioInput.style.color = "#aeabab";
		}
	}
	var msg = 'Average (' + avg + ')';
	document.getElementById("message").innerHTML = msg;
}
function clearForm() {
	window.location.reload();
}