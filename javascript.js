// This program performs a single game of Rock paper scissors, and then
// a game to 3 of RPS

function log() {
    console.log('Clicked');
};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        let winner = playRound(button.id.toUpperCase(), getComputerChoice().toUpperCase());
        alert(winner);
    });
});





// Returns random selection from rock/paper/scissors

function getComputerChoice() {
    let myarr = ['Rock', 'Paper', 'Scissors']
    let randomElem = myarr[Math.floor(Math.random() * myarr.length)]
    console.log(randomElem);
    alert("Computer chooses " + randomElem + ".");
    return randomElem
}


// Prompts user for choice of RPS

function getUserChoice() {
    var userSelection
    do {
        (userSelection = prompt("Enter: Rock, Paper, or Scissors"))
    } while (!(userSelection == 'Rock' || userSelection == 'Paper' || 
             userSelection == 'Scissors'))
    return userSelection
}



// Plays one round of RPS

function playRound(user, comp) {
    if (user == comp) {
        return "It's a tie!"
    } else if (user == 'ROCK'){
        switch (comp) {
            case 'PAPER':
                return "" + comp + ' beats ' + user + '! You lose!';
            case 'SCISSORS':
                return "" + user + ' beats ' + comp + '! You win!';                
        }
        
    } else if (user == 'PAPER') {
        switch (comp) {
            case 'SCISSORS':
                return "" + comp + ' beats ' + user + '! You lose!';
            case 'ROCK':
                return "" + user + ' beats ' + comp + '! You win!';                
        }
    } else {
        switch (comp) {
            case 'ROCK':
                return "" + comp + ' beats ' + user + '! You lose!';
            case 'PAPER':
                return "" + user + ' beats ' + comp + '! You win!';                
        }
    }

}


//let winner = playRound(getUserChoice(), getComputerChoice())
//alert(winner)





// Plays a game of RPS to best of 5/first to 3

function playRoundScored(user, comp) {
    if (user == comp) {
        return 'tie'
    } else if (user == 'Rock'){
        switch (comp) {
            case 'Paper':
                return 'comp';
            case 'Scissors':
                return 'user';                
        }
        
    } else if (user == 'Paper') {
        switch (comp) {
            case 'Scissors':
                return 'comp';
            case 'Rock':
                return 'user';                
        }
    } else {
        switch (comp) {
            case 'Rock':
                return 'comp';
            case 'Paper':
                return 'user';                
        }
    }

}

// Runs a game of RPS, with first to 3 declared the winner 

function game() {
    let userScore = 0
    let compScore = 0
    
    //while (userScore < 3 && compScore < 3) 
    
    while (true) {
        let winner = playRoundScored(getUserChoice(), getComputerChoice())
        if (winner == 'comp') {
            compScore++
        } else if (winner == 'user') {
            userScore++
        }
    }

    /*
    if (userScore == 3) {
        alert("User wins!")
    } else {
        alert("Computer wins!")
    }
    */
    
}

//game()





