 alert("Welcome to our website!");   
 alert("Error! Please enter a valid password."); 
 alert("Welcome to JS Land...\nHappy Coding!");
 alert("Welcome to JS");
 alert("Happy Coding!");
 alert("✅Prevent this page from creating additional dialogs");
 alert("Hello… I can run JS through my web browser's console");
 document.writeln("Yah! I can write HTML content through JavaScript")

///////  Page Content
document.writeln(
    `
   <h1>Page Content Here</h1>
  <p>Inside your page’s HTML</p>

 <h1>All content loaded</h1>
  <p>The alert runs after this content appears.</p>
  
    `
  )
   alert("Hello from inside the body!");

   alert("Hello from after the page content!");

   document.addEventListener("DOMContentLoaded", () => {
      alert("Hi from head script!"); });


    ///////// Message Output
    document.writeln(
    `
      <h1>Message Output:</h1>
      <p> My email address is: <a href="#" id="output" target="_blank"></a></p>
  
    `
  )
    var email = "maheensohail148@gmail.com";
    var message = email;
    document.getElementById("output").innerText = message;
    alert("Show email address");


   ///////////   Alert
 document.writeln(
    `
       <div class="heading"> <h1>Alert</h1>
       <button id="Btn">Click Me!</button>
      </div>
    `
  )
     document.getElementById("Btn").addEventListener("click", function() {
       alert("Button clicked – great job!");
    });

    var email = "maheensohail148@gmail.com";
    alert("My email address is  " + email);

    var name = "Maheen Sohail";    
    var age = 18;           
    var Grade = "A";    

    alert("Name: " + name);
    alert("Age: " + age);
    alert("Grade: " + Grade);

    var username;
    username = prompt("Please enter your name:")
    alert("My name is: " + username);

    var myname;
    myname = prompt("Please enter your full name:")
    alert("Full Name: " + myname);

    var message = "Hello World";
    alert(message);

    var message = "PIZZA\nPIZZ\nPIZ\nPI\nP";
    alert(message);


    var book = "A smarter way to learn JavaScript";
    alert("I am trying to learn form the Book " + book);


