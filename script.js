function play(userChoice) {
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
        resultText += "<span class='glow-win'>You Win! 🎉</span>";
    } else {
        resultText += "<span class='glow-lose'>You Lose 😢</span>";
    }

    document.getElementById('result').innerHTML = resultText;
}let playerScore = 0;
let computerScore = 0;

function play(userChoice) {
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

    // Update scores in UI
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    document.getElementById('result').innerHTML = resultText;
}