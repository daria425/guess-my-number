"use strict";
let guess = Number(document.querySelector(".user-guess").value);
let guessesLeft = Number(document.querySelector(".score").textContent);
let myNumberArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
function myNumber(array) {
  const randomIndex = Math.floor(Math.random() * myNumberArray.length);
  const randomNumber = array[randomIndex];

  return randomNumber;
}

function endGame() {
  if (guessesLeft < 1) {
    document.querySelector(".check").style.display = "none";
    document.querySelector(".again").style.display = "block";
    document.querySelector(".again").addEventListener("click", function () {
      window.location.reload();
    });
  }
}

document.querySelector(".check").addEventListener("click", function () {
  let chosenNumber = myNumber(myNumberArray);
  setTimeout(() => {
    document.querySelector(".number").innerHTML = chosenNumber;
    if (guess === chosenNumber) {
      document.querySelector(".message").textContent = "Correct!";
    } else {
      document.querySelector(".message").textContent = "Wrong!";
      document.querySelector(".score").textContent = --guessesLeft;
    }
    endGame();
  }, 1000);
});
//player chooses number between one and 20,
//function runs for computer to choose random number
