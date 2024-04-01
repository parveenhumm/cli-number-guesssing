#! /usr/bin/env node //Shabang ("Shabang" is a way to declare the interpreter to be used when executing a script)
//indicating that the script should be executed using the node interpreter.

import inquirer from "inquirer";//importing inquirer module

const randomNumber = Math.floor(Math.random()*4 + 1);
//math function floor will round off number
// random will generate the random number

const answers =await inquirer.prompt([
    {
        "name" : "UserGuessedNumber",//name of variable to store input
        "type" : "number",// type of input
        "message" : "Please guess a number", // message displayed to user
    },
]);

if(answers.UserGuessedNumber === randomNumber){ 
    console.log("congratulation you Guessed right number");
    // when input is eaqual to random number
}else{
    console.log("you Guessed wrong number");
    // when input is not equal to random number
}


