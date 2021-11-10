/* A more efficient way is to set the prototype to a new object that already contains the properties. */

/*
Instead adding properties individually

Bird.prototype.numLegs = 2;

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
*/

Bird.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

// Challenge

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log("yum yum yum");
  },
  describe: function () {
    console.log(this.name + " is my name");
  },
};

/* There is one crucial side effect of manually setting the prortotype to a new object. It erases the constructor property! 
  This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results.*/

duck.constructor === Bird; // false
duck.constructor === Object; // true
duck instanceof Bird; // true

/* To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property. */

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

// Challenge

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
