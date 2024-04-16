#! usr/bin/env node
import inquirer from "inquirer";
interface Currency {
  [key: string]: number;
}

const currency: Currency = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
  AED: 0.27,
};

let userAnswer: { from: string; to: string; amount: number } =
  await inquirer.prompt([
    {
      name: "from",
      message: "Enter from currency",
      type: "list",
      choices: ["USD", "EUR", "GBP", "INR", "PKR", "AED"],
    },
    {
      name: "to",
      message: "Enter to currency",
      type: "list",
      choices: ["USD", "EUR", "GBP", "INR", "PKR", "AED"],
    },
    {
      name: "amount",
      message: "Enter your amount",
      type: "number",
    },
  ]);

let fromAmount: number = currency[userAnswer.from] || 1;
let toAmount: number = currency[userAnswer.to] || 1;
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; // usd base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

/* console.log(fromAmount);
console.log(toAmount);
console.log(amount); */
