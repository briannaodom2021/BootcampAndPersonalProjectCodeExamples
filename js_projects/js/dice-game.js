function rollDice(){
    let goldCoins = 0;
    for (let i = 1; i <= 10; i++) {
        const roll = Math.ceil(Math.random()*5);
        alert("The value of your dice roll " + i + " was " + roll);
        if (roll === 1){
            alert("Game over. No more rolls.");
            break;
        }
        else{
            switch (roll){
                case 2: 
                case 3:
                    alert("You gained 0 coins, so you currently have " + goldCoins + " gold coins.");
                    continue;
                case 4:
                    if (goldCoins > 0){
                        goldCoins -= 1;
                    }
                    alert("You gained 0 coins, so you currently have " + goldCoins + " gold coins.");
                    break;
                case 5:
                    goldCoins += 5;
                    alert("Congratulations. You won 5 gold coins, so you currently have " + goldCoins + " gold coins.");
                    break;
                case 6:
                    goldCoins += 6;    
                    alert("Congratulations. You won 6 gold coins, so you currently have " + goldCoins + " gold coins.");
                    break;
            }
        }
    }
    if(goldCoins === 0) {
        alert("You have won a total of " + goldCoins + " gold coins! Better luck next time.");
    }
    else {
        alert("You have won a total of " + goldCoins + " gold coins! That's better than none!");
    }
}