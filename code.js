// The choices can go into an array.
const choices = ["Lapis", "Papyrus", "Scalpellus"];


// We'll create an object for the player and the computer.
const player = {
  currentChoice: null
}
const computer = {
  currentChoice: null
}

//functions for updating the player choice
function updateLapis(){
  player.currentChoice = choices[0];
  computerChooses()
  compareChoices()
}
function updatePapyrus(){
  player.currentChoice = choices[1]
  computerChooses()
  compareChoices()
}
function updateScalpellus(){
  player.currentChoice = choices[2]
  computerChooses()
  compareChoices()
}

// grabbing the buttons for each choice
let lapisButton = document.getElementById('lapis');
let papyrusButton = document.getElementById('papyrus');
let scalpellusButton = document.getElementById('scalpellus');

//event listeners for button click to run update functions
lapisButton.onclick = updateLapis
papyrusButton.onclick = updatePapyrus
scalpellusButton.onclick = updateScalpellus

//defining function to automate computer choice and update the computer object
function computerChooses(){
let randomIndex = Math.floor(Math.random() * choices.length);
computer.currentChoice = choices[randomIndex];
}

//function to compare the two choices
function compareChoices(){

if (computer.currentChoice === player.currentChoice){
  displayResult("This round is a tie, the computer and player both chose " + player.currentChoice)
}

if (computer.currentChoice === choices[0] && player.currentChoice === choices[1]){
  displayResult("The player wins! The computer chose Lapis and the player chose Papyrus.")
}
else if (computer.currentChoice === choices[0] && player.currentChoice === choices[2]){
  displayResult("The computer wins! The computer chose Lapis and the player chose Scalpellus.")
}

if (computer.currentChoice === choices[1] && player.currentChoice === choices[0]){
  displayResult("The computer wins! The computer chose Papyrus and the player chose Lapis.")
}

else if (computer.currentChoice === choices[1] && player.currentChoice === choices[2]){
  displayResult("The player wins! The computer chose Papyrus and the player chose Scalpellus.")
}

if (computer.currentChoice === choices[2] && player.currentChoice === choices[0]){
  displayResult("The player wins! The computer chose Scalpellus and the player chose Lapis.")
}

else if (computer.currentChoice === choices[2] && player.currentChoice === choices[1]){
  displayResult("The computer wins! The computer chose Scalpellus and the player chose Papyrus.")
}
}

//function to display the result after the choices are compared
function displayResult(result){ 
  const resultText = document.createElement('p');
  resultText.innerText = result;
  document.body.appendChild(resultText);
  resultText.setAttribute("id", "resultText");
}
