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
   await breathe();
}

async function breathe(){
    
    var dat = document.getElementById("text");
    dat.innerText="Inhale";
    await sleep(4);
    dat.innerText="Hold";
    await sleep(7);
    dat.innerText="Exhale";
    await sleep(8);

    await breathe();
    
}