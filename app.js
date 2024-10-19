let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const restartButton = document.getElementById('reset-game-btn');
const choices = document.getElementById('choices');
const actionMessage = document.getElementById('action-message');

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function restartGame() {
  restartButton.addEventListener('click', function () {
    restart();
  });
}

function restart() {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  restartButton.style.display = 'none';
  choices.style.display = 'block';
  result_p.innerHTML = '';
  actionMessage.innerHTML = '';
}

function win(userChoice, computerChoice) {
  const userIcon = '👩🏻‍🎤 ';
  const computerIcon = ' 🤖';
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userIcon}${userChoice}
  " Beats 🤜 "  ${computerChoice}${computerIcon} <br>You win!`;

  if (userScore === 3 || computerScore === 3) {
    actionMessage.innerHTML = 'Game over!';
    result_p.innerHTML = `${userIcon}${userChoice}
  " Beats 🤜 "  ${computerChoice}${computerIcon} <br>You won the game!`;
    restartButton.style.display = 'block';
    choices.style.display = 'none';
    restartGame();
  }
}

function lose(userChoice, computerChoice) {
  const userIcon = ' 👩🏻‍🎤';
  const computerIcon = '🤖 ';
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${computerIcon}${computerChoice} " Beats 🤜 " ${userChoice}${userIcon} <br>You lose! `;

  if (userScore === 3 || computerScore === 3) {
    actionMessage.innerHTML = 'Game over!';
    result_p.innerHTML = `${computerIcon}${computerChoice} " Beats 🤜 " ${userChoice}${userIcon} <br>You lose the game!!`;
    restartButton.style.display = 'block';
    choices.style.display = 'none';
    restartGame();
  }
}

function draw(userChoice, computerChoice) {
  const userIcon = '👩🏻‍🎤 ';
  const computerIcon = ' 🤖';
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userIcon}${userChoice} 🤜 🤛 ${computerChoice}${computerIcon} <br>It's a draw!`;

  if (userScore === 3 || computerScore === 3) {
    result_p.innerHTML = 'Game over!';
    restartButton.style.display = 'block';
    choices.style.display = 'none';
    restartGame();
  }
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'RockScissors':
    case 'PaperRock':
    case 'ScissorsPaper':
      win(userChoice, computerChoice);
      break;
    case 'RockPaper':
    case 'PaperScissors':
    case 'ScissorsRock':
      lose(userChoice, computerChoice);
      break;
    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorsScissors':
      draw(userChoice, computerChoice);
      break;
  }
}

function startGame() {
  rock_div.addEventListener('click', function () {
    game('Rock');
  });

  paper_div.addEventListener('click', function () {
    game('Paper');
  });

  scissors_div.addEventListener('click', function () {
    game('Scissors');
  });
}

startGame();
