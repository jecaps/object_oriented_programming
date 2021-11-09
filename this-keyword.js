/* The JavaScript this keyword refers to the object it belongs to.*/

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function () {
    return "The name of this duck is " + this.name + ".";
  }, // instead of using duck.name
};

// Challenge

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};
dog.sayLegs(); // output : This dog has 4 legsoutput :
