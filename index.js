// Get references to the DOM elements
const startButton = document.getElementById("startButton");

// Function to start the game
function startGame() {
    const maxAttempts = 5;
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    while (attempts < maxAttempts) {
        const userGuess = prompt("Guess the number (between 1 and 100):");

        if (userGuess === null) {
            // User clicked Cancel or closed the prompt
            alert("Game over. You quit!");
            break;
        }

        const guess = parseInt(userGuess);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            attempts++;

            if (guess === randomNumber) {
                alert(`Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`);
                break;
            } else if (guess < randomNumber) {
                alert("Try a higher number.");
            } else {
                alert("Try a lower number.");
            }
        }
    }

    if (attempts >= maxAttempts) {
        alert(`You've reached the maximum number of attempts. The correct number was ${randomNumber}.`);
    }
}

// Event listener for the start button
startButton.addEventListener("click", startGame);