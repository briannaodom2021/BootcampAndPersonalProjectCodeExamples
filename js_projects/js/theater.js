const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

let cost = GENERAL_ADMISSION_TICKET_COST;
let finalCost; 

function buyTicket() {
    const age = prompt("what is your age");
    let cost = getBaseTicketCost(age);
    if (cost == 0) {  //ends code if age entered is not a number
    }
    else {
        const isMatinee = prompt('Are you attending a matinee?');
        finalCost = checkMatinee(cost, isMatinee); 
        if (finalCost == 0) {  //ends code if matinee response isn't yes or no
        }
        else {
            alert('Your ticket will cost: $' + finalCost);
        }
    }
}
function getBaseTicketCost(age) {
    if (isNaN(age)) {  //checks if input is a number (is not a number)
        alert("Not a number for age. Try again.");
        return 0;
    }
    else {
        if ((age <= 12) || (age >= 65)) {
            return CHILD_AND_SENIOR_TICKET_COST;
        }
        else {
            return GENERAL_ADMISSION_TICKET_COST;
        }
    } 
}  
function checkMatinee(cost, isMatinee){ //challenge 1
    isMatinee = String(isMatinee).toLowerCase(); // challenge 2
    if ((isMatinee === 'yes') || (isMatinee === 'y')) {
        cost = cost - MATINEE_DISCOUNT;
        return cost;
    }
    else if ((isMatinee === 'no') || (isMatinee === 'n')){
        return cost;
    }
    else 
        {
        alert("Didn't type yes or no. Try again."); //undefined if not a string or not yes or no
        return cost = 0;
    }

}