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


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("date").innerHTML = ("Week of: " + today);
