var weather = prompt("Enter your seasons names.  \n1. Summer  \n2. Winter  \n3. Autumn  \n4. Spring");      

if (weather === "Summer") { 
  document.writeln(
    `
    <div class="image">
        <div class="card animate__animated animate__flip" style="width: 28rem;">
  <img src="summer.webp" class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">Summer</h5>
    <p class="card-text">Summer or summertime is the hottest and brightest of the four temperate seasons, 
    occurring after spring and before autumn.</p>
  </div>
</div>
    </div>
    `
  )
}
else if (weather === "Winter") {
  document.writeln(
    `
    <div class="image1">
    <div class="card animate__animated animate__rotateIn" style="width: 28rem;">
  <img src="winter.webp" class="card-img-top" alt="winter">
  <div class="card-body">
        <h5 class="card-title">Winter</h5>
    <p class="card-text">Winter is the coldest and darkest season of the year in temperate and polar climates.
     It occurs after autumn and before spring. </p>
  </div>
</div>
    </div>
    `
  )
}

else if(weather === "Autumn"){
document.writeln(
    `
    <div class="image2">
     <div class="card animate__animated animate__rollIn" style="width: 28rem;">
  <img src="autumn.webp" class="card-img-top" alt="...">
  <div class="card-body">
   <h5 class="card-title">Autumn</h5>
    <p class="card-text">Autumn, also known as fall (in US and Canada) or
     harvesttime, is one of the four temperate seasons on Earth. </p>
  </div>
</div>
    </div>

  `
)
}
else if (weather === "Spring") {
  document.writeln(
    `
    <div class="image3"> 
    <div class="card animate__animated animate__wobble" style="width: 28rem;">
  <img src="spring.webp" class="card-img-top" alt="...">
  <div class="card-body">
   <h5 class="card-title">Spring</h5>
    <p class="card-text"> Spring, also known as springtime, is one of 
    the four temperate seasons, succeeding winter and preceding summer.</p>
  </div>
</div>

    </div>
  ` 
  )
}

else{
     document.writeln(
    `
    <div class="wrong text-primary">
     <h1 class="fw-bold"> Oops! Something Went Wrong! </h1>
    </div>

    `
 )
}
