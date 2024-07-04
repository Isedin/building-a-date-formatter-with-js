/* Start by getting the #current-date element using the .getElementById() method and assign it to a const variable called currentDateParagraph */
const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

/* In JavaScript, there are many built-in constructors that create objects. A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.
For example, you can use the Date() constructor with the new operator to create a new Date object that returns a string with the current date and time: */
const date = new Date();

/* The Date object has a number of methods that allow you to get the date and time in different formats.
One of those is the .getDate() method, which returns a number between 1 and 31 that represents the day of the month for that date. */
const day = date.getDate(); // this returns a number between 1 and 31 that represents the day of the month for that date.

/*const datum = new Date();
const dayOfTheMonth = datum.getDate();
console.log(dayOfTheMonth); // ovo bi trebalo da vrati danasnji dan*/

/* The .getMonth() method returns a number between 0 and 11. This represents the month for the date provided, where 0 is January and 11 is December. Because the number this method returns is zero-based, you need to add 1 to it to get the expected month number. */
const month = date.getMonth() + 1;

/* The .getFullYear() method returns a number which represents the year for the provided date.
Using const, create a variable named year and assign it the year from date with the .getFullYear() method. */
const year = date.getFullYear();

/* The .getHours() method returns a number between 0 and 23. This represents the hour for the provided date, where 0 is midnight and 23 is 11 p.m.
Create a const variable named hours and assign it the hour from date with the .getHours() method. */
const hours = date.getHours();

/* The .getMinutes() method returns a number between 0 and 59 which represents the minutes for the provided date.
Create a const variable named minutes and assign it the minutes from date with the .getMinutes() method. */
const minutes = date.getMinutes();

const formattedDate = `${day} - ${month} - ${year}`;

/* Use the textContent property on currentDateParagraph to set its text content to the value of the formattedDate variable. */
currentDateParagraph.textContent = formattedDate;

// ovo bi trebalo da vrati danasnji dan
dateOptionsSelectElement.addEventListener("change", () => {
	/* Add a case where the value is "yyyy-mm-dd". Inside the case, set the text content of currentDateParagraph to the value of formattedDate. */
	switch (dateOptionsSelectElement.value) {
		case "yyyy-mm-dd":
			currentDateParagraph.textContent = formattedDate
				.split("-")
				.reverse()
				.join("-"); // ovo bi trebalo da vrati niz sa danom, mesecom i godinom
			break;
		case "mm-dd-yyyy-h-mm":
			currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
			break;
		/* In a switch statement, the default case is executed when none of the previous case conditions match the value being evaluated. It serves as a catch-all for any other possible cases. */
		/* For the default case, set the text content of currentDateParagraph to the value of formattedDate. */
		default:
			currentDateParagraph.textContent = formattedDate;
	}
});

const exampleSentence = "cihemaraK nidesI".split("").reverse().join("");
console.log(exampleSentence);