///////////  Message Display
 document.writeln(
    `
       <h1>Message Display:</h1>
       <p id="display"></p> 
    `
  )

       var message = "Hello! This message is show using JavaScript.";
       document.getElementById("display").innerText = message;
       alert(message);


        var age;
       age = prompt("Please enter your age:")
       alert("I am " + age + " year old");


       var visit = localStorage.getItem('visit')? parseInt(localStorage.
       getItem('visit')): 0;
      visit++; localStorage.setItem('visit',visit);
      alert("Your have visited the site " + visit + " times" );

       var birthyear;
       var birthyear= prompt("Enter your birth year:");
       alert("My birth year is : " +  birthyear);


       ////////  orderMessage
  document.writeln(
    `
       <p id="orderMessage"></p> 
    `
  )
    var visitorName = "John Doe";
    var productTitle = "T-shirt";
    var quantity = 5;
    var message = "<strong>" + visitorName + "</strong> ordered <strong>" + quantity + " " + productTitle + "(s)</strong> on XYZ Clothing store.";
    document.getElementById("orderMessage").innerHTML = message;

    //////    variable name
  document.writeln(
    `
    <h1> variables Name: </h1>
  <p>1. Declare 3 variables in one statement:</p>
  <p id="vars"></p>

  <p>2. Legal Variable Names:</p>
  <ul id="legalVars"></ul>

  <p>3. Illegal Variable Names (commented out in JS as they would throw errors):</p>
  <ul id="illegalVars"></ul>
  
  <h1>Rules for naming JS variables</h1>

  <p> Variable names can only contain , numbers , $ and _ .
    For example: $my_1stVariable</p>

  <p> Variable must begin with a letter , $ or _ .
  For example: $name, _name or name </p>

  <p> Variable names are case sensitive </p>
  <p> Variable names should not be JS keywords </p>

    `
  )
   // 1. Declare 3 variables in one statement
    var name = "Maheen", age = 18, city = "Karachi";
    document.getElementById("vars").innerText = "name = " + name + ", age = " + age + ", city = " + city;

    // 2. Legal variable names
    var legal = ["myName", "$amount", "_value", "age123", "first_name"];
    var legalList = document.getElementById("legalVars");
    legal.forEach(function(varName) {
    var li = document.createElement("li");
    li.textContent = varName;
    legalList.appendChild(li); });

    // 3. Illegal variable names (would cause errors if declared)
    var illegal = ["1name", "my-name", "var", "alert", "user name"];
    var illegalList = document.getElementById("illegalVars");
    illegal.forEach(function(varName) {
    var li = document.createElement("li");
    li.textContent = varName;
    illegalList.appendChild(li); });

    ///////////  Math Expressions
 document.writeln(
    `
    <h1> Math Expressions: </h1>

  <p id="text1"></p>
  <p id="text2"></p>
  <p id="text3"></p>


    `
  )
     // === Task 1: Addition ===
    var num1 = 3;
    var num2 = 5;
    var sum = num1 + num2;
    document.getElementById("text1").innerHTML = "1)   Sum of " + num1 + " and " + num2 + " is " + sum;

    // ==== Task 2: Subtraction, Multiplication, Division, Modulus ====
    var subtract = num1 - num2;
    var multiply = num1 * num2;
    var divide = num1 / num2;
    var modulus = num1 % num2;

    document.getElementById("text2").innerHTML =
      "2)   Subtraction of " + num1 + " and " + num2 + " is " + subtract + "<br>" +
      "Multiplication of " + num1 + " and " + num2 + " is " + multiply + "<br>" +
      "Division of " + num1 + " by " + num2 + " is " + divide + "<br>" +
      "Modulus of " + num1 + " and " + num2 + " is " + modulus;

    // == Task 3: JS Math Expressions Step-by-Step ==
    var output = "";

    var a;   // declare  
    output += "3)    Value after variable declaration is: " + a + "<br>";

    a = 5;   // initialize
    output += "Initial value: " + a + "<br>";

    a++;   // increment
    output += "Value after increment is: " + a + "<br>";

    a = a + 7;   // add 7
    output += "Value after addition is: " + a + "<br>";

    a--;   // decrement
    output += "Value after decrement is: " + a + "<br>";

    var remainder = a % 3;   // modulus
    output += "The remainder is: " + remainder;

    document.getElementById("text3").innerHTML = output;


    /////////  Ticket Price
     document.writeln(
    `
      <h1> Cost Ticket Price </h1>
      <p id="movie"></p>

    `
  )
    var ticket = 600;
    var total = ticket *5;
    document.getElementById("movie").innerText = "Total cost buy 5 ticket to a movie " + total + " PKR";

    ////  Table
  document.writeln(
    `
  <h1>Table</h1>

    `
  )
    var Start = +prompt ("Start the Number of Table");
    var End = +prompt ("End the Number of Table");
    var number =  +prompt("Enter the Number of Table");
    for(var i = Start; i <= End; i++){
    document.writeln(`<p>  ${number} X ${i} = ${number * i}  </p>`)
   }


  //////////  Marks Sheet
   document.writeln(
    `
   <h1>Marks Sheet</h1>

    `
  )
    var totalMarks = 980;
    var marksObtained = 804;
    var percentage = (marksObtained / totalMarks) * 100;

    document.writeln("Total marks: " + totalMarks + "<br>");
    document.writeln("Marks obtained: " + marksObtained + "<br>");
    document.writeln("Percentage: " + percentage + "%");


     ///////////////   Currency in PKR
     document.writeln(
    `
   <h1>Currency in PKR</h1>

    `
  )
    var totalPKR = (10 * 104.80) + (25 * 28);
    document.writeln("Total Currency in PKR: " + totalPKR);

    ////////////  Temperature Converter
     document.writeln(
    `
     <h1>Temperature Converter</h1>

    `
  )
    // a. Store a Celsius temperature
    var celsius = 25;

    // b. Convert Celsius to Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;
    document.writeln(celsius + "°C is " + fahrenheit + "°F<br>");

    // c. Store a Fahrenheit temperature
    var fahrenheit2 = 70;

    // d. Convert Fahrenheit to Celsius
    var celsius2 = (fahrenheit2 - 32) * 5/9;
    document.writeln(fahrenheit2 + "°F is " + celsius2 + "°C");

    //////////  Shopping Cart
  document.writeln(
    `
    <div>
       <h1> Shopping Cart </h1>
    </div>
    `
  )
    var priceItem1 = 650;
    var priceItem2 = 100;
    var qtyItem1 = 3;
    var qtyItem2 = 7;
    var shippingCharges = 100;
    var totalCost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;
    document.writeln("Price of item 1 is " + priceItem1 + "<br>");
    document.writeln("Quantity of item 1 is " + qtyItem1 + "<br>");
    document.writeln("Price of item 2 is " + priceItem2 + "<br>");
    document.writeln("Quantity of item 2 is " + qtyItem2 + "<br>");
    document.writeln("Shipping Charges: " + shippingCharges + "<br><br>");
    document.writeln("<strong>Total cost of your order is " + totalCost);

  //////////  Arithmetic Expression:
