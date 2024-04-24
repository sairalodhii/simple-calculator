#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { massage: "Enter your first number", type: "number", name: "firstNumber" },
  { massage: "Enter your second number", type: "number", name: "secondNumber" },
  {
    massage: "please select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multipliction", "Division"],
  },
]); 

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber)
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber)
}
else if (answer.operator === "Multipiction") {
    console.log(answer.firstNumber * answer.secondNumber)
}else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber)
}else {
    console.log("Please select velid number")
}

console.log("THE END");