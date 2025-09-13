// /////////////////   Funcation 

// ////////////// Q : 1 METHODS
document.writeln(`
     <h1 class="brown"> Function Methods </h1> 
    `)
function showDate() {
    var now = new Date();
    document.writeln("<h1> Date and Time : </h1>")
    document.writeln(now.toString());
}
showDate();

// // ///////////// Q : 2
function userName(firstName, lastName) {
    var firstName = prompt("Enter your first name: ");
    var lastName = prompt("Enter your last name: ");
    alert("Hello, " + firstName + " " + lastName + "!");
}
userName( );

// // /////// Q : 3
function addNumber() {
    var num1 = +prompt("Enter first number:");
    var num2 = +prompt("Enter second number:");
    alert("Sum: " + (num1 + num2));
}
addNumber();

// // ///////////  Q : 4
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return "Invalid operator";
     
    }
}
alert("Addition 5 + 3 = " + (calculator (5, 3, '+')));
alert("Subtraction 5 - 3 = " + (calculator (5, 3, '-')));
alert("Multiplication 5 * 3 = " + (calculator (5, 3, '*')));
alert("Division  5 / 3 = " + (calculator (5, 3, '/')));

// // ////////// Q : 5
function square(num) {
    return num * num;
}
alert("Multiplication : " + (square(5)));

// //////// Q : 6
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
alert(factorial(4));

// // /////////// Q : 7
function Counting(start, end) {
    var output = "";
    for (var i = start; i <= end; i++) {
        output += i + " ";
    }
    document.writeln("<h1> Counting from " + start + " to " + end + ":  </h1> " + "<br>" + output.trim());
}

var startInput = prompt("Enter the starting number:");
var endInput = prompt("Enter the ending number:");

var start = parseInt(startInput);
var end = parseInt(endInput);

if (!isNaN(start) && !isNaN(end)) {
    Counting(start, end);
} else {
    alert("Please enter valid numbers.");
}   

// ///////// Q : 8
function hypotenuse(base, perpendicular) {
    function square(num) {
        return num * num;
    }

    var hypotenuse = Math.sqrt(square(base) + square(perpendicular));
    return hypotenuse;
}
var base = +prompt("Enter base of triangle:");
var perpendicular = +prompt("Enter perpendicular of triangle:");
alert("Hypotenuse is: " + hypotenuse(base, perpendicular));

// // //////////////// Q : 9
function calculateArea(width, height) {
    return width * height;
}

var area1 = calculateArea(5, 10);
document.writeln( "<h4>Function that calculates the area of a rectangle </h4>" + "Area (values passed): " + area1 + "<br>");

var w = 7;
var h = 4;
var area2 = calculateArea(w, h);
document.writeln("Area (variables passed): " + area2);

// // ////////// Q : 10
function Palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}

var word = prompt("Enter a word to check palindrome:");
if (Palindrome(word)) {
    alert(word + " is a palindrome!");
} else {
    alert(word + " is NOT a palindrome!");
}

// // ////////// Q : 11
function capitaliz(str) {
    return str
        .split(" ")                        
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  
        .join(" ");                         
}

var example = "the quick brown fox";
var result = capitaliz(example);

document.writeln( "<h1> First letter capital : </h1> " +  "EXAMPLE STRING : " +  example + (" <br> EXPECTED OUTPUT : " + result));

