/** @format */

function sleep(seconds) {
	return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function startCountdown() {
	var countDowner = document.getElementById("center");
	await sleep(2);
	countDowner.innerHTML = "<div id='countdown'>3</div>";
	await sleep(1);
	countDowner.innerHTML = "<div id='countdown'>2</div>";
	await sleep(1);
	countDowner.innerHTML = "<div id='countdown'>1</div>";
	await sleep(1);
	countDowner.innerHTML = "<div id='countdown'>GO!</div>";
	await sleep(1);
    countDowner.innerHTML = "<img src='square4.svg'>";
    await breathe();
}


function displayText(text, duration) {
    const leftDiv = document.getElementById("left");

	leftDiv.textContent = text;
	setTimeout(() => {
		leftDiv.textContent = "";
	}, duration);
}

async function breathe() {
	displayText("Breathe In... Feel the air enter your lungs", 4000);
	setTimeout(async () => {
		displayText("Hold your breath...", 4000);
		setTimeout(async () => {
			displayText("Exhale through your mouth", 4000);
			setTimeout(async () => {
				displayText("Hold the lungs in an empty state", 4000);
				await breathe(); 
			}, 4000);
		}, 4000);
	}, 4000);
}


