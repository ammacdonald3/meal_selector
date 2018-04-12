var mealOptions = ["Chicken", "Steak", "Burgers"];

// var randomMealSunday = meals[Math.floor(Math.random() * meals.length)];
// var randomMealMonday = meals[Math.floor(Math.random() * meals.length)];
// var randomMealTuesday = meals[Math.floor(Math.random() * meals.length)];
// var randomMealWednesday = meals[Math.floor(Math.random() * meals.length)];

// console.log(randomMealSunday);
// console.log(randomMealMonday);
// console.log(randomMealTuesday);
// console.log(randomMealWednesday);

function generateMeals() {
	selectedMeals = [];
	for (i = 0; i < 4; i++) {
		var rand = Math.floor(Math.random() * mealOptions.length);
	    var num = mealOptions[rand];
	    mealOptions.splice(rand,1);
	    selectedMeals[i] = num;
	    console.log(num);
	    console.log(selectedMeals);
	}
}

// document.getElementById("#generate").onclick = generateMeals();

// $("button").on("click", function() {
// 	$(this).generateMeals();
// })

// document.getElementById("button").on("click", function() {
// 	$(this).generateMeals();
// })