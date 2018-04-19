/*eslint-env browser*/

// --------- Part 1 - Practice with JavaScript OOP Concepts  -------

//STEP 1

/*
function Cat() {                //NAMED DECLARATION
    "use strict";
    
}

var Dog = function () {         //ANONYMOUS DECLARATION
    "use strict";
    
};

//STEP 2

var ragdoll = new Cat();
var beagle = new Dog();

//STEP 3

function Animal() {
    "use strict";
    this.displayMsg = function () {
        window.console.log("The Animal has been created");
    };
}

//STEP 4

function Animal(animal) {
    "use strict";
    this.animal = animal;
    this.displayMsg = function () {
        window.console.log("The " + this.animal + " has been created");
    };
}

//STEP 5

function Animal(type, breed, color, height, length_value) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length_value = length_value;
}

//STEP 6
var myAnimal = new Animal("cat", "ragdoll", "pink", 30, 50);
for (var property in myAnimal) {
    window.console.log(property);
}

//STEP 7

Animal.prototype.speak = function () {
    "use strict";
    if (this.type === "dog") {
        return "The " + this.color + " dog is barking!";
    } else if (this.type === "cat") {
        return "The " + this.color + " cat is meowing!";
    } else {
        return "I have no idea what the animal " + this.type + " is.";
    }
}

window.console.log(myAnimal.speak());
*/
//STEP 8

function Animal(type, breed, color, height, length_value) {
    "use strict";
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length_value = length_value;
    var checkType = function () {
        if (type === "dog") {
            return "dog";
        } else if (type === "cat") {
            return "cat";
        } else {
            return type;
        }
    };
    this.speak = function () {
        window.console.log("The " + checkType() + " has made a noise!");
    }
}

var myAnimal1 = new Animal("cat", "ragdoll", "pink", 30, 50);
window.console.log(myAnimal1.speak());

//STEP 9