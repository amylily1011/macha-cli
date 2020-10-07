const colors = require("colors");
const pad = require("pad");
const { tea } = require("./menu_items");
header_pad = 22;
menu_pad = 15;
// export function to list coffee
module.exports = () => {
  console.log("------------------");
  console.log("MACHA MENU".green);
  console.log("------------------");

  console.log(pad("TEA".bold, header_pad), "PRICE".bold);
  // list on separate lines
  tea.forEach((tea) => {
    console.log(pad(tea.name, menu_pad), tea.price);
  });
};
