/* Set the prototype of the subtype (or child)- in this case, Bird- to be an instance of Animal */

Bird.prototype = Object.create(Animal.prototype);

/* Remember that the prototype is like the "recipe" for creating an object. 
  In a way, the recipe for Bird now includes all the key "ingredients" from Animal*/

let duck = new Bird("Donald");
duck.eat();

/* Duck inherits all of Animal's properties, including the eat method */

// Challenge

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
