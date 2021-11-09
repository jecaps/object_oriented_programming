/* instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.*/

let Bird = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};
let crow = new Bird("Alexis", "black");

crow instanceof Bird; // output : true

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2,
};

canary instanceof Bird; // output : false

// Challenge

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);

myHouse instanceof House; // output : true
