var randomNumber1 = Math.floor(Math.random() * (6 - 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (6 - 1) + 1);

var diceImages = document.querySelectorAll("img");
var diceOne = diceImages[0];
var diceTwo = diceImages[1];

console.log(diceOne)
console.log(diceTwo)
diceOne.setAttribute("src", `./images/dice${randomNumber1}.png`);
diceTwo.setAttribute("src", `./images/dice${randomNumber2}.png`);

var winner = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
  winner.innerHTML = "Player 1 Wins ^_^";
}else if(randomNumber1 === randomNumber2){
  winner.innerHTML = "Its a Tie ^_^";
}
else
  winner.innerHTML = "Player 2 Wins ^_^";
