/* ============================================================

                                      Touch event handlers for mobile
============================================================ */
var homeArea = document.getElementById("home");
var canvas = document.getElementById("flights-draw-area"); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 
var ctx = canvas.getContext("2d"); 

_startTime = _lastTime = performance.now();
animate();
function animate(currentTime) {
  requestAnimationFrame(animate); 
  ctx 
}

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

  _currentTool: document.getElementById('flightShape'),
  _toolX: 100, 
  _toolY: 100,
  _drawDelay: false,
  _activeShape: false,

  initialize: function() {
    this.bindEvents(); 
  }, 

  bindEvents: function() {
    canvas.addEventListener('touchstart', this.onTouchStart.bind(this), false); 
    home.addEventListener('touchmove', this.onTouchMove.bind(this), false); 
    canvas.addEventListener('touchend', this.onTouchEnd.bind(this), false); 
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

    // Draw Image
    if(_activeShape) {
      ctx.beginPath(); 
      ctx.drawImage(this._currentTool, event.pageX - this._toolX/2, event.pageY - this._toolY/2, this._toolX, this._toolY);
      ctx.closePath(); 
      ctx.fill();
    }
    
  }, 

  onTouchEnd: function(event) {
  },

  onTouchTap: function(event) {
    // Draw Image
    ctx.beginPath(); 
    ctx.drawImage(this._currentTool, event.pageX - this._toolX/2, event.pageY - this._toolY/2, this._toolX, this._toolY);
    ctx.closePath(); 
    ctx.fill();
  }
}



/* ============================================================

                                      Touch event handlers for browser
============================================================ */
var WebTouchEventHandlers = {
  _touch: false,
  _quickTap: false,
  _lastUpdate: undefined,

  _startX: 0,
  _startY: 0,

  _lastX: 0,
  _lastY: 0,

  _distanceX: 0,
  _distanceY: 0,

  _currentTool: document.getElementById('flights'),
  _toolX: 145, 
  _toolY: 145,
  _drawDelay: false,

  initialize: function() {
    this.bindEvents(); 
  }, 

  bindEvents: function() {
    canvas.addEventListener('mousedown', this.onTouchStart.bind(this), false); 
    canvas.addEventListener('mousemove', this.onTouchMove.bind(this), false); 
  },

  onTouchStart: function(event) {
    console.log(event);
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

    // Draw Image
    ctx.beginPath(); 
    ctx.drawImage(this._currentTool, event.pageX - this._toolX/2, event.pageY - this._toolY/2, this._toolX, this._toolY);
    ctx.closePath(); 
    ctx.fill();
  }, 
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  TouchEventHandlers.initialize();
} else {
  WebTouchEventHandlers.initialize();
}














































