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
*/

//STEP 2

/*
var myCat = new Cat();			//INSTANCE OF THE CAT CLASS
var myDog = new Dog();			//INSTANCE OF THE DOG CLASS
*/

//STEP 3

/*
//CREATE AN ANIMAL CLASS USING CONSTRUCTOR SYNTAX

var Animal = function () {
    "use strict";

	//CREATE A METHOD WITHIN THE ANIMAL CLASS

    this.displayMsg = function () {
       return "The animal has been created!";
    };
}

var myAnimal = new Animal();
window.console.log(myAnimal.displayMsg());
*/

//STEP 4

/*
//CREATE AN ANIMAL CLASS USING CONSTRUCTOR SYNTAX AND ACCEPTING AN ARGUMENT

var Animal = function (animal) {
    "use strict";
    this.displayMsg = function () {
       return "The " + animal + " has been created!";
    };
}

var myAnimal = new Animal("unicorn");
window.console.log(myAnimal.displayMsg());
*/

//STEP 5

/*
//CREATE AN ANIMAL CLASS USING CONSTRUCTOR SYNTAX AND DEFINING FIVE PROPERTIES (TYPE, BREED, COLOR, HEIGHT, LENGTH)

var Animal = function (type, breed, color, height, length_value) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length_value = length_value;
}


//STEP 6

//USE A FOR-IN LOOP THROUGH AND DISPLAY ALL OF THE PROPERTIES IN THE ANIMAL CLASS

var myAnimal = new Animal();
for (var property in myAnimal) {
    window.console.log(property);
}
*/

//STEP 7

/*
var Animal = function (type, breed, color, height, length_value) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length_value = length_value;
};

//CREATE A PUBLIC METHOD SPEAK

Animal.prototype.speak = function () {
    "use strict";

	//CHECK THE TYPE OF ANIMAL

    if (this.type === "dog") {
        window.console.log("The " + this.color + " dog is barking!");
    } else if (this.type === "cat") {
        window.console.log("The " + this.color + " cat is meowing!");
    } else {
        window.console.log("I have no idea what the animal " + this.type + " is.");
    }
};

var myAnimal = new Animal("dog", "beagle", "red", "30cm", "50cm");
myAnimal.speak();
*/

//STEP 8

/*
function Animal(type, breed, color, height, length_value) {
    "use strict";

	//PRIVATE PROPERTIES

    var prvType = type;
    var prvBreed = breed;
    var prvColor = color;
    var prvHeight = height;
    var prvLength_value = length_value;

	//CREATE PRIVILEGE METHOD

    this.checkType = function () {
        "use strict";
        if (prvType === "dog") {
            return "dog";
        } else if (prvType === "cat") {
            return "cat";
        } else {
            return prvType;
        }
    };
}

//CREATE PUBLIC METHOD

Animal.prototype.speak = function () {
    "use strict";
    window.console.log("The " + this.checkType() + " has made a noise!");
}

var myAnimal = new Animal("cat", "ragdoll", "pink", 30, 50);
myAnimal.speak();
*/

//STEP 9

/*
var userText = window.prompt("Enter your paragraph of text:");
var userWord = window.prompt("Enter your specific word and I will count the number of time that word was found in your paragraph.");

//CREATE OWN STRING METHOD THAT INHERITS FROM THE NATIVE STRING OBJECT

String.prototype.findWords = function () {
	"use strict";
	var regexp = new RegExp(userWord, "gi");
	var count = userText.match(regexp).length;
	window.alert('Your paragraph of text was: \n' + userText + '\nYour specific word "' + userWord + '" was found ' + count + ' time(s).');
};

userText.findWords();
*/

