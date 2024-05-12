// Selecting all the boxes, player scores, restart button, and other necessary elements
const boxes = document.querySelectorAll(".box");
const playerXScoreElement = document.getElementById("playerx-score");
const playerOScoreElement = document.getElementById("playero-score");
const restartButton = document.getElementById("restart-el");
const playerTextElement = document.getElementById("playerText");

// Initial scores
let playerXScore = 0;
let playerOScore = 0;

// Constants for player symbols
const O_PLAYER = "O";
const X_PLAYER = "X";

// Variable to track the current player
let currentPlayer = X_PLAYER;

// Array to keep track of the state of each box (whether it's occupied by X, O, or empty)
let spaces = Array(9).fill(null);

// Function to start the game
function startGame() {
    // Adding click event listeners to each box
    boxes.forEach(box => box.addEventListener("click", boxClicked));
}

// Function to handle box click
function boxClicked(event) {
    const clickedBox = event.target;
    const boxIndex = Array.from(boxes).indexOf(clickedBox);

    // If the box is not occupied and the game is not won
    if (!spaces[boxIndex] && !playerHasWon()) {
        spaces[boxIndex] = currentPlayer;
        clickedBox.innerText = currentPlayer;

        // Checking for a winner
        if (playerHasWon()) {
            playerTextElement.textContent = `${currentPlayer} WINS!`;
            updateScores(currentPlayer);
        } else if (isDraw()) {
            playerTextElement.textContent = "DRAW!";
        } else {
            // Switching players
            currentPlayer = currentPlayer === X_PLAYER ? O_PLAYER : X_PLAYER;
            playerTurnIndicator.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

// Function to check if there's a winner
function playerHasWon() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
            return true;
        }
    }
    return false;
}

// Function to check if the game is a draw
function isDraw() {
    return spaces.every(space => space !== null);
}

// Function to update scores
function updateScores(winningPlayer) {
    if (winningPlayer === X_PLAYER) {
        playerXScore++;
        playerXScoreElement.textContent = playerXScore;
    } else {
        playerOScore++;
        playerOScoreElement.textContent = playerOScore;
    }
}

// Function to restart the game
function restart() {
    // Resetting all boxes and spaces
    boxes.forEach(box => {
        box.innerText = "";
    });
    spaces = Array(9).fill(null);
    currentPlayer = X_PLAYER;
    playerTextElement.textContent = "";
    playerTurnIndicator.textContent = `Player ${currentPlayer}'s turn`;
}

// Winning combinations
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// Adding click event listener to the restart button
restartButton.addEventListener("click", restart);

// Starting the game
startGame();

/* 1.contains an array of elements which we gave the class box which rep the   9  squares.
2.Has the restart button
3.Has the playerText which contains the current player or winner.
4.Has the winnerIndicator which basically stores the background color for the winning blocks.
5.the players
 6. An array of 9 null values.
 7.startGamefunction adds an event listener to each of the 9 squares when you click on a box the boxclicked function is called.
 8.  boxClicked function
-It gets the id of the clicked square and checks if the square is empty (i.e., spaces[id] is null).
-If the square is empty, it sets the square's value to the current player (spaces[id] = currentPlayer) and updates the square's text content to the current player.
-It then calls the playerHasWon function to check if the current player has won.
-If the current player has won, it updates the playerText element to display the winner and highlights the winning blocks by setting their background color to the winnerIndicator value.
-If the current player has not won, it switches the current player to the other player (i.e., "X" becomes "O" and vice versa).
9.playerHasWon function
-This function checks if the current player has won by iterating through the winningCombos array.
-Each element in winningCombos is an array of three indices that represent a possible winning combination (e.g., [0, 1, 2] represents the top row).
-For each combination, it checks if all three squares are occupied by the same player (i.e., spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]).
-If a winning combination is found, it returns the indices of the winning blocks. Otherwise, it returns false.
 */


























/* let input1El = document.getElementById("input1-el")
let input2El = document.getElementById("input2-el")
let playerxScore = document.getElementById("playerx-score")
let playeroScore = document.getElementById("playero-score")
//let playerxEnter = document.getElementById("playerx-enter")
//let playeroEnter = document.getElementById("playero-enter")
let playerxEl = document.getElementById("playerx-el")
let playeroEl = document.getElementById("playero-el")
let buttonEl= document.getElementById("button-el")
let submitEl= document.getElementById("submit-el")

let boxes = Array.from(document.getElementsByClassName("box"))

const O_PLAYER = "O"
const X_PLAYER = "X" 
let currentPlayer = X_PLAYER
let spaces = Array[9].fill(null)
function startGame(){
    boxes.forEach(box => {box.addEventListener("click", boxClicked)
    function boxClicked(e){
        const id = e.target.id
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innertext = currentPlayer
    }
    }
})        

} */
