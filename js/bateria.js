const reproducirA = () => {
  let audioElement = new Audio("../sounds/tom-1.mp3");
  audioElement.play();
};

const reproducirS = () => {
  let audioElement = new Audio("../sounds/tom-2.mp3");
  audioElement.play();
};

const reproducirD = () => {
  let audioElement = new Audio("../sounds/tom-3.mp3");
  audioElement.play();
};

const reproducirF = () => {
  let audioElement = new Audio("../sounds/tom-4.mp3");
  audioElement.play();
};

const reproducirJ = () => {
  let audioElement = new Audio("../sounds/snare.mp3");
  audioElement.play();
};

const reproducirK = () => {
  let audioElement = new Audio("../sounds/crash.mp3");
  audioElement.play();
};

const reproducirL = () => {
  let audioElement = new Audio("../sounds/kick-bass.mp3");
  audioElement.play();
};

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  //alert("key: " + keyName);
  switch (keyName) {
    case "a":
      reproducirA();
      break;
    case "s":
      reproducirS();
      break;
    case "d":
      reproducirD();
      break;
    case "f":
      reproducirF();
      break;
    case "j":
      reproducirJ();
      break;
    case "k":
      reproducirK();
      break;
    case "l":
      reproducirL();
      break;
  }
});

const modal = document.getElementById("modal");
const btn = document.getElementById("btnModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };
const btnModalCancelar = document.getElementById("btnModalCancelar");
const btnModalAceptar = document.getElementById("btnModalAceptar");
btnModalCancelar.onclick = function () {
  modal.style.display = "none";
};
btnModalAceptar.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
