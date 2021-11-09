/* Objects can have an special type of property, called a method.
  Methods are properties that are functions.
  This adds different behavior to an object.*/

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function () {
    return "The name of this duck is " + duck.name + ".";
  },
};
duck.sayName(); // output : The name of the duck is Aflac.

// Challenge

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + dog.numLegs + " legs.";
  },
};
dog.sayLegs(); // output : This dog has 4 legs.
