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
