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

    /*
    // Add a new score display section at bottom
    const buttons = document.querySelector('.buttons');
    const scoreDisplay = document.createElement('div');
    scoreDisplay.classList.add('scoreDisplay');
    scoreDisplay.style.cssText = 'border: 2px solid black; background-color: rgb(150, 239, 150)';
    const boxHeading = document.createElement('h1');
    boxHeading.textContent = "Score";
    boxHeading.style.cssText = 'padding: 15px 100px';
    scoreDisplay.appendChild(boxHeading);
    const userTally = document.createElement('p');
    const compTally = document.createElement('p');
    userTally.style.cssText = 'padding: 5px 20px';
    compTally.style.cssText = 'padding: 5px 20px';
    scoreDisplay.appendChild(userTally);
    scoreDisplay.appendChild(compTally);
    buttons.appendChild(scoreDisplay);
    */

    // Add listeners to buttons
    const rpsButtons = document.querySelectorAll('.rpsButton');
    //while (userScore < 3 && compScore < 3) 
        
    
    rpsButtons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id);
            winner = playRound(button.id, getComputerChoice());
            if (winner == 'comp') {
                compScore++
                //compTally.textContent = "Comp: " + compScore;
            } else if (winner == 'user') {
                userScore++
                //userTally.textContent = "User: " + userScore;
            }
        
        });
    });
    
    

    /*
    if (userScore == 3) {
        alert("User wins!")
    } else {
        alert("Computer wins!")
    }
    */
    
}






