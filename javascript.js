// This program performs a single game of Rock Paper Scissors, and then
// a game to 3 of RPS



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
        return "tie"
    } else if (user == 'Rock'){
        switch (comp) {
            case 'Paper':
                alert("" + comp + ' beats ' + user);
                return 'comp';
            case 'Scissors':
                alert("" + user + ' beats ' + comp);
                return 'user';                
        }
        
    } else if (user == 'Paper') {
        switch (comp) {
            case 'Scissors':
                alert("" + comp + ' beats ' + user);
                return 'comp';
            case 'Rock':
                alert("" + user + ' beats ' + comp);
                return 'user';                
        }
    } else {
        switch (comp) {
            case 'Rock':
                alert("" + comp + ' beats ' + user);
                return 'comp';
            case 'Paper':
                alert("" + user + ' beats ' + comp);
                return 'user';                
        }
    }

}






// Runs a game of RPS, with first to 3 declared the winner 

function game() {
    let userScore = 0;
    let compScore = 0;
    var winner;

   
    const userTally = document.querySelector('#userTally');
    const compTally = document.querySelector('#compTally');

    // Add listeners to buttons
    const rpsButtons = document.querySelectorAll('.rpsButton');        
    
    rpsButtons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id);
            winner = playRound(button.id, getComputerChoice());
            if (winner == 'comp') {
                compScore++
                compTally.textContent = 'Computer: ' + compScore;
                if (compScore >= 3) {
                    alert("Computer wins!");
                    return;
                }
            } else if (winner == 'user') {
                userScore++
                userTally.textContent = 'User: ' + userScore;
                if (userScore >= 3) {
                    alert("User wins!");
                    return;
                }
            }
        
        });
    });

    
}






