let playerScore = 0;
let computerScore = 0;
let maxScore = 5;
let gameOver = true; // start as true until user clicks Start

function startGame() {
    maxScore = parseInt(document.getElementById('max-score').value) || 5;

    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('result').innerHTML = "Game started! 🎮";
}

function play(userChoice) {
    if (gameOver) {
        document.getElementById('result').innerHTML = "⚠️ Click Start Game first!";
        return;
    }

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultText = `You chose ${userChoice} | Computer chose ${computerChoice}<br>`;

    if (userChoice === computerChoice) {
        resultText += "<span class='glow-draw'>It's a Draw!</span>";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        resultText += "<span class='glow-win'>You Win! 🎉</span>";
    } else {
        computerScore++;
        resultText += "<span class='glow-lose'>You Lose 😢</span>";
    }

    // Update UI
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    // Check winner
    if (playerScore >= maxScore) {
        resultText += "<br><strong class='glow-win'>🏆 You won the game!</strong>";
        gameOver = true;
    } else if (computerScore >= maxScore) {
        resultText += "<br><strong class='glow-lose'>💻 Computer wins the game!</strong>";
        gameOver = true;
    }

    document.getElementById('result').innerHTML = resultText;
}