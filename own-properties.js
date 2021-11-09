/* To know which properties an object have.*/

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

let ownProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // output : (2) ['name', 'numLegs']

// Challenge

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let eagle = new Bird("Pag-asa");
let ownProperty = [];
for (let property in eagle) {
  if (eagle.hasOwnProperty(property)) {
    ownProperty.push(property);
  }
}

console.log(ownProperty); // output : (2) ['name', 'numLegs']
