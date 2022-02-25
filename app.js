console.log ("Our proof of LIFE!");


let userName = "Beardy";
console.log(userName);

function askTheUser() {

var myName = prompt("What shall I call you?");
console.log("myName: ", myName);
}



if (myName == 'Jason') {
    document.write('Welcome to the Gallery of Beards, ' + myName);
    } else {
        document.write("Welcome, " + myName);
    }

let myAge = 25;
console.log(typeof myAge);




function picksNumbers() {
    let num1 = prompt("pick a number")
    return num1;
}


function displayRating() {
    let output = "";
    let rating = prompt('how many stars?');
    for (let i = 0; i < rating; i++) {
        output += "⭐"
    }   
    return document.write(output);
}

// while loop
// creating user guessing game

function guessingGame() {
    let userGuess = prompt("What is my favorite color?");
    let correctAnswer = Blue;
    let attempts = 4;
  
    for (let i = 0; i < attempts; i++) {
      while (userGuess < 1 || userGuess > 100) {
        userGuess = prompt("Please try again...! A number between 1 and 100");
      }
      if (userGuess == correctAnswer) {
        alert('How did you know?!!');
        document.write("Game Winner!");
        break;
      } else if (userGuess > correctAnswer) {
        userGuess = prompt("Sorry, I don't like that one!! Please guess another...");
      } else if (userGuess < correctAnswer) {
        userGuess = prompt("Sorry, that's wrong...");
      }
      if (i == 3) {
        alert("The correct answer was " + correctAnswer);
        document.write("Game Loser!");
      }
    }
}