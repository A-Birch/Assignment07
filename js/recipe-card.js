/*eslint-env browser*/

// -------- The Recipe Card --------

//CREATE A RECIPECARD CLASS
var RecipeCard = function (title, servings, ingredients) {
	"use strict";
	this.title = title;
	this.servings = servings;
	this.ingredients = ingredients;
};

//CREATE A PUBLIC METHOD THAT DISPLAY RECIPE (TITLE, SERVINGS, INGREDIENTS)
RecipeCard.prototype.displayRecipe = function () {
	"use strict";
	window.console.log(this.title + "\nServes: " + this.servings + "\nIngredients:");
	for (var i in this.ingredients) {
		window.console.log("- " + this.ingredients[i]);
	}
};

//CREATE A INSTANSE OF CLASS RECIPECARD
var blini = Object.create(RecipeCard.prototype, {
	title: {value: "Blini (Russian Pancakes)"},
	servings: {value: 8},
	ingredients: {value: ["4 1/4 cups milk",
						  "5 eggs", "1/3 teaspoon salt",
						  "2 tablespoons white sugar",
						  "1/8 teaspoon citric acid powder",
						  "4 cups all-purpose flour",
						  "3 tablespoons vegetable oil",
						  "1 cup boiling water",
						  "2/3 cup butter, divided",
						  "1/2 teaspoon baking soda"]}
});

//CREATE A INSTANSE OF CLASS RECIPECARD
var guacamole = Object.create(RecipeCard.prototype, {
	title: {value: "Guacamole"},
	servings: {value: 4},
	ingredients: {value: ["3 Avocados",
						  "1 Lime",
						  "1 Teaspoon Salt",
						  "1/2 Cup Onion",
						  "3 Tablespoons Cilantro",
						  "2 Diced Tomatoes",
						  "1 Teaspoon Garlic",
						  "1 Pinch Ground Pepper"]}
});


blini.displayRecipe();
