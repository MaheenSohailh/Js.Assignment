////////// string methods

document.writeln(`
     <h1 class="brown"> String Methods </h1> 
    `)

////////// Q : 1
var Name = prompt("Enter your first name?");
var lastName = prompt("Enter your last name?");
var fullName = Name + " " + lastName;
alert("Hello, " + fullName + ".");

///////////// Q : 2
document.writeln(`

    <h1> Length: </h1>
    
 `)
var mobile = prompt("Enter your favorite mobile phone model?");
document.writeln("My favorite phone: " + mobile + "<br>" );
document.writeln("Length string: " + mobile.length + "<br>");

/////////// Q : 3
document.writeln(`

    <h1> Secondlast Index: </h1>
    
 `)
var letter = "Pakistani";
var index = letter.indexOf("n");
document.writeln("String: " + letter + "<br>");
document.writeln("Index of 'n': " + index);


/////////// Q : 4
document.writeln(`

    <h1> Last Index: </h1>
    
 `)
var letter = "Hello World";
var lastIndex = letter.lastIndexOf("l");
document.writeln("String: " + letter + "<br>");
document.writeln("Last index of 'l': " + lastIndex);

/////////// Q : 5
document.writeln(`

    <h1> Third Index: </h1>
    
 `)
var letter = "Pakistani";
var index = letter.indexOf("i");
document.writeln("String: " + letter + "<br>");
document.writeln("Index of 'i': " + index);

/////////// Q : 6

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, ".concat(fullName, "."));

/////////// Q : 7
document.writeln(`

    <h1> Replace: </h1>
    
 `)
var city = "Hyderabad";
var replaceCity = city.replace("Hyder", "Islam");
document.writeln("City: " + city + "<br>");
document.writeln("After replacement: " + replaceCity)

//////////////    Q : 8
document.writeln(`

    <h1> Replace: </h1>
    
 `)
var message = "“Ali and Sami are best friends. They play cricket and football together.”";
var replaceMessage = message.replace(/and/g, "&");
document.writeln("Original message: " + message + "<br>");
document.writeln("Replaced message: " + replaceMessage);
 
//////////////// Q : 9
document.writeln(`

    <h1> String and Number: </h1>
    
 `)
var str = "472";
var num = Number(str);
document.writeln("Value: " +  str + "<br>");
document.writeln("Type: " + typeof str + "<br>");

document.writeln("Value: " +  num + "<br>");
document.writeln("Type: " + typeof num);

//////////////// Q : 10
document.writeln(`

    <h1> UpperCase capital letters:  </h1>
    
 `)
var user = prompt("Enter any word: \n Example, sun > Sun");
document.writeln("User input: " + user + "<br>" );
document.writeln("Upper case: " + user.toUpperCase());


//////////////// Q : 11
document.writeln(`

    <h1> TitleCase first letter capital:  </h1>
    
 `)
var txt = prompt("Enter any word: \n Example, sun > Sun")
var result = txt.charAt(0).toUpperCase() + txt.slice(1);
document.writeln("User input: " + txt + "<br>");
document.writeln("Title case: " + result);

// ////////////// Q : 12
document.writeln(`

    <h1>  Converts the variable num to string: </h1>
    
 `)
 var num = 35.36;
 var str = num.toString().replace(".", "");
 document.writeln("Number: " + num + "<br>");
 document.writeln("Result: " + str);


// ////////////// Q : 13

var username = prompt("Enter your username:");

for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        alert("Please enter a valid username");
        break;
    }
}

////////////// Q : 14
 var A = ["cake", "pastry", "cookie", "chips", "patties"];
    var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
    var isfound = false;

    for (let i = 0; i < A.length; i++) {
      if (A[i] === userInput) {
       isfound = true;
         alert(userInput + " is available at index " + i + " in our bakery.");
       break;
   }
 }

  if (!isfound) {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
  }


// ////////////// Q : 15

var password = prompt("Enter your password:");

