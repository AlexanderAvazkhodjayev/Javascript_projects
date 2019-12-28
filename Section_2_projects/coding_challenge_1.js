/* Coding Challenge 1 

BMI = mass / (height * height)
(mass in kg and height in meter)

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? True")


*/


var m_mass, j_mass, m_height, j_height,bmi_of_j,bmi_of_m, mark_greater_than;

m_mass = 78;
m_height = 1.69;

j_mass = 92;
j_height = 1.95;


bmi_of_j = j_mass / (j_height * j_height);
bmi_of_m = m_mass / (m_height * m_height);
console.log(bmi_of_j,bmi_of_m)

mark_greater_than = bmi_of_m > bmi_of_j;
console.log('is mark\'s BMI higher than john\'s? ' + mark_greater_than);