const inquirer = require("inquirer");
const colors = require("colors");
const values = require("./menu_items");
const pad = require("pad");

//First set of questions
const questions = [
  {
    type: "list",
    name: "tea",
    message: "Choose your tea.",
    choices: values.teaLine,
  },
  {
    type: "list",
    name: "milk",
    message: "Choose your milk.",
    choices: values.milkLine,
  },
  {
    type: "list",
    name: "topping",
    message: "Choose your topping.",
    choices: values.toppingLine,
  },
  {
    type: "list",
    name: "sugar",
    message: "Sugar level",
    choices: values.sugar,
  },
  {
    type: "confirm",
    name: "serveHot",
    message: "Would you like it serve Hot?",
    default: false,
  },
];

//If a user wants the tea to serve cold, they will have to answer another question.
const serveCold = {
  type: "list",
  name: "ice",
  message: "Choose ice level.",
  choices: values.ice,
};

module.exports = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log("Your Order:");

    console.log(pad("Tea:".gray, 10), answers.tea);
    total = parseFloat(answers.tea.split("$")[1]);
    //Because answer.tea is in String, we need to split the string by "$" and cast
    //the number element into type Float and store it in "total"

    console.log(pad("Milk:".gray, 10), answers.milk);
    total += parseFloat(answers.milk.split("$")[1]);
    //Summing up the total price.

    console.log(pad("Topping:".gray, 10), answers.topping);
    total += parseFloat(answers.topping.split("$")[1]);

    console.log(pad("Sugar:".gray, 10), answers.sugar);

    if (answers.serveHot == false) {
      //If a use wants cold tea, select the ice level before printing out the price
      inquirer.prompt(serveCold).then((answer) => {
        console.log(pad("Ice level:".gray, 10), answer.ice);
        console.log("------------------");
        console.log("Total price: $" + total);
      });
    } else {
      //If the user wants the tea hot, print out the price.
      console.log("------------------");
      console.log("Total price: $" + total);
    }
  });
};
