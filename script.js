let count = 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");
let resertDOM = document.querySelector("#resert");

if(counterDOM.innerHTML = localStorage.getItem('counterInfo')) {
    count = parseInt(counterDOM.innerHTML);
}
counterDOM.innerHTML = count;

function makeIncrease() {
    count += 1;
    counterDOM.innerHTML = count;
    window.localStorage.setItem('counterInfo', count);
}

function makeDecrease() {
    count -= 1;
    counterDOM.innerHTML = count;
    window.localStorage.setItem('counterInfo', count);
}

function makeReset() {
    count = 0;
    counterDOM.innerHTML = count;
    window.localStorage.setItem('counterInfo', count);
}


increaseDOM.addEventListener("click", makeIncrease);
decreaseDOM.addEventListener("click", makeDecrease);
resertDOM.addEventListener("click" , makeReset);



