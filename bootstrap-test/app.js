$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

// Set the date we're counting down to
var countDownDate = new Date("Oct 24, 2021 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var years=Math.floor((distance / (1000 * 60 * 60 * 24 * 365)));
  var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365)/(1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = years + "y " + days + "d " + hours + "h "
  + minutes + "m " ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Time to vote!";
  }
}, 1000);

// $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));

//   for (var i=0;i<4;i++) {
//     next=next.next();
//     if (!next.length) {
//       next=$(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
//   }
// });
