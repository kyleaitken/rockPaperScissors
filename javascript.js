// This program performs a single game of Rock Paper Scissors, and then
// a game to 3 of RPS

const pointsToWin = 5;


const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click', () => {
    alert("Time to play rock, paper, scissors! Select one of the 3 icons to pick your throw. First to " + pointsToWin + " wins!");
    game();
});

// Returns random selection from Rock/Paper/Scissors

function getComputerChoice() {
    let myarr = ['Rock', 'Paper', 'Scissors']
    let randomElem = myarr[Math.floor(Math.random() * myarr.length)]
    console.log(randomElem);
    return randomElem
}


// Plays one round of RPS

function playRound(user, comp) {
    console.log(user);
    console.log(comp);
    if (user == comp) {
        alert("It's a tie")
        return;
    } else if (user == 'Rock'){
        switch (comp) {
            case 'Paper':
                alert("" + comp + ' beats ' + user + '. Computer wins this round.');
                return 'comp';
            case 'Scissors':
                alert("" + user + ' beats ' + comp + '. You win this round.');
                return 'user';                
        }
        
    } else if (user == 'Paper') {
        switch (comp) {
            case 'Scissors':
                alert("" + comp + ' beats ' + user + '. Computer wins this round.');
                return 'comp';
            case 'Rock':
                alert("" + user + ' beats ' + comp + '. You win this round.');
                return 'user';                
        }
    } else {
        switch (comp) {
            case 'Rock':
                alert("" + comp + ' beats ' + user + '. Computer wins this round.');
                return 'comp';
            case 'Paper':
                alert("" + user + ' beats ' + comp + '. You win this round.');
                return 'user';                
        }
    }

}



// Runs a game of RPS, with first to 3 declared the winner 

function game() {
    var winner;
    let userScore = 0;
    let compScore = 0;
    const userTally = document.querySelector('#userTally');
    const compTally = document.querySelector('#compTally');
    userTally.textContent = 'User: ' + userScore;
    compTally.textContent = 'Computer: ' + compScore;

    // Add listeners to buttons
    const rpsButtons = document.querySelectorAll('.rpsButton');  
    
    rpsButtons.forEach((button) => {
        button.addEventListener('click', () => {
            winner = playRound(button.id, getComputerChoice());
            if (winner == 'comp') {
                compScore++
                compTally.textContent = 'Computer: ' + compScore;
                if (compScore >= pointsToWin) {
                    alert("Computer wins!");
                    return;
                }
            } else if (winner == 'user') {
                userScore++
                userTally.textContent = 'User: ' + userScore;
                if (userScore >= pointsToWin) {
                    alert("You win!");
                    return;
                }
            }
        
        });
    });

    
}






