/* Constructor property is a reference to the constructor function that created the instance.
  Returns a boolean if the object was created with a certain contructor.*/

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); // output : true
console.log(beagle.constructor === Dog); // output : true

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

// Challenge

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
