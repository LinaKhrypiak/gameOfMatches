const matches = 25;
const minMove = 1;
const maxMove = 3;
let totalMatches = matches;
let totalMatchesOfPlayer1 = 0;
let totalMatchesOfPlayer2 = 0;
let result = '';

function selectGameMode(mode) {
  document.querySelector('.game-mode').classList.add('hidden');
  if (mode === 'player') {
    document.getElementById('playerGameplay').classList.remove('hidden');
  } else if (mode === 'ai') {
    document.getElementById('aiGameplay').classList.remove('hidden');
  }
}

function playAgainstPlayer() {
  const player1Move = parseInt(document.getElementById('player1Move').value);
  const player2Move = parseInt(document.getElementById('player2Move').value);
  if (player1Move >= minMove && player1Move <= maxMove && player2Move >= minMove && player2Move <= maxMove && player1Move + player2Move <= totalMatches) {
    totalMatches -= (player1Move + player2Move);
    totalMatchesOfPlayer1 += player1Move;
    totalMatchesOfPlayer2 += player2Move;
    if (totalMatches <= 0) {
      result = totalMatchesOfPlayer1 % 2 === 0 ? "Player1 won" : "Player2 won";
    } else {
      result = `Matches left: ${totalMatches}`;
    }
    document.getElementById('totalMatchesOfPlayer1').innerText = "Total matches of Player1: " + totalMatchesOfPlayer1;
    document.getElementById('totalMatchesOfPlayer2').innerText = "Total matches of Player2: " + totalMatchesOfPlayer2;
    document.getElementById('result').innerText = result;
  } else {
    alert('Choose other numbers');
  }
}


function getAIMove(playerMove) {
  if(totalMatchesOfPlayer2 % 2 === 0 && totalMatches <= 6 && playerMove + 2 <= totalMatches){
    return 2;
  } else if (playerMove + maxMove <= totalMatches) {
    return Math.floor(Math.random() * maxMove) + minMove;
  }
  else {
    return minMove;
  }
}


function playAgainstAI() {
  const playerMove = parseInt(document.getElementById('playerMove').value);
  let aiMove = getAIMove(playerMove);
  if (playerMove >= minMove && playerMove <= maxMove && playerMove + aiMove <= totalMatches) {
    totalMatches -= (playerMove + aiMove);
    totalMatchesOfPlayer1 += playerMove;
    totalMatchesOfPlayer2 += aiMove;
    if (totalMatches <= 0) {
      result = totalMatchesOfPlayer1 % 2 === 0 ? "Player won" : "AI won";
    } else {
      result = `Matches left: ${totalMatches}`;
    }
    document.getElementById('totalMatchesOfPlayer1').innerText = "Total matches of Player: " + totalMatchesOfPlayer1;
    document.getElementById('totalMatchesOfPlayer2').innerText = "Total matches of AI: " + totalMatchesOfPlayer2;
    document.getElementById('result').innerText = result;
  } else {
    alert('Choose other numbers');
  }
}

