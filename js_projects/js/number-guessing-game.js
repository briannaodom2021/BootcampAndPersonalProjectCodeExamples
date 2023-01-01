const TARGET = Math.random();
let guessString = '';
let guessNumber = 0;
let numTries = 0;
let correct = 0;

function runGame() {
    do {
        guessString = prompt("Please enter a number.", "i.e. 10");
        numTries +=1;
        if (guessString === null) { //helps cancel button work to end game. if not button is treated as a 0.
            return;
        }
        else {
            guessNumber = +guessString;
            check = checkGuess(guessNumber, TARGET, numTries);

            function checkGuess(n, t, nT){
        
                if (isNaN(guessNumber)){
                    alert("You did not enter a number. Try again.");
                    return correct;
                } 
                else if ((n <1) || (n>100)){
                    alert("You're guess is out of range. Try again.");
                    return correct;
                } 
                else if (n > t){
                    alert("Your guess is too big. Try again.");
                    return correct;
                } 
                else if (n < t){
                    alert("Your guess is too small. Try again.");
                    return correct;
                }
                else{
                    alert("You found the number i was guessing. Congrats! It took you " + nT + " tries. God like...");
                    correct = 1;
                    return correct;
                }
            }
        }
    } while(!correct);
}
