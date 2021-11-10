/* It is possible to override an inherited method. 
  It's done the same way- by adding a method to ChildObject.prototype using the same method name as the one to override.*/

ChildObject.prototype = Object.create(ParentObject.prototype);

ChildObject.prototype.methodName = function() {...};

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.eat = function() {
  return "peck peck peck";
};

let duck = new Bird();
duck.eat(); // peck peck peck peck

/* 
duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
 */ 

// Challenge

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function () { return "Alas, this is a flightless bird."}

let penguin = new Penguin();
console.log(penguin.fly()); // Alas, this is a flightless bird.