var alphabet = /[a-zA-Z]/.test(password);
var number = /[0-9]/.test(password);
var startsWithNumber = /^[0-9]/.test(password);

if (password.length < 6) {
    alert("Password must be at least 6 characters long");
} else if (startsWithNumber) {
    alert("Password can not begin with a number");
} else if (!alphabet || !number) {
    alert("Password must contain both alphabets and numbers");
} else {
    alert("Password is valid");
}


// ////////////// Q : 16
document.writeln(`

    <h1> split method:  </h1>
    
 `)
var university = "University of Karachi";
var array = university.split("");

for (var i = 0; i < array.length; i++) {
    document.writeln(array[i] + "<br>");
}


// ////////////// Q : 17
document.writeln(`

    <h1> Last character:  </h1>
    
 `)
 var user = prompt("Enter any word: \n Example, work > k");
 var input = user.charAt(user.length - 1);
 document.writeln(" User input: "  + user + "<br>");
 document.writeln("Last character of input: " + input);


// ////////////// Q : 18 

document.writeln(`

    <h1> String:  </h1>
    
 `)
var text = "The quick brown fox jumps over the lazy dog";
var lowerText = text.toLowerCase();
var words = lowerText.split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

document.writeln("Text: " + text + "<br>");
document.writeln("There are " + count + " occurrence(s) of word 'the'");


// //////////// MATH METHODS:

document.writeln(`
     <h1 class="brown"> Math Methods </h1> 
    `)

// ////////////// Q : 1

document.writeln(`

    <h1> Positive integer:  </h1>
    
 `)
var num = +prompt("Enter a positive number:");
document.writeln("number: " + num + "<br>");
document.writeln("round off value: " + Math.round(num) + "<br>");
document.writeln("floor value: " +  Math.floor(num) + "<br>");
document.writeln("ceil value: " +  Math.ceil(num));



// //////////////// Q : 2
document.writeln(`

    <h1>  Negative floating point:  </h1>
    
 `)
var num = +prompt("Enter a  negative floating point:");
document.writeln("number: " + num + "<br>");
document.writeln("round off value: " + Math.round(num) + "<br>");
document.writeln("floor value: " +  Math.floor(num) + "<br>");
document.writeln("ceil value: " +  Math.ceil(num));


// //////////////// Q : 3
document.writeln(`

    <h1>  absolute value:  </h1>
    
 `)
 var num = +prompt("Enter a number: absolute value");
 var absolute = Math.abs(num);
 document.writeln(" absolute value of " + num + " is " + absolute );


// //////////////// Q : 4
document.writeln(`

    <h1> Random method:  </h1>
    
 `)
var value = Math.floor(Math.random() * 6) + 1;
document.writeln("Random dice value: " + value);


// //////////////// Q : 5
document.writeln(`

    <h1> Coin toss using random method:  </h1>
    
 `)
var toss = Math.floor(Math.random() * 2) + 1;
var result = (toss === 1) ? "Tails" : "Heads";
document.writeln(toss + "<br>");
document.writeln("Random coin value: " + result);



// //////////////// Q : 6
document.writeln(`
    <h1> random number between 1 and 100:  </h1>
`)
var num = Math.floor(Math.random() * 100) + 1;
document.writeln("Random number between 1 and 100: " + num );


// //////////////// Q : 7
document.writeln(`
    <h1> User weight:  </h1>
`)
var user = prompt("Enter your weight in kilograms");
var weight = parseFloat(user);
document.writeln("The weight of user is " + weight + " kilograms");


// // //////////////// Q : 8
var userGuess = +prompt("Guess the  number between 1 and 10");
var correctAns = Math.floor(Math.random() * 10) + 1;

if (userGuess === correctAns) {
    alert("Congratulations! You win.");
} else {
    alert("          Try again! \n The secret number was " + correctAns );
}


// /////DATE METHODS

document.writeln(`
     <h1 class="brown"> Date Methods </h1> 
    `)
