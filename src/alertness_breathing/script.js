function startCountdown() {
    var countDowner = document.getElementById('countdown');
    setTimeout(()=>{
        countDowner.innerText = "Calm Down";
        setTimeout(()=>{
            var timer = 3;
            countDowner.innerText = timer;
            var scheduler = setInterval(()=>{
                timer--;
                countDowner.innerText = timer;
                if (timer == 0) {
                    countDowner.innerText = 'GO!';
                    clearInterval(scheduler);
                    setTimeout(()=>{
                        document.getElementById("container").style.display = 'block';
                        changeState();
                    }, 1000);
                }
            }, 1000);
        }, 2000);
    }, 2000);
}

function changeState(){
    var state = document.getElementById("inhale-state");
    setTimeout(()=>{
        state.innerHTML = "Exhale";
        setTimeout(()=>{
            state.innerHTML = "Inhale";
            changeState();
        }, 2000);
    }, 6000);
}