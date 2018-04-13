function generateMeals() {
	// Create array of meal option
	var mealOptions = ["Chicken", "Steak", "Burgers", "Shepherd's Pie", "Pot Roast", "Stuffed Chicken", "Chicken Parm", "Chicken Marsala", "Tacos"];
	// Create blank array for selected meals
	//selectedMeals = [];
	for (i = 0; i < 6; i++) {
		// Randomly select a meal from array
		var randomMeal = Math.floor(Math.random() * mealOptions.length);
		// Assign selected meal to variable
	    var selectedMeal = mealOptions[randomMeal];
	    // Remove selected meal from array of meal options
	    mealOptions.splice(randomMeal,1);
	    // Append selected meal to selected meals array
	    //selectedMeals[i] = selectedMeal;
	    // Print selected meal to HTML table
	    document.getElementById("meal" + [i]).innerHTML = selectedMeal;
	}
}