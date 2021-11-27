/*
    1- Get a valid max number from user
    2- Create a random number according to this max number
    3- Get a valid guess value from user
    4- Compare those two number and give the result to user
*/

let maximum = parseInt(prompt("Enter the max number"));
while(!maximum) {
    maximum = parseInt(prompt("Enter a valid max number"));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter the guess"));
let attemps = 1;

while(parseInt(guess) !== targetNumber) {
    if(guess === "q") break;
    attemps++;
    if(guess > targetNumber) {
        guess = prompt("Too high, try again!");
    }else {
        guess = prompt("Too low, try again!");
    }
}
if(guess === "q") {
    console.log("quitting...");
    console.log("You've tried the game like " + attemps + " time");
}else {
    console.log("YOU WON, CONGRATS!!! The number was: " + guess);
    console.log("You've reached the result in " + attemps+ " attemps");
}

