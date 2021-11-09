/* The JavaScript prototype property allows you to add new properties to object constructors.
  It also allows you to add new methods to object constructors.*/

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");

console.log(beagle); // output : {name: 'Snoopy'}
console.log(beagle.numLegs); // output : 4
