/** @format */

const leftDiv = document.getElementById("left");

function displayText(text, duration) {
	leftDiv.textContent = text;
	setTimeout(() => {
		leftDiv.textContent = "";
	}, duration);
}

function breathe() {
	displayText("Breathe In... Feel the air enter your lungs", 4000);
	setTimeout(() => {
		displayText("Hold your breath...", 4000);
		setTimeout(() => {
			displayText("Exhale through you mouth", 4000);
			setTimeout(() => {
				displayText("Inhale", 4000);
				setTimeout(breathe, 4000);
			}, 4000);
		}, 4000);
	}, 4000);
}

breathe();
