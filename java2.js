function somme(){
    var somme = document.getElementById("somme");
    console.log("click confirmed");
    var t = event.timeStamp;
    t = t/1000;
    console.log(t);
    t = t * 0.810;
    console.log(t);
    somme.textContent = Math.round(t);
}

function pdl(){
    var pdl = document.getElementById("pdl");
    console.log("click confirmed");
    var t = event.timeStamp;
    t = t/1000;
    console.log(t);
    t = t * 0.0382;
    console.log(t);
    pdl.textContent = Math.round(t);
}

function verdun(){
    var verdun = document.getElementById("verdun");
    console.log("click confirmed");
    var t = event.timeStamp;
    t = t/1000;
    console.log(t);
    t = t * 0.289;
    console.log(t);
    verdun.textContent = Math.round(t);
}