var rNumber=Math.floor(Math.random()*100)+1;
console.log(rNumber);


var guesses=document.querySelector('.guesses');
var lastResult=document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField=document.querySelector('.guessField');

var guessCount=1;
var resetButton;
guessField.focus();




function checkGuess(){
   var userGuess=Number(guessField.value);
//    console.log(typeof userGuess);
//    console.log(userGuess);

if(guessCount===1){
    guesses.textContent='上次猜的数为：';
}
guesses.textContent +=userGuess+' ';


   if(userGuess===rNumber){
      lastResult.textContent='恭喜你猜对了';
      lastResult.style.backgroundColor = 'green';
       lowOrHi.textContent='';

setGameOver();
    
   }
   else if(guessCount==10){
lastResult.textContent='游戏结束!';
lastResult.style.backgroundColor = 'green';
lowOrHi.textContent='';
setGameOver();
   
}

else{
    lastResult.textContent='你猜错了！';
    lastResult.style.backgroundColor='red';
    lowOrHi.style.backgroundColor='red';
    if(userGuess<rNumber)
    {
        lowOrHi.textContent='你猜低了！';

    }
    else if(userGuess > rNumber) 
    {
      
        lowOrHi.textContent = '你猜高了！';
      }
    }
      guessCount++;
      //清空文字区  
      guessField.value = '';
      //文字输入区获得焦点
      guessField.focus();
}
   



// guesses.style.backgroundColor="red";

// checkGuess();
// console.log(guesses);

guessSubmit.addEventListener('click',checkGuess);

// function setGameOver(){

//     var resetButtonP=document.querySelector("div.resultParas p:last-child")
// console.log(resetButtonP);
// resetButtonP.style.display="block";
// }

// guessField.disabled = true;
// guessSubmit.disabled = true;
// resetButton = document.createElement('button');
// resetButton.textContent = '开始新游戏';
// document.body.appendChild(resetButton);
// resetButton.addEventListener('click', resetGame);
 


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
//   //重置游戏
  function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }