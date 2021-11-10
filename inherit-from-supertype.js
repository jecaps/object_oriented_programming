/* To reuse methods of Animal inside Bird and Dog without defining them again, we can use a technique called inheritance.
  First step, make an instance if the supertype (or parent).
  You already know one way to create an instance of Animal using the new operator.*/

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

let animal = new Animal();

/* There are disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge.
  Instead, here's an alternative approach without those disadvantages.*/

let animal = Object.create(Animal.prototype);

/* Object.create(obj) creates a new object, and sets obj as the new object's prototype. 
  Recall that the prototype is like the "recipe" for creating an object. 
  By setting the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.*/

animal.eat();
animal instanceof Animal; // true

// Challenge

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
