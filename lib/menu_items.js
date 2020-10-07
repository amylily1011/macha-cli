// stuff in the menu
exports.tea = [
  { name: "Royal milk tea", price: "$3.99" },
  { name: "Green tea", price: "$3.50" },
  { name: "Fruit tea", price: "$3.99" },
  { name: "Oolong tea", price: "$4.50" },
  { name: "Earl grey", price: "$3.50" },
];
exports.teaLine = exports.tea.map(function (output) {
  return output.name + " : " + output.price; // show results in one line.
});

// milk type
exports.milk = [
  { name: "No", price: "$0" },
  { name: "Normal", price: "$0" },
  { name: "Soy", price: "$0.50" },
  { name: "Almond", price: "$0.70" },
];

exports.milkLine = exports.milk.map(function (output) {
  return output.name + " : " + output.price; // show results in one line.
});

//topping
exports.topping = [
  { name: "Bubble", price: "$0.5" },
  { name: "Grass jelly", price: "$0.50" },
  { name: "Pudding", price: "$0.99" },
  { name: "Aloe Vera", price: "$0.50" },
];

exports.toppingLine = exports.topping.map(function (output) {
  return output.name + " : " + output.price; // show results in one line.
});

// sugar level
exports.sugar = ["0%", "30%", "50%", "70%", "100%", "130%"];

// served Temperature
exports.servedTemp = ["Hot", "Cold"];
// Ice level
exports.ice = ["Extra", "Normal", "Half", "No"];
