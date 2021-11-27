/*
    1- Userdan valid bir max num degeri al
    2- Max number degerine gore bir random number olustur
    3- Userda valid guess degeri al
    4- Random number ile guess degerlerini karsilastirip sonucu dondur
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

