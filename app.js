//Q1
// let userFirstName = prompt("Enter your first name?")
// let userLastName = prompt("Enter your last name?")
// let fullName = (userFirstName+userLastName)
// console.log(fullName);


//Q2
// let userModel = prompt("Enter your fvrt model")
// let userInput = userModel.length
// console.log(`My favourite phone is ${userModel} length of string is ${userInput} `);

//Q3
// let letter = "pakistani"
// let letterIndex= letter.indexOf('n')
// console.log(`Index of pakistan is ${letterIndex}`);

// Q4

// let word = "Hello World";

// let lastIndexOFL = word.lastIndexOf("l")
// document.write(` String: Hello World Last Index OF "l" : ` + lastIndexOFL);

//Q5
// let string = "pakistani"
// let character=string.charAt("3")
// console.log(`character at index 3 : ${character}`);

// Q6
// let userFirstName = prompt("Enter your first name?")
// let userLastName = prompt("Enter your last name?")
// let concat= userFirstName.concat(" " ,userLastName)
// console.log(concat);

//Q7
// let originalWord = "Hydrabad";

// let replaceWord = originalWord.replace("Hydrabad", "Islamabad");

// document.write(`Original place:` + originalWord + "<br>");
// document.write(`Replace place:` + replaceWord );

//Q8
// let massage = `“Ali and Sami are best friends. They play cricket and
// football together.”;`;

// let replaceMassage = massage.replace(/and/g, "&");

// document.write("Original Message: " + massage + "<br>");
// document.write("Replace Message: " + replaceMassage);

//Q9
// let stringValue = "472";

// let stringToNumber = Number(stringValue);

// document.write(`Original String :` + stringValue + "<br>");
// document.write("Type of Original String: " + typeof stringValue + "<br>");


// document.write(`Convert Number :` + stringToNumber + "<br>");
// document.write("Type of Converted Number: " + typeof stringToNumber );

//Q10

// let yourInput = prompt(` Enter Your Input `);

// let convertUpperCase = yourInput.toUpperCase();

// document.write(`User input :` + yourInput + "<br>");
// document.write(` Convert Upper Case : ` + convertUpperCase)




// ------------------------ Question 12 ----------------------

// let num = 35.36;

// document.write("Number: " + num + "<br>");  

// let numToString = num.toString();

// let dotRemove = numToString.replace("." , "");

// document.write("Result: " + dotRemove);



// // - Q 14 

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcomde To S.Bakery What Do You Want TO Ordered Sir/Mam: ").toLowerCase();

// if (A.includes(userInput)) {
//     alert("Yes, " + userInput + " Is Avalable In Our Bakery ");
// } else {
//     alert("No, We Are Sorry Sir " + userInput + " Is Not Available In Our Bakery.");
// }

// // ------------------------ Question 15 ----------------------

// var msg = alert(`password Should must Enter alphabets and numbers`);
// var msg = alert(`Password should not start with a number `);
// var msg = alert(`password must at least 6 characters long`);

// var password = prompt("Enter your Password:");

// if (password.length < 6) {
//     alert("Password at least 6 characters.");
// } else {

//     var firstChar = password.charAt(0);

//     if (/^[a-zA-Z0-9]+$/.test(password) && isNaN(firstChar)) {
//         alert("Correct Password: " + password);
//     } else {
//         alert("Wronge Password Please Enter a correct Password.");
//     }
// }

// // ------------------------ Question 16 ----------------------

// var university = "University of Karachi";

// var universityArray = university.split('');

// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }

// // ------------------------ Question 17 ----------------------

// var enterWord = prompt("Enter Something:");

// if (enterWord !== null && enterWord !== "") {

//     var lastCharacter = enterWord.charAt(enterWord.length - 1);
//     alert( "User Input: " + enterWord)
//     alert("Last character: " + lastCharacter);
// } else {
//     alert("No input provided.");
// }


// // ------------------------ Question 18 ----------------------

// let story = "The quick brown fox jumps over the lazy dog";

// let lowercaseString = story.toLowerCase();

// let wordToSearch = "the";

// var wordCount = 0;

// var index = lowercaseString.indexOf(wordToSearch);
// while (index !== -1) {
//     wordCount++;
//     index = lowercaseString.indexOf(wordToSearch, index + 1);
// }

// alert("Word 'the' " + wordCount + " times in the given string.");