let count = document.querySelector('[data-toggle="counter-up"]');
console.log(count);
$(function () {
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });
});
