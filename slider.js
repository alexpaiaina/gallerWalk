sliderInt = 1
sliderNext = 2

$(document).ready(function () {
  $("#slider > Img#1").fadeIn(3000);
  startSlider();
});

function startSlider() {
  count = $("#slider > Img").size;

  loop = setInterval(function () {

    if (sliderNext > count) {
      sliderNext = 1;
      sliderInt = 1;
    }

    $("#slider > Img").fadeOut(3000);
    $("#slider > Img#" + sliderNext).fadeIn(10300);

    slideInt = sliderNext;
    sliderNext = sliderNext + 1;
    
    

  } , 9000) 
}

//Credit to Joseph Smith on youtube.  A tutorial I watched to help me utilize a slide.