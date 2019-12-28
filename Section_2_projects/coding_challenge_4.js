/*
Coding Challenge 4
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

var mark, john;

mark = {
    fullname : 'Mark',
    mass : 78,
    height : 1.69,
    calcBMI : function() {
        this.mark_bmi = this.mass / (this.height * this.height);
        return this.mark_bmi
    }
};

john = {
    fullname : 'John',
    mass : 92,
    height : 1.95,
    calcBMI : function() {
        this.john_bmi = this.mass / (this.height * this.height);
        return this.john_bmi
    }
};

mark.calcBMI();
console.log(mark);
john.calcBMI();
console.log(john);