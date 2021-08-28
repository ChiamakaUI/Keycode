let firstHeading = document.getElementById("keysCode");
let secondHeading = document.getElementById("keys");

let getKeyCode = (e) => {

    firstHeading.innerHTML = e.keyCode;
    secondHeading.innerHTML = e.key
}



window.addEventListener("keydown", getKeyCode);