/* Create a variable within the constuctor function to make a public property private.
  This changes the scope of that variable to be within the constructor function versus available globally.
  This way, the variable can only be accessed and changed by methods also within the constructor function.*/

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function () {
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

/* Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg.
  This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. 
  In JavaScript, a function always has access to the contect in which it was created. This is called closure. */

// Challenge

function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}

let chicken = new Bird();
chicken.getWeight();
