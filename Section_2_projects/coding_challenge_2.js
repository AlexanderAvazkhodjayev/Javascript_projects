/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. 
HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

*/


//1. Calculate the average score for each team
//4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. 
var avg_john_team, avg_mike_team, avg_mary_team;

avg_john_team = ((89 + 120 + 103) / 3);
console.log(avg_john_team);
avg_mike_team =((116 + 94 + 123) / 3);
console.log(avg_mike_team);
avg_mary_team = ((97 + 134 + 105) / 3);
console.log(avg_mary_team);


//2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
if(avg_mike_team > avg_john_team) {
    console.log("mike\'s team is the winner with " + avg_mike_team + " points")
}else{
    console.log("john\'s team is the winner with " + avg_john_team + " points")
};

//3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
//avg_john_team = 150; ------ Adding this will show different winners
//avg_mike_team = 150; ------ Adding this will show that the game is tie
if(avg_mike_team > avg_john_team) {
    console.log("mike\'s team is the winner with " + avg_mike_team + " points");
}else if (avg_john_team > avg_mike_team){
    console.log("john\'s team is the winner with " + avg_john_team + " points");
}else{
    console.log("tie game")
};

//4. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
if(avg_mary_team > avg_john_team && avg_mary_team > avg_mike_team) {
    console.log("mary\'s team is the winner with " + avg_mary_team + " points");
}else if (avg_john_team > avg_mike_team && avg_john_team > avg_mary_team){
    console.log("john\'s team is the winner with " + avg_john_team + " points");
}else if(avg_mike_team > avg_john_team && avg_mike_team > avg_mary_team){
    console.log("mike\'s team is the winner with " + avg_mike_team + " points");
}else{
    console.log("tie game")
};

