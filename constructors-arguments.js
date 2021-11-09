/* Design constructors to accept parameter to create different objects more easily. */

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let cardinal = new Bird("Bruce", "red");
console.log(cardinal); // output : Bird {name: 'Bruce', color: 'red', numLegs: 2}

// Challenge

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Marley", "brown");
console.log(terrier); // output : Dog {name: 'Marley', color: 'brown', numLegs: 4}
