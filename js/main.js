$(document).ready(function () {
  "use strict";
  $(".animation-img").removeClass("zoomIn").addClass("hidden");
  $(".featured-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      $(".shuffle-imgs .col-md").css("opacity", 1);
    } else {
      $(".shuffle-imgs .col-md").css("opacity", ".08");
      $($(this).data("class")).parent().css("opacity", 1);
    }
  });
  $("[data-toggle='counter-up']").counterUp({
    delay: 10,
    time: 2000,
  });
  let endAbout = $(".about").offset().top + $(".about").height() + 200;
  let startAbout = $(".about").offset().top - 500;
  $(window).on("scroll", function () {
    let win = $(window).scrollTop();
    //main-head animation
    if (win >= $(".main-head").offset().top - 400) {
      $(".main-head").addClass("fadeInUp").removeClass("hidden");
    }
    else {
      $(".main-head").removeClass("fadeInUp").addClass("hidden");
    }
    if (win >= $(".team .main-head").offset().top - 400) {
      $(".team .main-head").addClass("fadeInUp").removeClass("hidden");
    }
    else {
      $(".team .main-head").removeClass("fadeInUp").addClass("hidden");
    }
    if (win >= $(".services .main-head").offset().top - 400) {
      $(".services .main-head").addClass("fadeInUp");
    }
     else {
      $(".services .main-head").removeClass("fadeInUp").addClass("hidden");
    }
    // about animation
    if (win >= startAbout) {
      $(".animation-img").addClass("zoomIn");
      $(".img1").addClass("delay1");
      $(".img2").addClass("delay2");
      $(".img3").addClass("delay3");
      $(".img4").addClass("delay4");
    }
    if (win < startAbout - 400) {
      $(".animation-img").removeClass("zoomIn").addClass("hidden");
    }
    // room animation
    if (win >= $(".room").offset().top - 200) {
      $(".card-item1").addClass("fadeInUp");
      $(".card-item2").addClass("delay1").addClass("fadeInUp");
      $(".card-item3").addClass("delay2").addClass("fadeInUp");
    }
    if (win < $(".room").offset().top - 650) {
      $(".card-item").addClass("hidden");
      $(".card-item").removeClass("fadeInUp");
    }
    // video animation
    if (win >= $(".video").offset().top - 400) {
      $(".video").addClass("show");
      $(".video").removeClass("hidden");
    } else {
      $(".video").removeClass("show").addClass("hidden");
    }
    // services animation
    if (win >= $(".services").offset().top - 200) {
      $(".upanimate").addClass("fadeInUp").addClass("delay-animation");
    } else {
      $(".upanimate").removeClass("fadeInUp");
      $(".upanimate").addClass("hidden");
    }
    if (win >= $(".team").offset().top - 200) {
      $(".img-animation").addClass("fadeInUp").addClass("delay-animation");
    } else {
      $(".img-animation").removeClass("fadeInUp");
      $(".img-animation").addClass("hidden");
    }
  });
});
