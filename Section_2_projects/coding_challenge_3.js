/*
Coding Challenge 3
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

// variable declarations 
tips_array = []
final_amount_array = []

bill_one = 124
bill_two = 48
bill_three = 268

//function declaration
function calculateTip(bill){
    if (bill < 50){
        tipAmount = bill * .20;
        finalAmount = tipAmount + bill;
        tips_array.push(tipAmount);
        final_amount_array.push(finalAmount);

    } else if (bill > 50 || bill < 200){
        tipAmount = bill * .15; 
        finalAmount = tipAmount + bill;
        tips_array.push(tipAmount);
        final_amount_array.push(finalAmount);

    } else {
        tipAmount = bill * .10;
        finalAmount = tipAmount + bill;
        tips_array.push(tipAmount);
        final_amount_array.push(finalAmount);
    }
}

calculateTip(bill_one);
calculateTip(bill_two);
calculateTip(bill_three);
console.log(tips_array, final_amount_array);