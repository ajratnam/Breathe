var count = 0;

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function intro(){
    var real = document.getElementById("text");

   real.innerText="Relax and get comfortable" ;
   await sleep(4);
   real.innerText="focus on your breathing";
   await sleep(7);
   real.innerText="exhale, get ready"
   await sleep(8);
   document.getElementById("breathing-indicator").style.display="block";
   await breathe();
}

async function alert(text, time){
    document.getElementById("breathing-indicator").style.display="none";
    var real = document.getElementById("text");
    ogtext = real.innerText
    real.innerText=text;
    await sleep(time);
    document.getElementById("breathing-indicator").style.display="block";
    real.innerText=ogtext;
}

async function breathe(){

    if (count == 4){
        await alert("If you are lightheaded kindly stop now or stay here for 19 seconds to automatically continue", 19);
    }
    
    var dat = document.getElementById("text");
    dat.innerText="Inhale";
    await sleep(4);
    dat.innerText="Hold";
    await sleep(7);
    dat.innerText="Exhale";
    await sleep(8);

    count += 1;

    await breathe();
    
}