// // //////////////// Q : 12
function findLongestWord(str) {
    var words = str.split(" ");   
    var longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

var example = "Web Development Tutorial";
var result = findLongestWord(example);

document.writeln("<h1> Longest word : </h1> " + ("EXAMPLE STRING : " + example)   + ("<br> EXAMPLE OUTPUT : " + result));

// // ////////////// Q : 13
function countLetter(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    return count;
}

var result = countLetter(" JSResourceS.com", "o");

document.writeln("<h1> Two arguments : </h1> Occurrences of 'o': " + result);


// // ////////////////// Q : 14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.writeln("<h1> The Geometrizer : </h1>" + "The circumference is " + circumference.toFixed(2));
    alert("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.writeln("<br> The area is " + area.toFixed(2));
    alert("The area is " + area.toFixed(2));
}

var r = +prompt("Enter the radius of the circle:");
calcCircumference(r);
calcArea(r);


// // ///////////////////////  FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS
document.writeln(`
     <h1 class="brown">Function, Switch Statement, While… do-While Loops </h1> 
    `)

// // //////////////////// Q : 1
function power(a, b) {
    return Math.pow(a, b); 
}
document.writeln("<h1>Function power :</h1> Function power : " + power(2, 4));

// // /////////////// Q : 2
function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
document.writeln("<h1> Leap year : </h1> Leap year is : " + LeapYear (2024)); 
document.writeln("<br>  NOT a leap year : " + LeapYear(2011)); 


// // //////////////////// Q : 3
function calcS(a, b, c) {
    return (a + b + c) / 2;
}
function calcArea(a, b, c) {
    var s = calcS(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
document.writeln("<h1>  Area of triangle : </h1> " + (" a, b, and c, then area of triangle is given by = ") + calcArea(3, 4, 5));


// // ///////////// Q : 4
function average(marks) {
    var sum = marks.reduce((a, b) => a + b, 0);
    return sum / marks.length;
}

function percentage(marks) {
    var total = marks.reduce((a, b) => a + b, 0);
    return (total / (marks.length * 100)) * 100; 
}

function mainFunction(m1, m2, m3) {
    var marks = [m1, m2, m3];
   document.writeln("<h1>Receives marks :</h1>  Average: ", average(marks));
   document.writeln("<br> Percentage: ", percentage(marks) + "%");
}

mainFunction(85, 90, 80);


// // //////////////// Q : 5
function indexOf(str, char) {
    for( var i = 0; i < str.length; i++) {
        if(str[i] === char){
          return i;
        }
    }

     return -1;

}
document.writeln("<h1> indexOf world : </h1> indexOf : " + indexOf("world", "o"));
document.writeln("<br> indexOf : " + indexOf("world", "a"));

// // /////////////// Q : 6
function vowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
document.writeln("<h1> Delete all vowels :</h1> Write a function to delete all vowels from a sentence = " + vowels("Write a function to delete all vowels from a sentence"));
document.writeln("<br> Hello World = " + vowels("Hello World"));


// // ////////////// Q : 7
function successionVowels(text) {
    var count = 0;
    var vowels = "aeiouAEIOU";

    for (var i = 0; i < text.length - 1; i++) {
        var pair  = text[i] + text[i + 1];
        switch (true) {
            case (vowels.includes(text[i]) && vowels.includes(text[i + 1])):
                count++;
                break;
        }
    }
    return count;
}

document.writeln("<h1> Two vowel 'ea','ui','ao' : </h1>")
document.writeln("Pleases read, me gratuity : " + successionVowels("Pleases read,me gratuity"));


// // /////////// Q : 8
function meters(km) {
    return km * 1000;
}

function feet(km) {
    return km * 3280.84;
}

function inches(km) {
    return km * 39370.1;
}

function centimeters(km) {
    return km * 100000;
}

function answer() {
    var km = parseFloat(prompt("Enter distance in kilometers: "));
    
    document.writeln("<h1>Two cities (in km.) distance between : </h1>")
    document.writeln(`${km}  km is equal to: <br>`);
    document.writeln(`${meters(km)}   meters <br>`);
    document.writeln(`${feet(km)}   feet <br>`);
    document.writeln(`${inches(km)}   inches <br>`);
    document.writeln(`${centimeters(km)}   centimeters`);
}

answer();


// // ////////////////  Q : 9
function timeCalculate(workHours) {
    var overTime = workHours - 40;
    if (overTime > 0) {
        return overTime * 12;
    } else {
        return 0;
    }
}
document.writeln("<h1>  Calculate overtime pay of employees :</h1>")
document.writeln("Overtime Pay: ", timeCalculate(45)); 
document.writeln("<br> Overtime Pay: ", timeCalculate(40));


// // ///////////////// Q : 10
function currencyNotes(amount) {
    var notes100 = Math.floor(amount / 100);
    amount = amount % 100;

    var notes50 = Math.floor(amount / 50);
    amount = amount % 50;

    var notes10 = Math.floor(amount / 10);

    document.writeln("<h1>Withdrawn : </h1>")
       return `You will have ${notes100} hundred notes, ${notes50} fifty notes, ${notes10} ten notes.`;
}

function main() {
    var amount = parseInt(prompt("Enter amount to withdraw (in hundreds): "));
    document.writeln(currencyNotes(amount));
}

main();


// //////////////// chapter 43-48  EVENTS ///////////
// //////////////////// Q : 1
  function showAlert() {
      alert("Hello! You clicked the link.")
    }

// ////////////// Q : 2
function showPhone(name) {
      alert("Thanks for purchasing " + name + "!");
    }

// /////////  Q : 3
      var students = [
      { name: "Ali", roll: "201" },
      { name: "Sara", roll: "202" },
      { name: "Ahmed", roll: "203" },
      { name: "Maheen", roll: "204" },
      { name: "Umar", roll: "205" },
      { name: "Abiha", roll: "206" },
      { name: "Hashir", roll: "207" },
      { name: "Yamna", roll: "208" },
      { name: "Ebad", roll: "209" },
      { name: "Ayesha", roll: "210" }
    ];

    var tbody = document.querySelector("#Table tbody");

    function renderTable() {
      tbody.innerHTML = "";
      students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${student.name}</td>
          <td>${student.roll}</td>
          <td><button onclick="deleteRow(${index})">Delete</button></td>
        `;

        tbody.appendChild(row);
      });
    }

    function deleteRow(i) {
      students.splice(i, 1); 
      renderTable(); 
    }

    renderTable();

// /////////  Q : 4
 function changeImage() {
      document.getElementById("myImage").src =
        "./shirt1.Webp";
    }

    function resetImage() {
      document.getElementById("myImage").src =
        "./shirt.Webp";
    }

     function change() {
      document.getElementById("myImage2").src =
        "./shirt3.Webp";
    }

    function reset() {
      document.getElementById("myImage2").src =
        "./shirt2.Webp";
    }
    

    // //////////////// Q : 5
        var count = 0;

    function update() {
      document.getElementById("counter").textContent = count;
    }

    function increase() {
      count++;
      update();
    }

    function decrease() {
      count--;
      update();
    }


// ///////////////////// Event ///////// 
    
///////////////////// Q : 1

      var form = document.getElementById('signup');
    var resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      var firstName = document.getElementById('firstName').value;
      var lastName = document.getElementById('lastName').value;
      var email = document.getElementById('email').value;

      resultDiv.innerHTML = `
        <h3>Submitted Data</h3>
        <p><strong>First Name: </strong> ${firstName}</p>
        <p><strong>Last Name: </strong> ${lastName}</p>
        <p><strong>Email: </strong> ${email}</p>
      `;

      form.reset();
    });

//////////////////// Q : 2
function readMore (){
  var fullPara = `
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid numquam hic quidem optio ducimus 
  similique dolorem, explicabo temporibus fugit autem voluptas eum quis natus dolorum sequi mollitia
   eligendi ad enim laborum ipsum modi facere minus distinctio. Alias laborum a nostrum facilis 
   laboriosam culpa corrupti at ad impedit soluta. Iste velit voluptatibus suscipit impedit temporibus 
   totam perspiciatis, possimus nesciunt in. Non harum nihil dicta veritatis mollitia voluptatibus quas
    consequuntur similique, atque unde, tenetur quis nam corrupti sed quos, obcaecati ea. Nisi 
    reprehenderit debitis velit earum sapiente odit porro voluptates ratione, deleniti, aperiam quasi 
    quas voluptate dolores repudiandae neque doloribus ab animi?

  <a href="JavaScript:void(0)" onclick="readLess()">Read less</a>

  `
var para = document.getElementById("para");
para.innerHTML = fullPara;

}

function readLess(){
  var half = `
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid numquam hic quidem optio ducimus similique dolorem, explicabo temporibus fugit autem voluptas
  <a href="JavaScript:void(0)" onclick="readMore()">Read more...</a>
  `
  var para = document.getElementById("para");
  para.innerHTML = half;

}

// ////////////////   Q : 3
   var studentForm = document.getElementById('studentForm');
    var studentTable = document.getElementById('studentTable').querySelector('tbody');
    var editSection = document.getElementById('editSection');
    var editForm = document.getElementById('editForm');

    let editRow = null;

    studentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      var name = document.getElementById('name').value;
      var age = document.getElementById('age').value;
      var grade = document.getElementById('grade').value;

      addRow(name, age, grade);
      studentForm.reset();
    });

    function addRow(name, age, grade) {
      var row = studentTable.insertRow();
      row.insertCell(0).textContent = name;
      row.insertCell(1).textContent = age;
      row.insertCell(2).textContent = grade;

      var actionsCell = row.insertCell(3);
      var editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';

      var delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';

      actionsCell.appendChild(editBtn);
      actionsCell.appendChild(delBtn);

      delBtn.addEventListener('click', () => {
        row.remove();
      });

      editBtn.addEventListener('click', () => {
        editRow = row;
        document.getElementById('editName').value = row.cells[0].textContent;
        document.getElementById('editAge').value = row.cells[1].textContent;
        document.getElementById('editGrade').value = row.cells[2].textContent;
        editSection.classList.remove('hidden');
      });
    }

    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (editRow) {
        editRow.cells[0].textContent = document.getElementById('editName').value;
        editRow.cells[1].textContent = document.getElementById('editAge').value;
        editRow.cells[2].textContent = document.getElementById('editGrade').value;
        editSection.classList.add('hidden');
        editRow = null;
      }
    });



    //////// copy text

function textCopy() {
      var text = document.getElementById("text").innerText;

      navigator.clipboard.writeText(text).then(() => {
        alert("Text copied!");
      })
 }


 /////  coyp Assignment /////// 

//////// copy text

function textCopy() {
      var text = document.getElementById("text1").innerText;

      navigator.clipboard.writeText(text).then(() => {
        alert("Text copied!");
      })
 }


 ///////////// show and hide list

 var isListVisible = false; 

    function showList() {
      var container = document.getElementById("list");

      if (!isListVisible) {
        
        var ol = document.createElement("ol");
        
        var items = ["Mango", "Banana", "Apple", "Orange", "Kiwi", "Cherry", "Lemon", "Peach", "Pomegranate", "Blueberry"];

        items.forEach(text => {
          var li = document.createElement("li");
          li.innerText = text;
          ol.appendChild(li);
        });

        container.appendChild(ol);
        isListVisible = true;
      } else {
       
        container.innerHTML = "";
        isListVisible = false;
      }
    }