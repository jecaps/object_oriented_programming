/* When an object inherits its prototype from another object, it also inherits the supertype's constructor property. */

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor;

/* But duck and all instances of Bird should show that they were constructed by Bird and not Animal.
  To do so, you can manually set the constructor property of Bird to the Bird object.*/

Bird.prototype.constructor = Bird;
duck.constructor; //Bird

// Challenge

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor); // Bird
console.log(beagle.constructor); // Dog
