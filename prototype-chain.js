/* All objects in JavaScript(with a few exceptions) have a prototype. Also, an object's prototype itself is an object. */

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;

/* Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype */

Object.prototype.isPrototypeOf(Bird.prototype);

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

/* The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck.
  This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype.
  Object is a supertype for both Bird and duck. Object is a supertype of all objects in JavaScript.
  Therefore, any object can use the hasOwnProperty method*/

// Challenge

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); //  true

Object.prototype.isPrototypeOf(Dog.prototype); // true
