// https://github.com/PritomDey303/assignment-3



//kilometerToMeter Function

function kilometerToMeter(kilometer) {

	if (kilometer < 0) {
		return "Distance can't be negative.";
    } 
    else {
		var meter = kilometer * 1000; //1 kilometer=1000 meter

		return meter; //returning output in meter
	}
}



//budgetCalculator Function

function budgetCalculator(watch, phone, laptop) {

	//Declaring Variables
	var watchPrice = 50;
	var phonePrice = 100;
	var laptopPrice = 500;
	var totalPrice = 0;

	if (watch < 0 || phone < 0 || laptop < 0) {

		return "The number of products can't be negative.Try with valid inputs."; //returning error message.
    } 
    else {

		totalPrice = watch * watchPrice + phone * phonePrice + laptop * laptopPrice; //Calculating total price
		return totalPrice; //returning totalPrice as output
	}
}



//hotelCost Function

function hotelCost(numOfDays) {

	//Declaring Variable
	var totalCost = 0;
	var rate1 = 100; //For first 10 days
	var rate2 = 80; //For second 10 days
	var rate3 = 50; //For rest of the days after first 20 days

	if (numOfDays < 0) {
		return "Number of days can't be negative. Try with valid input."; //returning error message
    } 
    else if (numOfDays <= 10) {
		totalCost = numOfDays * rate1;
    } 
    else if (numOfDays <= 20) {
		totalCost = (numOfDays - 10) * rate2 + 10 * rate1;
    } 
    else {
		totalCost = (numOfDays - 20) * rate3 + 10 * rate2 + 10 * rate1;
	}


	return totalCost; //Returning totalCost
}





//megaFriend Function

function megaFriend(Friends) {
	//Declaring Variables
	var longestName = "",
		max = 0;

	if (Friends.length === 0) {
		return "There is no name in the array."; //returning errors.
    } 
    else {
		//Initializing Variables
		longestName = Friends[0];
		max = Friends[0].length;
		//Looping
		for (var i = 1; i < Friends.length; i++) {
			if (max < Friends[i].length) {
				max = Friends[i].length;
				longestName = Friends[i];
			}
		}

	}
	return longestName; //Returning Longest Name
}