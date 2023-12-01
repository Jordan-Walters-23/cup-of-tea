// seqence
// loops
// conditions

// list of ingrediants
let ingrediants = ["tea", "sugar", "water", "milk"];
let equipment = ["kettle", "cup", "spoon"];

// check for ingrediants
if (
  ingrediants.includes("tea", "sugar", "water", "milk") &&
    equipment.includes("kettle", "cup", "spoon")
) {
    const hotWater = equipment[0] + ingrediants[2];
    let brew = equipment[1] + ingrediants[0] + ingrediants[1];
    let tea = brew + hotWater + ingrediants[3];
  console.log("We can make tea");
} else {







// check for equipment

// // get cup
// let cup = 0;

// // get ingrediants
// let ingrediants = ["tea", "sugar", "kettle", "water", "milk", "spoon"];

// // boil kettle
// ingrediants.splice(3, 1, "boiled water");
// console.log(ingrediants);