// //////////// Q : 1
document.writeln(`
    <h1>  Current date and time:  </h1>
`)
var date = new Date();
document.writeln(date);

// //////////// Q : 2
var month = new Date();
var monthNames = [
  "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
var monthIndex = month.getMonth();
var monthName = monthNames[monthIndex];
alert(" current month : " + monthName );


//  //////////////////// Q : 3
var crrentDay = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayIndex = crrentDay.getDay();
var day = days[dayIndex].slice(0,3);
alert(" Today is " + day);


// ///////////// Q : 4
var day = new Date();
var currentDay = day.getDate();
if(currentDay === 0 , currentDay === 6){
    alert("It’s Fun day");
}else{
    alert("Working day");
}

// //////////////// Q : 5
var currentDate = new Date();
var dayOfMonth = currentDate.getDate(); 

if (dayOfMonth < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}


// ////////////// Q : 6 
var date = new Date();
var milli =  date.getTime();  ////// .getmilliseconds
var minutes = date.getMinutes();
document.writeln("<h1>Minutes since midnight : </h1> Current Date : " + date + "<br> Elapsed milliseconds since January 1, 1970 : " + milli  + "<br> Elapsed minutes since January 1, 1970 : " + minutes);


// //////////////// Q : 7
var time = new Date();
var hours = time.getHours();
if(hours < 12){
    alert(" It's AM");
}else{
    alert(" It's PM");
}

// /////// Q : 8 
var date = new Date(2020, 11, 31);
document.writeln("<h1>LaterDate : </h1> Later date : " + date);

// ////////// Q : 9

var start = new Date(" June 18, 2015");
var last = new Date();
var difference = last - start;
var result = Math.floor(difference / (1000 *60 *60 *24));

alert( result + " days have passed since 1st Ramadan, 2015.");


// ////////// Q : 10
var date = new Date();
var elapsed = Math.floor(date / 1000);
document.writeln("<h1> elapsed between the reference date : </h1>")
document.writeln("On reference date " + date + ", <br> " + elapsed + " Seconds had passed since beginning of 2015");


// // /////////////// Q : 11
var hour = new Date();
document.writeln("<h1> Date object : </h1>")
document.writeln("current date: " + hour + "<br>");
hour.setHours(hour.getHours() - 1);
document.writeln("1 hour ago, it was " + hour);

// //////////// Q : 12
var date = new Date();
alert("current date: " + date);
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("100 years back, it was " + currentDate);


// ////////////// Q : 13 
document.writeln(`
    
    <h1> Birth year and age: </h1>
`)
var age = prompt("Enter your age:");
var year = new Date().getFullYear();
var birthYear = year - age ;
document.writeln("Your age is: " + age + "<br>");
document.writeln("Your birth year is: " + birthYear);


// /////////////////// Q : 14
var customerName = "Maheen Sohail";
var monthNames = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];
var currentMonth = monthNames[new Date().getMonth()];
var numberOfUnits = 350;
var chargesPerUnit = 18.50;
var netAmount = numberOfUnits * chargesPerUnit;
var lateSurcharge = 350;
var grossAmount = netAmount + lateSurcharge;

document.writeln("<h2>K-Electric Bill</h2>");
document.writeln("Customer Name: <strong>" + customerName + "</strong><br>");
document.writeln("Month: <strong>" + currentMonth + "</strong><br>");
document.writeln("Number of Units: <strong>" + numberOfUnits + "</strong><br>");
document.writeln("Charges per Unit: <strong>" + chargesPerUnit.toFixed(2) + "</strong><br><br>");

document.writeln("Net Amount Payable (within Due Date): <strong>" + netAmount.toFixed(2) + "</strong><br>");
document.writeln("Late Payment Surcharge: <strong>" + lateSurcharge.toFixed(2) + "</strong><br>");
document.writeln("Gross Amount Payable (after Due Date): <strong>" + grossAmount.toFixed(2) + "</strong><br>");

