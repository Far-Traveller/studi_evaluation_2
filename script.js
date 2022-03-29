/**
 * Variables
 */

// Players names
let firstPlayerName = document.getElementById('first-player-name');
let secondPlayerName = document.getElementById('second-player-name');

// Current player
let playerBackground = document.getElementsById('player-background');
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


/**
 * Functions
 */