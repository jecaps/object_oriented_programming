/* An object inherits its prototype directly from the constructor function that created it.*/

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");

/* Here, duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method. */

Bird.prototype.isPrototypeOf(duck); // true

// Challenge

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // true
