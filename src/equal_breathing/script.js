function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function startCountdown() {
    var countDowner = document.getElementById('countdown');
    await sleep(2);

    countDowner.innerText = "Calm Down";
    await sleep(2);

    var timer = 3;
    while (timer > 0) {
        countDowner.innerText = timer--;
        await sleep(1);
    }

    countDowner.innerText = 'GO!';
    await sleep(1);

    document.getElementById("container").style.display = 'block';
    changeState();
}

async function changeState(){
    var state = document.getElementById("inhale-state");
    await sleep(4);
    
    state.innerHTML = "Exhale";
    await sleep(4);
    
    state.innerHTML = "Inhale";
    changeState();
}