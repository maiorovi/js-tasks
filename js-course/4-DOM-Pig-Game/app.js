/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

function initGame() {
    scores = [0, 0];
     roundScore = 0;
     activePlayer = 0;
     isGameEnd = false;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('#name-1').classList.remove('winner');
    document.querySelector('#name-0').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}

let scores, roundScore, activePlayer, isGameEnd = false;
initGame();

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// document.querySelector('#current-'+activePlayer).textContent = dice;
// document.querySelector('#current-'+activePlayer).innerHtml = '<em>' + dice + '</em>';



document.querySelector('.btn-roll').addEventListener('click', function(){
    if (!isGameEnd) {
        dice = Math.floor(Math.random() * 6) + 1;

        document.querySelector('#current-' + activePlayer).textContent = dice;
        let image = document.querySelector('.dice');
        image.style.display = 'block';
        image.src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            // let score = document.querySelector('#current-'+activePlayer).textContent;
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            roundScore = 0;
            document.querySelector('#score-' + activePlayer).textContent = 1;
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            switchPlayer();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('active')
        }
    }
});


function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
}

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (!isGameEnd) {
        scores[activePlayer] += roundScore;
        if (scores[activePlayer] > 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('#name-' + activePlayer).classList.add('winner');
            document.querySelector('.dice').style.display = 'none';
            isGameEnd = true;
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            return
        }
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        document.querySelector('#current-' + activePlayer).textContent = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        switchPlayer();
        roundScore = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    }
});

document.querySelector('.btn-new').addEventListener('click', function() {
    initGame();
});

var x = document.querySelector('#score-0').textContent;
console.log(x);