document.writeln(
    `
    <div>
       <h1> Arithmetic Expression:  </h1>
    </div>
    `
  )
    var number = 10; 
    var result = ((number + 5) * 10) / 2;
    document.writeln("Initial number: " + number + "<br>");
    document.writeln("Result after ((number + 5) * 10) / 2 is: " + result + "<br><br>");

     /////////  Age Calculato
   document.writeln(
    `
    <div>
       <h1> Age Calculato </h1>
    </div>
    `
  )
    var currentYear = 2016;
    var birthYear = 1992;
    var age1 = currentYear - birthYear;

    document.writeln("Current Year: " + currentYear + "<br>");
    document.writeln("Birth Year: " + birthYear + "<br>");
    document.writeln("Your Age is:" + age1);

   /////////  The Geometrizer
    document.writeln(
    `
    <div>
       <h1> The Geometrizer </h1>
    </div>
    `
  )
    var radius = 20;
    var pi = 3.142;
    var circumference = 2 * pi * radius;
    var area = pi * radius * radius;

    document.writeln("Radius of a circle: " + radius + "<br>");
    document.writeln("The circumference is: " + circumference + "<br>");
    document.writeln("The area is: " + area + "<br><br>");

     ///////////    The Lifetime Supply Calculator
      document.writeln(
    `
    <div>
       <h1> The Lifetime Supply Calculator </h1>
    </div>
    `
  )
    var favoriteSnack = "chocolate Chip";
    var currentAge = 18;
    var maxAge = 65;
    var amountPerDay = 3;

    var totalSnacks = (maxAge - currentAge) * amountPerDay;

    document.writeln("Favorite Snack: " + favoriteSnack + "<br>");
    document.writeln("Current Age: " + currentAge + "<br>");
    document.writeln("Estimated Maximum Age: " + maxAge + "<br>");
    document.writeln("Amount per day: " + amountPerDay + "<br>");
    document.writeln("You will need " + totalSnacks + " " + favoriteSnack +  " to last you until the ripe old age of " + maxAge + ".");


      ////////////   Checker Character Type
     document.writeln(
    `
    <div>
       <h1> Checker Character Type  </h1>
    </div>
    `
  )
    
    var char = prompt("Enter a single character:");
    var code = char.charCodeAt(0);

    if (code >= 48 && code <= 57) {
      document.writeln("The input is a number.");
    } else if (code >= 65 && code <= 90) {
      document.writeln("The input is an uppercase letter.");
    } else if (code >= 97 && code <= 122) {
      document.writeln("The input is a lowercase letter.");
    } else {
      document.writeln("The input is not a number or alphabet character.");
    }

    /////////  Integers number
     document.writeln(
       `
         <h1>  Two Integers </h1>
      `
   )

    var num1 = +(prompt("Enter the first integer:"));
    var num2 = +(prompt("Enter the second integer:"));

    if (num1 > num2) {
      document.writeln("The larger number is: " + num1);
    } else if (num2 > num1) {
      document.writeln("The larger number is: " + num2);
    } else {
      document.writeln("Both numbers are equal.");
    }


    // //////// Positive, Negative or Zero
    document.writeln(
       `
       <h1>Number is Positive, Negative or Zero</h1>
      `
  )

     var num = parseFloat(prompt("Enter a number:"));

    if (num > 0) {
      document.writeln("The number is positive.");
    } else if (num < 0) {
      document.writeln("The number is negative.");
    } else {
      document.writeln("The number is zero.");
    }

  
    /////////  Alphabets
     document.writeln(
       `
       <h1> Vowel Number </h1>
      `
  )
    var Alphabets = prompt("Enter a single character:");
      Alphabets = Alphabets.toLowerCase();

    if(Alphabets.length === 1){ 
    var isVowel = (Alphabets == "a" || Alphabets == "e" || Alphabets == "i" || Alphabets == "o" || Alphabets == "u")
    document.writeln("It is a vowel? " + isVowel);
} else{     document.writeln("Please enter only one character.");  }


   ///// Password Checker
  document.writeln(
       `
       <h1> Password Checker </h1>
      `
  )
      var correctPswd = "Abiha4";
      var userPswd = prompt("Enter your password:");

    if (!userPswd) {
      document.writeln("Please enter your password");
    } else if (userPswd === correctPswd) {
      document.writeln("Correct! The password you entered matches the original password. 😀😁😜😏");
    } else {
      document.writeln("Incorrect password. 😞🤔");
    }

    // ///////   greeting
     document.writeln(
       `
       <h1> Greeting </h1>
      `
  )
   var greeting;
   var hour = 13;

   if (hour < 18) {
     greeting = "Good day";
   } else {
     greeting = "Good evening";
   }

   document.writeln(greeting); 

      ///////// Time Greeting
          document.writeln(
       `
       <h1> Time Greeting </h1>
      `
  )
   var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

    if (time >= 0 && time < 1200) {
      document.writeln("Good morning!");
    } else if (time >= 1200 && time < 1700) {
      document.writeln("Good afternoon!");
    } else if (time >= 1700 && time < 2100) {
      document.writeln("Good evening!");
    } else if (time >= 2100 && time <= 2359) {
      document.writeln("Good night!");
    } else {
      document.writeln("Invalid time entered. Please enter a value between 0000 and 2359.");
    }
 
  /////////   Qualifications
       document.writeln(
       `
       <h1> Qualifications: </h1>
      `
  )
    var Name = [];

    var Name1 = new Array();

    var stringArray = ["Maheen", "Yamna", "Abiha"];

    var numbersArray = [5, 10, 15, 20];

    var booleanArray = [true, false, true];

    var mixedArray = ["Hi", 123, true, null, undefined, 3.14];

    var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

    for (var i = 0; i < qualification.length; i++) {
      document.writeln((i + 1) + ") " + qualification[i] + "<br>");
    }


    ///////////  Student Scores and Percentages
             document.writeln(
       `
         <h1 class="color"> Student Scores and Percentages  </h1>
      `
  )
    var studentNames = ["Michael", "John", "Tony"];
    var studentScores = [320, 230, 480];
    var totalMarks = 500;

    for (var i = 0; i < studentNames.length; i++) {
      var percentage = (studentScores[i] / totalMarks) * 100;
      document.writeln("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%<br>");
    }

    ////////////   Student Scores and Percentages 
             document.writeln(
       `
         <h1 class="color"> Student Scores and Percentages  </h1>
      `
  )
    var studentName = ["Michael", "John", "Tony"];
    var Score = [320, 230, 480];
    var totalMarks = 500;

    for (var i = 0; i < studentName.length; i++) {
      var percentage = (Score[i] / totalMarks) * 100;
      document.writeln("Score of " + studentName[i] + " is " + Score[i] + ". Percentage: " + percentage + "%<br>");
    }

    ///////// Color Array Operations
               document.writeln(
       `
         <h1 class="color"> Color Array Operations </h1>
      `
  )
    var colors = ["Pink", "Red", "Blue"];
    document.writeln("Original colors: " + colors.join(", ") + "<br><br>");

    var addbeginning = prompt("Enter a color to add to the start:");
    colors.unshift(addbeginning);
    document.writeln("After add to beginning: " + colors.join(", ") + "<br><br>");

    var addend = prompt("Enter a color to add to the end:");
    colors.push(addend);
    document.writeln("After add to end: " + colors.join(", ") + "<br><br>");

    colors.unshift("Green", "Yellow");
    document.writeln("After adding 2 colors to beginning: " + colors.join(", ") + "<br><br>");

      colors.shift();
    document.writeln("After deleting first color: " + colors.join(", ") + "<br><br>");

    colors.pop();
    document.writeln("After deleting last color: " + colors.join(", ") + "<br><br>");

    var indexadd = prompt("At which index do you want to add a color?");
    var coloradd = prompt("Enter the color name to add:");
    colors.splice(indexadd, 0, coloradd);
    document.writeln("After adding color at index " + indexadd + ": " + colors.join(", ") + "<br><br>");

    var delIndex = prompt("At which index do you want to delete color(s)?");
    var delCount = prompt("How many colors do you want to delete?");
    colors.splice(delIndex, delCount);
    document.writeln("After delete from index " + delIndex + ": " + colors.join(", ") + "<br><br>");
 
   
    /////////////  Student Scores Sorting
       document.writeln(
       `
         <h1 class="color"> Student Scores Sorting </h1>
      `
  )
     var scores = [320, 230, 480, 120];
    document.writeln("Scores of Students: " + scores.join(", ") + "<br>");

    scores.sort(function(a, b) {
      return a - b;
    });

    document.writeln("Ordered Scores of Students: " + scores.join(", "));


    //////  City Selection from Array
       document.writeln(
       `
         <h1 class="color"> City Selection from Array </h1>
      `
  )
    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    document.writeln("Cities list:<br>" + cities.join(", ") + "<br><br>");

    var selectedCities = cities.slice(2, 4);
    document.writeln("Selected cities list:<br>" + selectedCities.join(", "));

    ////////////// Join Words
     document.writeln(
       `
         <h1 class="color"> Join Words </h1>
      `
  )
    var arr = ["This", " is", " my", " cat"];
    var result = arr.join("");
    document.writeln("Array:<br>" + arr + "<br><br>");
    document.writeln("String:<br>" + result);


    ////////////  Fifo Array

        document.writeln(
       `
         <h1 class="color"> Fifo Array </h1>
      `
  )
    var fifoArray = [];

    fifoArray.push("Devices: " + "<br>" + "keyboard,mouse,printer,monitor");
    fifoArray.push("<br>" +  "Out:" + "<br>" + "keyboard");
    fifoArray.push("<br>" +  "Out:" + "<br>" + "mouse");
    fifoArray.push("<br>" +  "Out:" + "<br>" + "printer");
    fifoArray.push("<br>" +  "Out:" +" <br>" + "monitor");
    
    document.writeln(fifoArray.shift()); 
    document.writeln(fifoArray.shift()); 
    document.writeln(fifoArray.shift()); 
    document.writeln(fifoArray.shift());
    document.writeln(fifoArray.shift());
    
  
