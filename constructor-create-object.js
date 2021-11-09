/* NOTE: this inside the constructor always refers to the object being created. */

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
blueBird.name; // output : Albert
blueBird.color; // output : blue
blueBird.numLegs; // output : 2

/* Just like any other objects, its properties can be accessed and modified. */

blueBird.name = "Elvira";
blueBird.name; // output : Elvira

// Challenge

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();
