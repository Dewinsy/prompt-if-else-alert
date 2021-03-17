/*
Create the following
1. Create four variables with a string as their values
2. Create four variables with numbers as their values
3. Concatenate strings
4. Try concatenating numbers
5. Create a conditional statement that checks peoples
age. If they are 18yrs or above, alert ‘you are free to
enjoy’, if they are under 18yrs, alert ‘alcohol is not
sold to persons under the age of 18’
6. Create a repository and push your work to github
*/


const myName = "Daisy";
const myCountry = "Uganda";
const myInterest = "Software development";
const myFavFood = "Fish";

const tomatoes = 18;
const onions = 11;
const cabbages = 2;
const eggplants = 9;

//concatenating strings:
const aboutMe = "Hello there, my name is " + myName + ". I am from " + myCountry + ", and I have a passion for " + myInterest + ". I love eating " + myFavFood + ":) We can arrange and feast some time!";
console.log(aboutMe);

//concatenating numbers:
const totalVegetablesBought = tomatoes + onions + cabbages + eggplants + " vegetables bought.";
console.log(totalVegetablesBought);

//prompting user for input:
let age = prompt("How old are you?");
console.log(age);

//conditional statement:
if(age >= 18){
    alert("You are of age.");
}else if(age < 18){
    alert("You are still under age!");
}else{
    alert("Invalid input! Enter only numbers...");
}









