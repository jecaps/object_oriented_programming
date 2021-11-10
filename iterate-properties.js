/* Own properties are properties inside of a constructor of function. 
  Prototype properties are properties created outside of the the constructor.*/

function Bird(name) {
  this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps); // output : ["name"]
console.log(prototypeProps); // output : ["numLegs"]

// Challenge

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProperty = [];
let prototypeProperty = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProperty.push(property);
  } else {
    prototypeProperty.push(property);
  }
}

console.log(ownProperty); // output : ["name"]
console.log(prototypeProperty); // output : ["numLegs"]
