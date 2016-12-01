/* ============================================================

                                      HOME DATE FUNCTION
============================================================ */
// Get today's date and display it to the #today html element
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var today = document.getElementById("today"); 

var d = new Date();
today.innerHTML = monthNames[d.getMonth()] + " " + d.getDate();

/* ============================================================

                                      TRANSITIONS
============================================================ */
var flightDraw = document.getElementById('flightDraw');

/* ============================================================

                                      TOUCH HANDLER
============================================================ */
// DOM elements
var shapes = document.getElementsByClassName("shape");
var sounds = document.getElementsByClassName("sound");
var titles = document.getElementsByClassName("title");
var home = document.getElementById("home");

// Variables
var _lastUpdate;
var _activeShape = false;

$('#flights').bind('touchstart', function(e) {
  e.preventDefault();
  _lastUpdate = Date.now();

  $('.distance').addClass('animateDistance'); 
  $('.sleep').addClass('animateSleep'); 
  $('.steps').addClass('animateSteps'); 
  $('.bottom-bar').addClass('animateToday');
  $('.title').addClass('animateTitle');

  divMouseDown = setTimeout(function() {
    _activeShape = true; 
  }, 600);
}); 

$('.home-section').bind('touchmove', function(e) {
  if (_activeShape) {
    $('#flights').addClass('activeShape');
    $("#flights").css({
      "top": e.pageY - 75 + "px",
      "left": e.pageX - 75 + "px",
    })
  }
})

$('#flights').bind('touchend', function() {
  _activeShape = false;
  $('.distance').removeClass('animateDistance'); 
  $('.sleep').removeClass('animateSleep'); 
  $('.steps').removeClass('animateSteps'); 
  $('.bottom-bar').removeClass('animateToday');
  $('.title').removeClass('animateTitle');
  $('#flights').removeClass('activeShape');
  $("#flights").css({
    "top": 130 + "px",
    "left": 40 + "px",
  })
  clearTimeout(divMouseDown);
})

























