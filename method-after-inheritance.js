/* A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.*/

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

/* In addtion to what is inehrited from Animal, you want to add behavior that is unique to Bird objects.
  Here, Bird will get a fly() function. Functions are added to Bird's prototype the same as any constructor function.*/

Bird.prototype.fly = function () {
  console.log("I'm flying!");
};

let duck = new Bird();
duck.eat(); // nom nom nom
duck.fly(); // I'm flying!

// Challenge

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log("Woof!");
};

let beagle = new Dog();

console.log(beagle.eat()); // nom nom nom
console.log(beagle.bark()); // Woof!
console.log(beagle.constructor); // Dog
