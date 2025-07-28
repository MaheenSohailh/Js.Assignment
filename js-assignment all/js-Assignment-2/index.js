// //////////  forward counting

   document.writeln(
    `
  <h1> Forward Counting 1-100 </h1>

    `
  )

   for(var i = 1; i <= 100; i += 10 ){
   for(var j = i; j < i+ 10; j++){
   document.writeln(j + " ")

}
    document.writeln("<br>")
}

///////////   backward Counting
   document.writeln(
    `
  <h1>  Backward Counting 100-1 </h1>

    `
  )

   for(var i = 100; i >= 1; i -- ){
  document.writeln(i + " ")

}
  

      //// Multiplication Table
  document.writeln(
    `
  <h1 class="color"> Multiplication Table</h1>
    <h3> Table of 3: </h3>
    `
  )

   for(var i =1; i<=10; i++){
   document.writeln(`<h4> 3 X ${i} = ${3 * i} </h4>`)
}

/////// table of 7

  document.writeln(
    `
    <h3> Table of 7: </h3>
    `
  )

   for(var i =1; i<=10; i++){
   document.writeln(`<h4> 7 X ${i} = ${7 * i} </h4>`)
}

   //// Multiplication Table prompt

     var tableNumber = +prompt("Enter the Number to show its multiplication table:");
     var tableLength = +prompt("Enter length multiplication table:");

    document.writeln("<h3>Multiplication table of " + tableNumber + " Length " + tableLength + "</h3>");

    for (var i = 1; i <= tableLength; i++) {
    document.writeln(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
  }
 
///////////  plus 
 document.writeln(
    `
    <h1> Plus </h1>
    `
  )

   var num = 4;
   var num1 = 8;
   var sum =  num + num1;
   document.writeln(`<h4> 4 + 8 =  ${sum} </h4>`);

   
   var num = 12;
   var num1 = 9;
   var sum =  num + num1;
   document.writeln(`<h4> 12 + 9 =  ${sum} </h4>`);

   ////////////  minus 
    document.writeln(
    `
    <h1> Minus </h1>
    `
  )
    
   var num = 6;
   var num1 = 3;
   var sum =  num - num1;
   document.writeln(`<h4> 6 - 3 =  ${sum} </h4>`);


   var num = 25;
   var num1 = 10;
   var sum =  num - num1;
   document.writeln(`<h4> 25 - 10 =  ${sum} </h4>`);

 /////////////  Multiply 

   document.writeln(
    `
    <h1> Multiply </h1>
    `
  )
   var num = 5;
   var num1 = 4;
   var sum =  num * num1;
   document.writeln(`<h4> 5 X 4 =  ${sum} </h4>`);

    var num = 9;
   var num1 = 7;
   var sum =  num * num1;
   document.writeln(`<h4> 9 X 7 =  ${sum} </h4>`);


   ////////  Division

      document.writeln(
    `
    <h1> Division </h1>
    `
  )

   var num = 2;
   var num1 = 6;
   var sum =  num / num1;
   document.writeln(`<h4> 2 / 6 =  ${sum} </h4>`);


   var num = 7;
   var num1 = 3;
   var sum =  num / num1;
   document.writeln(`<h4> 7 / 3 =  ${sum} </h4>`);


/////////////////  plus prompt

       var plus = "13";
      var add = prompt("Kitna hota hai: 3 + 10 ?");

    if (!add) {
    } else if (add === plus) {
      alert("3 + 10 = 13");
    } else {
     alert("Incorrect Number. 😞🤔");
    }


    /////////////////  minus prompt

       var minus = "10";
      var minu = prompt("Kitna hota hai : 20 + 10 ?");

    if (!minu) {
    } else if (minu === minus) {
      alert("20 - 10 = 10");
    } else {
     alert("Incorrect Number. 😞🤔");
    }
