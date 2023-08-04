// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random numbers for player 1 and player 2
let randomNumber1 = getRandomNumber(1, 6);
let randomNumber2 = getRandomNumber(1, 6);

// Set dice images for player 1 and player 2
const diceImageElement1 = document.getElementById('diceImage1');
const diceImageFilename1 = `images/dice${randomNumber1}.png`;
diceImageElement1.setAttribute('src', diceImageFilename1);

const diceImageElement2 = document.getElementById('diceImage2');
const diceImageFilename2 = `images/dice${randomNumber2}.png`;
diceImageElement2.setAttribute('src', diceImageFilename2);

// Determine the result and update the text in the <h1> element
const resultElement = document.getElementById('resultText');
let resultText;

if (randomNumber1 > randomNumber2) {
    resultText = 'Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
    resultText = 'Player 2 Wins!';
} else {
    resultText = 'It\'s a Draw!';
}

resultElement.innerHTML = resultText;
