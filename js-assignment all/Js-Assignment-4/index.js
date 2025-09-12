// /////////////  Slider start

var images = [
    "cake1.webp",
   "cake2.webp",
   "cake3.webp",
   "cake4.webp",
   "cake5.webp",
   "cake6.webp",
   "cake7.webp",
   "cake8.webp",
   "cake9.webp",
   "cake10.webp"

];


var currentImg = document.getElementById("Image");
var currentIndex = 0;


function next() {
  currentImg.src = images[2]

  if (currentIndex === images.length - 1) {
    currentIndex = 0;
    currentImg.src = images[currentIndex]
  } else {

    currentIndex++;
    currentImg.src = images[currentIndex]

  }

}

function prev() {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
    currentImg.src = images[currentIndex]
  } else {

    currentIndex--;
    currentImg.src = images[currentIndex]

  }

}



// ///////////////////  Slider end
