//Get DOM nodes
const rds = document.querySelector(".rd");
const playerPlay = document.querySelector(".buttons");
const rock = document.querySelector(".b1");
const paper = document.querySelector(".b2");
const scissors = document.querySelector(".b3");
const scorePlayer = document.querySelector(".scr");

var scorePC = 0;
var scorePL = 0;
var rounds = 1;
rds.textContent = rounds++;

var playerSelection = null;

console.log(playerSelection);

playerPlay.onclick = function playRound() {
  rds.textContent = rounds++;
  console.log(rounds);
  console.log(rds);

  if (rds.textContent === "5") {
    document.querySelector(".b1").disabled = true;
    document.querySelector(".b2").disabled = true;
    document.querySelector(".b3").disabled = true;
  }

  rock.onclick = () => {
    playerSelection = 0;
    console.log(playerSelection);
  };

  paper.onclick = () => {
    playerSelection = 1;
    console.log(playerSelection);
  };

  scissors.onclick = () => {
    playerSelection = 2;
    console.log(playerSelection);
  };

  function computerPlay() {
    return Math.floor(Math.random() * 3);
  }

  let computerSelection = computerPlay();

  console.log(computerSelection);

  //rock=0,paper=1,sciss=2

  if (playerSelection === 0 && computerSelection === 0) {
  } else if (playerSelection === 0 && computerSelection === 1) {
    scorePC++;
  } else if (playerSelection === 0 && computerSelection === 2) {
    scorePlayer.textContent = scorePL++;
  } else if (playerSelection === 1 && computerSelection === 0) {
    scorePlayer.textContent = scorePL++;
  } else if (playerSelection === 1 && computerSelection === 1) {
  } else if (playerSelection === 1 && computerSelection === 2) {
    scorePC++;
  } else if (playerSelection === 2 && computerSelection === 0) {
    scorePC++;
  } else if (playerSelection === 2 && computerSelection === 1) {
    scorePlayer.textContent = scorePL++;
  } else if (playerSelection === 2 && computerSelection === 2) {
  }

  return;
};
