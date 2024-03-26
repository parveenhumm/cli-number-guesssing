#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*4 + 1);

const answers =await inquirer.prompt([
    {
        "name" : "UserGuessedNumber",
        "type" : "number",
        "message" : "Please guess a number",
    },
]);

if(answers.UserGuessedNumber === randomNumber){
    console.log("congratulation you Guessed right number");
}else{
    console.log("you Guessed wrong number");
}


