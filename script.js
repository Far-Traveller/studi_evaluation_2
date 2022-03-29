/**
 * Variables
 */

// Players names
let firstPlayerName = document.getElementById('first-player-name');
let secondPlayerName = document.getElementById('second-player-name');

// Current player
let playerBackground = document.getElementById('player-background');
let firstPlayerTurn = document.getElementById('first-player-turn');
let secondPlayerTurn = document.getElementById('second-player-turn');

// Scores
let firstPlayerTotal = document.getElementById('first-player-total');
let firstPlayerCurrent = document.getElementById('first-player-current');
let secondPlayerTotal = document.getElementById('second-player-total');
let secondPlayerCurrent = document.getElementById('second-player-current');

// Buttons to play (they won't be modified)
const btnNewGame = document.getElementById('btn-new-game');
const btnRoll = document.getElementById('btn-roll');
const btnHold = document.getElementById('btn-hold');

// Dice
let diceFace = document.getElementById('dice-face');
const dice6Faces = [
    `<div class="dice face-1"><span class="dot"></span></div>`,
    `<div class="dice face-2"><span class="dot"></span><span class="dot"></span></div>`,
    `<div class="dice face-3"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`,
    `<div class="dice face-4"><div class="dice-column"><span class="dot"></span><span class="dot"></span></div><div class="dice-column"><span class="dot"></span><span class="dot"></span></div></div>`,
    `<div class="dice face-5"><div class="dice-column"><span class="dot"></span><span class="dot"></span></div><div class="dice-column"><span class="dot"></span></div><div class="dice-column"><span class="dot"></span><span class="dot"></span></div></div>`,
    `<div class="dice face-6"><div class="dice-column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="dice-column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>`,
];

// Var for the game
let activePlayer;
let activePlayerCurrent = 0;
let activePlayerTotal = 0;

let isGamePlaying = true;
let player1;
let player2;


/**
 * Functions
 */

// play : restart game


// roll


// hold

// next round
function nextRound() {
    if (activePlayer === player1){
        activePlayer = player2;

        playerBackground.classList.remove('turn-player-1');
        firstPlayerTurn.classList.remove('dot-current-player');
        firstPlayerName.classList.remove('font-current-player');

        playerBackground.classList.add('turn-player-2');
        secondPlayerTurn.classList.add('dot-current-player');
        secondPlayerName.classList.add('font-current-player');
    } else {
        activePlayer = player1;
        
        playerBackground.classList.remove('turn-player-2');
        secondPlayerTurn.classList.remove('dot-current-player');
        secondPlayerName.classList.remove('font-current-player');

        playerBackground.classList.add('turn-player-1');
        firstPlayerTurn.classList.add('dot-current-player');
        firstPlayerName.classList.add('font-current-player');
    }
}