///////////////     Lifo Array

       document.writeln(
       `
         <h1 class="color"> Lifo Array </h1>
      `
  )
    var lifoArray = [];
    
    lifoArray.push("<br>" +  "Out:" + "<br>" + "keyboard");
    lifoArray.push("<br>" +  "Out:" + "<br>" + "mouse");
    lifoArray.push("<br>" +  "Out:" + "<br>" + "printer");
    lifoArray.push("<br>" +  "Out:" +" <br>" + "monitor");
    
    lifoArray.push("Devices: " + "<br>" + "keyboard,mouse,printer,monitor");

    document.writeln(lifoArray.pop()); 
    document.writeln(lifoArray.pop()); 
    document.writeln(lifoArray.pop()); 
    document.writeln(lifoArray.pop());
    document.writeln(lifoArray.pop());
  
        
    ///////////  Manufacturers Dropdown
            document.writeln(
       `
         <h1 class="color"> Manufacturers Dropdown </h1>
      `
  )
     var manufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

  document.writeln("<select>");

  for (var i = 0; i < manufacturer.length; i++) {
    document.writeln("<option>" + manufacturer[i] + "</option>");
  }

  document.writeln("</select>");


   //////   multiArray
   var  multiArray = [];
   var multiArray = [[], [], []];

     //////  matrix
       document.writeln(
    `
  <h1 class="color"> Matrix </h1>

    `
  )

 var matrix = ["0 1 2 3" ,"1 0 1 2","2 1 0 1"] ;

 for (var i = 0; i < matrix.length; i++) {

  document.writeln(`<h1> ${matrix[i]} </h1>`)

}


    /////////////  counting 1-10
    document.writeln(
    `
  <h1 class="color"> Counting 1-10 </h1>

    `
  )
    for (var i = 1; i <= 10; i++) {
   document.writeln(i + "<br>");
}

   //// Multiplication Table
  document.writeln(
    `
  <h1 class="color"> Multiplication Table</h1>

    `
  )
     var tableNumber = +prompt("Enter the Number to show its multiplication table:");
     var tableLength = +prompt("Enter length multiplication table:");

    document.writeln("<h4>Multiplication table of " + tableNumber + " Length " + tableLength + "</h4>");

    for (var i = 1; i <= tableLength; i++) {
    document.writeln(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
  }
 
  ////////////  fruits
    document.writeln(
    `
  <h1 class="color"> fruits </h1>

    `
  )

   var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

   ///// Print each fruit
   for (var i = 0; i < fruits.length; i++) {
      document.writeln(fruits[i] + "<br>");
}

   ////// Print index with fruit
   for (var i = 0; i < fruits.length; i++) {
     document.writeln("Element at index " + i + " is " + fruits[i] + "<br>");
}
    

       //////////  Counting
         document.writeln(
       `
         <h1 class="color1"> Counting: </h1>
      `
  )
       for (var i = 1; i <= 15; i++) {
      document.writeln(i + ", ");
}

    /////////// Reverse Counting
        document.writeln(
       `
         <h1 class="color1"> Reverse Counting: </h1>
      `
  )
   for (var i = 10; i >= 1; i--) {
   document.writeln(i + ", ");
}

     ////////// Even Numbers
             document.writeln(
       `
         <h1 class="color1"> Even: </h1>
      `
  )
   for (var i = 0; i <= 20; i += 2) {
   document.writeln(i + ", ");
}
 
////////////// Odd number
             document.writeln(
       `
         <h1 class="color1"> Odd: </h1>
      `
  )
   for (var i = 1; i < 20; i += 2) {
   document.writeln(i + ", ");
}

////////////  Series 
            document.writeln(
       `
         <h1 class="color1"> Series: </h1>
      `
  )
    for (var i = 2; i <= 20; i += 2) {
    document.writeln(i + "k, ");
}


        /////// Bakery
    var A = ["cake", "pastry", "cookie", "chips", "patties"];
    var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
    var found = false;

    for (let i = 0; i < A.length; i++) {
      if (A[i] === userInput) {
        found = true;
         alert(userInput + " is available at index " + i + " in our bakery.");
       break;
   }
 }

  if (!found) {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
  }

  // // largest number
     document.writeln(
       `
         <h1 class="color1"> Largest Number: </h1>
      `
  )
  var A = [24, 53, 78, 91, 12];
  var large = A[0]; 

  for (var i = 1; i < A.length; i++) {
  if(A[i] > large){  
       large = A[i]
  }

}
      document.writeln("Array items: " + A + "<br>");
      document.writeln("The largest number is " + large);



       // // smallest number
      document.writeln(
       `
         <h1 class="color1"> smallest Number: </h1>
      `
  )
     var A = [24, 53, 78, 91, 12];
     var small = A[0]; 

     for (var i = 1; i < A.length; i++) {
     if(A[i] < small){  
       small = A[i]
  }

}
      document.writeln("Array items: " + A + "<br>");
      document.writeln("The smallest number is " + small);


     //////////////    print  multiples Counting
          document.writeln(
       `
         <h1 class="color1">  print  multiples Counting: </h1>
      `
  )
     for(var i = 5; i <= 100; i+= 5){  
     document.writeln(i + ",")  
}


    // /////  END
           document.writeln(
       `
         <p class="center"> <small> <a href="https://app.netlify.com/teams/maheensohailh/projects" target="_blank">MAHEEN SOHAIL:</a> </small></p>
      `
  )
    var End = "''-----!🎶💱END💱🎶!-----''";
    alert(End);
    document.writeln(End);