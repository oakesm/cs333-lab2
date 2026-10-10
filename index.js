const drumButtons = document.querySelectorAll(".drum");

// 1. Click Listener, function listens for clicks
for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function (event) {
    let buttonInnerHTML = event.target.innerHTML;
    console.log("Clicked:", buttonInnerHTML);
    makeSound(buttonInnerHTML);
  });
}

// 2. Keyboard Listener, function listens for key presses
document.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
  makeSound(event.key);
});

// 3. Shared Function for playing sounds for either clicking or keyboard press
// each audio works for either clicking.
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l": //does not play on my computer but it is being pressed and the function works
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}