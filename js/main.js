/* This is a comment, multi line || ((){}) */
// This is also a comment, only one line


function askQuestions(){


	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');



	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18)	{
		console.log('User is an adult');
	} 

	else if (age >= 13) {
		console.log('User is a teenager');
	}

	else {
		console.log('User is a child');
	}

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
			console.log('Hello!');
		
	}  else {
			console.log('You are not a General!');
	} 

	var faveColour = prompt('What is your favourite colour?');
	faveColour = faveColour.toLowerCase().trim();

	if (faveColour == 'red' || 
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow')  {

		$('h1').css('color', faveColour);

	} else {
		$('h1').css('color', 'grey');

	}

}



//When the page has loaded
$(function()  {

	$('img').on('click', askQuestions);

	// When the user clicks on h3
	$('h3').on('click', function() {


		// Toggle the next element or slideToggle to slide
		$(this).next().slideToggle(500);



	});
});