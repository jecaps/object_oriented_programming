/* Constructors are functions that create a new object.
They define properties and behaviors that will belong to the new object.
Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
Constructors use this keyword this to set the properties of the object they will create. Inside this constructor, this refers to the new object it will create. 
Constructors define properties and behaviors instead of returning a value as other functions might.*/

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

// Challenge

function Dog() {
  this.name = "Sushi";
  this.color = "white";
  this.numLegs = 4;
}
