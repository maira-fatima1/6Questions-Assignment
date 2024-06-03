
import inquirer from "inquirer";

Assignment1:("\n\tMiles-to-Kilometers Converter (Operators):\n");
// • Create a variable named miles and assign a numeric value representing distance in miles.
// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
// 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.
// • Use console.log to print a message in the following format: 
// The distance of 130 kms is equal to 209.2142 miles

let miles:number = 10; 
let convert_into_km : number =  miles * 1.60934;
let kilometers = convert_into_km
console.log(`the distance of ${kilometers}kilometers is equal to ${miles}miles`);

Assignment2:("\n\tEvaluating a number game:\n");
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less 
// than the dynamic number value.

let dynamicNumber = Math.floor(Math.random()* 2 + 10);
let userNumber = await inquirer.prompt([
    {
     name:"game",
     type:"number",
     message:"Enter  your number:"
}
])
let named =userNumber
if(named === dynamicNumber){
    console.log("your number is greater than the dynamicNumber value ");
}
else if (named > dynamicNumber){
    console.log("your number is less than the dynamicNumber");
}
else {
    console.log("your number is equal to the dynamic value");
}

Assignment3:("\n\tFriend checker game:\n");
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default 
// response.

let user1:{ name:string} =await inquirer.prompt([
        {
         name:"name",
         type:"input",
         message:"Enter Your name:"
    }
]);
let{ name } = user1;
let userName = name.toLowerCase();
switch(userName){
    case"Maira":console.log("this is your known friend");
    break;
    case"Maham":console.log("this is your known friend");
    break;
    case"Mirha":console.log("this is your known friend");
    break;
    case"Ayesha": console.log("this is your known friend");
    break;
    default:console.log("default response");
}

 Assignment4:("\n\tFunctions:\n");
//  • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.

function multiple (
    a:number ,
    b:number
){
    return a*b;
}
let number1 = 6;
let number2 = 15;
console.log("Result of first call:",multiple(number1,number2));
console.log("Result of second call:",multiple(7,3));

Assignment5:("\n\tCalculator project using function:\n");
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.

let user =await inquirer.prompt([
    {
    name:"firstNumber",
    type:"number",
    message:"Enter your firstNumber:"
   },
   {
    name:"secondNumber",
    type:"number",
    message:"Enter your secondNumber"
   },
   {
     name:"operator",
     type:"list",
     message:"Select one of the operator to perform operation: ",
     choices:["Addition","Subtraction"]
   } 
]);
let{firstNumber,secondNumber , operator}= user;
function num(num1:number,  num2:number, operation:string){
    switch(operation){
    case "Addition":
    return `The sum of ${num1} && ${num2} is ${num1 + num2}`;
    break;
    case "Subtraction":
    return`The sum of ${num1} && ${num2} is ${num1 - num2}`;
    break;
    default:{
    console.log("please select right number:")
}
}
}
let response = num (firstNumber, secondNumber, operator);
console.log(response);

Assignment6:("\n\tAnonymous functions\n");
// • Assign a function expression to a variable, with one parameter that outputs the provided 
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.

let function1= function(name:string){
    console.log(name);
};
function1("Hello World");
