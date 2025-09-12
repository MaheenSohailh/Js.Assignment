// /////////////  Slider start

var images = [
   "/Js-Assignment-4/cake1.webp",
   "/Js-Assignment-4/cake2.webp",
   "/Js-Assignment-4/cake3.webp",
   "/Js-Assignment-4/cake4.webp",
   "/Js-Assignment-4/cake5.webp",
   "/Js-Assignment-4/cake6.webp",
   "/Js-Assignment-4/cake7.webp",
   "/Js-Assignment-4/cake8.webp",
   "/Js-Assignment-4/cake9.webp",
   "/Js-Assignment-4/cake10.webp"

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