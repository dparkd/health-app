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

                                      Touch event handlers
============================================================ */
var canvas = document.getElementById("draw-area"); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 
var ctx = canvas.getContext("2d")

var TouchEventHandlers = {
  _touch: false,
  _quickTap: false,
  _lastUpdate: undefined,

  _startX: 0,
  _startY: 0,

  _lastX: 0,
  _lastY: 0,

  _distanceX: 0,
  _distanceY: 0,

  _currentTool: document.getElementById('steps'),
  _toolX: 145, 
  _toolY: 145,

  initialize: function() {
    this.bindEvents(); 
  }, 

  bindEvents: function() {
    canvas.addEventListener('touchstart', this.onTouchStart.bind(this), false); 
    canvas.addEventListener('touchmove', this.onTouchMove.bind(this), false); 
    canvas.addEventListener('touchend', this.onTouchEnd.bind(this), false); 
    canvas.addEventListener('click', this.onTouchTap.bind(this), false);
  }, 

  onTouchStart: function(event) {
    this._touch = true;
    this._lastUpdate = Date.now();

    this._distanceX = 0; 
    this._distanceY = 0; 

    this._startX = event.pageX;
    this._startY = event.pageY;

    this._lastX = event.pageX; 
    this._lastY = event.pageY;

  }, 

  onTouchMove: function(event) {
    event.preventDefault();
    event.stopPropagation();
    var distanceX = Math.abs(this._lastX - event.pageX);
    var distanceY = Math.abs(this._lastY - event.pageY);

    this._distanceX += distanceX; 
    this._distanceY += distanceY;

    this._lastX = event.pageX; 
    this._lastY = event.pageY;

    // hide side bar on touch
    var sidebar = document.getElementById('side-bar');
    sidebar.className = 'side-bar hide-bar';

    // Draw Image
    ctx.beginPath(); 
    ctx.drawImage(this._currentTool, event.pageX - 50, event.pageY - 50, 145, 145);
    ctx.closePath(); 
    ctx.fill();
    console.log(this._steps);
  }, 

  onTouchEnd: function(event) {
    // show side bar on touch end
    var sidebar = document.getElementById('side-bar');
    sidebar.className = 'side-bar';
  },

  onTouchTap: function(event) {
  }
}

/* ============================================================

                                      Side Bar Logic
============================================================ */
var shapes = document.getElementsByClassName("shape"); 
var currentTool = 'shape1';

// Tool changer logic
for (var i = 0; i < shapes.length; i++) {
  shapes[i].addEventListener('click', function(e) {
    var current = document.getElementById(currentTool); 
    current.className = 'shape';
    this.className += ' active-tool';
    currentTool = this.getAttribute('id');
    var currentShape = this.getAttribute('data-img');
    var toolX = this.getAttribute('data-x'); 
    var toolY = this.getAttribute('data-y');
    TouchEventHandlers._currentTool = document.getElementById(currentShape);
    TouchEventHandlers._toolX = toolX; 
    TouchEventHandlers._toolY = toolY;
  });
}


TouchEventHandlers.initialize();




























