// google map

// Initialize and add the map
function initMap()
{
  // The location of lahore
  var lahore = {lat: 31.582045, lng: 74.329376};
  // The map, centered at lahore
  var map = new google.maps.Map(document.querySelector('.map'), {zoom: 4, center: lahore});
  // The marker, positioned at lahore
  var marker = new google.maps.Marker({position: lahore, map: map});
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 65) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling

// Brad's Code:-
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 80
      },
      800
    );
  }
});

// W3School's code:-
// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("#navbar a, .btn").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });