/* Inheritance does not work well for unrelated objects like Bird and Airplane.
  They both can fly, but Bird is not a type of Airplane and vice versa.
  For unrelated objects, it is better to use mixins. A mixin allows other objects to use a collection of functions.*/

let flyMixin = function (obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
};

let bird = {
  name: "Donald",
  numLegs: 2,
};

let plane = {
  model: "777",
  numPassengers: 524,
};

flyMixin(bird);
flyMixin(plane);

bird.fly(); // Flying, wooosh!
plane.fly(); // Flying, wooosh!

// Challenge

let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line

let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("Gliding, splash!");
  };
};

glideMixin(bird);
glideMixin(boat);

console.log(bird.glide()); // Gliding, splash!
console.log(boat.glide()); // Gliding, splash!
