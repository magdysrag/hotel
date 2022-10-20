$(document).ready(function () {
  "use strict";
  // Adjust Slider Height
  var winH = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();
  $(".slider, .carousel-item").height(winH - (upperH + navH));

  // Featured Work Shuffle
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
  let endAbout = $(".about").offset().top + $(".about").height() +200;
  let startAbout = $(".about").offset().top - 500;
  $(window).on("scroll", function () {
    let win = $(window).scrollTop();
    if (win >= startAbout) {
      if (win <= endAbout) {
        $(".animation-img").addClass("zoomIn");
        $(".img1").addClass("delay1");
        $(".img2").addClass("delay2");
        $(".img3").addClass("delay3");
        $(".img4").addClass("delay4");
      } else if (win > endAbout) {
        $(".animation-img").removeClass("zoomIn").addClass("hidden");
      }
    } else {
      $(".animation-img").removeClass("zoomIn").addClass("hidden");
    }
    if ($(window).scrollTop() >= $(".room").offset().top - 200) {
      $(".main-head").addClass("delay0").addClass("fadeInUp");
      $(".card-item1").addClass("fadeInUp");
      $(".card-item2").addClass("delay1").addClass("fadeInUp");
      $(".card-item3").addClass("delay2").addClass("fadeInUp");
    } else {
      $(".card-item").addClass("hidden");
      $(".main-head").addClass("hidden");
      $(".main-head").removeClass("fadeInUp");
      $(".card-item").removeClass("fadeInUp");
    }
  });
});
