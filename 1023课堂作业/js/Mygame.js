var rNumber=Math.floor(Math.random()*100)+1;
// console.log(rNumber);

var guessField=document.querySelector(".guessField");
var guesses=document.querySelector(".guesses");
var lastResult=document.querySelector(".lastResult");
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');

var guessCoutn=1;
var resetButton;
guessField.focus();

function checkGuess(){
   
guesses.innerHTML +=guessField.value+" ";
guesses.style.backgroundColor="red";
}
// checkGuess();
// console.log(guesses);

guessSubmit.addEventListener('click',checkGuess);