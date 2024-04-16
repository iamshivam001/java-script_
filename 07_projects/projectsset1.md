# Project related to DOM

## project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution code

## project 1

```javascript
console.log(shivam)
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(e){

    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  })
});
```

## project 2 solution 

``` javascript
const form = document.querySelector('form');
// this usecase wii give you empty 
// const height = parseInt(document.querySelector('#height').value) 
    

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height <= 0 || isNaN(height)){
    results.innerHTML = `Please give a valid heights ${height}`;
  } else if(weight === '' || weight <= 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span>${bmi}</span>`
    // results.innerHTML = `${bmi}`
    
//   }
  
// });

// Display BMI Weight Guide based on the BMI value
let bmiWeightGuide = '';
if (bmi < 18.6) {
  bmiWeightGuide = 'Underweight';
} else if (bmi >= 18.6 && bmi <= 24.9) {
  bmiWeightGuide = 'Normal Range';
} else {
  bmiWeightGuide = 'Overweight';
}

// Create a new span element
const bmiWeightGuideElement = document.createElement('span');

// Set the text content of the span element to the BMI Weight Guide
bmiWeightGuideElement.textContent = `BMI Weight Guide: ${bmiWeightGuide}`;

// Append the span element to the results
// results.appendChild(bmiWeightGuideElement);

results.innerHTML += `<br><span>BMI Weight Guide: ${bmiWeightGuide}</span>`;

// We append the BMI Weight Guide to the results element by updating its innerHTML. We use the += operator to append to the existing content of results.

// <br> adds a line break for better formatting.
// <span> is used to enclose the BMI Weight Guide for possible styling.
// ${bmiWeightGuide} inserts the BMI Weight Guide determined based on the BMI value into the HTML string.


}
  
 });



```
## project 3 solution

```javascript
const clock = document.getElementById('clock')
// document.querySelector('#clock')




setInterval(function() {
  let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4 solution

```Javascript

let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
   const guess = parseInt(userInput.value);
   console.log(guess);
   validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number!')
  } else if (guess < 1){
    alert('Please enter a number greater than 1')
  } else if (guess > 100){
    alert('Please enter a number less than 100')
  } else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guess it right`)
    endgame();
  } else if(guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if(guess > randomNumber){
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess){
  userInput.Value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}<h2>`;
}


function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
    playGame = true;
  })
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game<h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}



```