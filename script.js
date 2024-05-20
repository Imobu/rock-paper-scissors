"use strict";
let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const champ = document.querySelector(".winner");
const chooses = document.querySelector(".choses");

// const playGame = function () {
// Generate random number
// Human Input

// const manInput = prompt("Which do you choose");

// Generates amd Converts random number to the needed variables
const getComputerChoice = function () {
  const randomNum = Number(Math.trunc(Math.random() * 3) + 1);
  console.log(randomNum);
  if (randomNum === 1) {
    return "Rock";
  } else if (randomNum === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
};
// const computerSelection = getComputerChoice();
// console.log(computerSelection, typeof computerSelection);

// Not really needed
// const getHumanChoice = function () {
//   console.log(manInput);
//   return manInput;
// };
// getHumanChoice();

// Making human selection case insensitive
// const humanSelection = function (manChoice) {
//   return manChoice.charAt(0).toUpperCase() + manChoice.slice(1).toLowerCase();
// };
// const humanFinalSelection = humanSelection(manInput);
// console.log(humanFinalSelection, typeof humanFinalSelection);

const playRound = function (humanChoice, computerChoice) {
  let resultt;
  let winner;

  // Human wins
  console.log("Player selected", humanChoice);
  console.log("Computer selected", computerChoice);
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    resultt = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  }
  // Computer wins
  else if (
    (computerChoice === "Rock" && humanChoice === "Scissors") ||
    (computerChoice === "Paper" && humanChoice === "Rock") ||
    (computerChoice === "Scissors" && humanChoice === "Paper")
  ) {
    resultt = `Computer wins! ${computerChoice} beats ${humanChoice}`;
    computerScore++;

    // } else if (
    //   humanChoice !== "Rock" ||
    //   humanChoice !== "Paper" ||
    //   humanChoice !== "Scissors"
    // ) {
    //   // console.log(humanFinalSelection);
    //   console.log(`Not a valid selection`);
    //   computerScore++;
    //   console.log(`Computer score is ${computerScore}`);
    //   return;
  } else {
    resultt = "TIE";
  }

  // Displays of the result and score
  chooses.textContent = `Computer chose ${computerChoice} and you chose ${humanChoice}  `;
  result.textContent = resultt;
  score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

  if (humanScore === 5) {
    winner = "Player";
    console.log(winner);
    result.classList.add("hidden");

    score.classList.add("hidden");

    champ.textContent = `${winner} wins the game`;
  } else if (computerScore === 5) {
    winner = "Computer";
    console.log(winner);
    score.classList.add("hidden");
    result.classList.add("hidden");

    champ.textContent = `${winner} wins the game`;
  }
};

// Handles the clicking and function calling
rock.addEventListener("click", function () {
  let computerChoice = getComputerChoice();
  playRound("Rock", computerChoice);
});
paper.addEventListener("click", function () {
  let computerChoice = getComputerChoice();
  playRound("Paper", computerChoice);
});
scissors.addEventListener("click", function () {
  let computerChoice = getComputerChoice();
  playRound("Scissors", computerChoice);
});
// playRound(humanFinalSelection, computerSelection);
// };
