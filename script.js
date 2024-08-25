// Get references to the UI elements
var playersChoice = document.getElementById('player-choice');
var computersChoice = document.getElementById('computer-choice');
var result = document.getElementById('winner');

var playerWins = document.getElementById('rc1');
var computerWins = document.getElementById('rc2');
var tie = document.getElementById('rc3');

var playerkanaam = document.getElementById('result-counter11');

var resultPage  = document.querySelector('.result-page');

// Get references to the buttons
var rockBtn = document.querySelector('.rock');
var paperBtn = document.querySelector('.paper');
var scissorBtn = document.querySelector('.scissor');

// Initialize scores
var computerScore = 0;
var playerScore = 0;
var tieScore = 0;
// var counter = 0;

// Submit button function
document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value;
    playerkanaam.textContent = `${name}`;
    if (name) {
        document.getElementById('intro-page').classList.add('slide-up');
        document.getElementById('game-page').classList.add('slide-in');
    }
});

var rounds = document.querySelector('.rounds');
var start = document.querySelector('#start');    

start.addEventListener('click', function () {  
    rounds.style.top = '100vh';
});

// Function to determine the winner
function findWinner(player, computer) {
    if (player === computer) {
        return "tie";
    } else if (player === 1 && computer === 2 ||
               player === 2 && computer === 3 ||
               player === 3 && computer === 1) {
        return "computer";
    } else {
        var namee = document.getElementById('name').value;
        return namee;
    }
}

// Function to update the UI and scores
function updateUI(playerChoice, computerChoice, winner) {
    var namee = document.getElementById('name').value;
    const choices = {1: 'rock', 2: 'paper', 3: 'scissors'};

    function resultt(winner) {
        if (winner === "tie") {
            result.textContent = `Result: ${winner}`;
        } else {
            result.textContent = `Result: ${winner} won`;
        }
    }

    playersChoice.textContent = `Your choice: ${choices[playerChoice]}`;
    computersChoice.textContent = `Computer's choice: ${choices[computerChoice]}`;
    resultt(winner);

    if (winner === "computer") {
        computerScore++;
        computerWins.textContent = `${computerScore}`;
    } else if (winner === namee) {
        playerScore++;
        playerWins.textContent = `${playerScore}`;
    } else if (winner === "tie") {
        tieScore++;
        tie.textContent = `${tieScore}`;
    }
}

function updateResultPanel() {
    // Determine the highest score
    const highestScore = Math.max(playerScore, computerScore, tieScore);

    // Find the winner (ensure findWinner is correctly implemented)
    const winner = findWinner(playersChoice, computersChoice);
    // Update the result panel
    document.getElementById('user').textContent = winner;
    document.getElementById('highest-score').textContent = highestScore;
}

function resultPanel(playerScore, computerScore, tieScore) {
    const roundnumber = Number(document.getElementById('count-number').value);
   
    const sum = playerScore + computerScore + tieScore;
    
    if (sum === roundnumber) {
        
        resultPage.style.top = '0';
        updateResultPanel();
    }
}



// Add event listeners to the buttons
rockBtn.addEventListener('click', function () {
    const playerChoice = 1; // Rock
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    const winner = findWinner(playerChoice, computerChoice);
    
    updateUI(playerChoice, computerChoice, winner);
    resultPanel(playerScore, computerScore, tieScore);
});

paperBtn.addEventListener('click', function () {
    const playerChoice = 2; // Paper
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    const winner = findWinner(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, winner);
    resultPanel(playerScore, computerScore, tieScore);

});

scissorBtn.addEventListener('click', function () {
    const playerChoice = 3; // Scissors
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    const winner = findWinner(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, winner);
    resultPanel(playerScore, computerScore, tieScore);
});
