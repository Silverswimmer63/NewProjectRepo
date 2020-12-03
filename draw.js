var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/*
var controler = setInterval(draw, 100);
function draw() {
  var rad = Math.floor(Math.random() * 50);
  var maxX = 400 - (rad * 2);
  var maxY = 200 - (rad * 2);
  var xVal = Math.floor(Math.random() * maxX) * rad;
  var yVal = Math.floor(Math.random() * maxY) * rad;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(xVal, yVal, rad, 0, 2 * Math.PI);
  ctx.stroke();
}
*/

//setInterval(draw, 100);

function drawO() {
  var rad = Math.floor(Math.random() * 50) + 1;
  var xPos = Math.floor(Math.random() * (canvas.width - (rad * 2))) + rad;
  var yPos = Math.floor(Math.random() * (canvas.height - (rad * 2))) + rad;
  //var xPos = (Math.floor(Math.random() * 400 - (rad * 2))) + rad;
  //var yPos = (Math.floor(Math.random() * 400 - (rad * 2))) + rad;
  ctx.beginPath();
  ctx.arc(xPos, yPos, rad , 0, 2 * Math.PI);
  ctx.stroke();
}

function drawX() {
  var side = Math.floor(Math.random() * 50) + 1;
  var xCorn = Math.floor(Math.random() * (canvas.width - side));
  var yCorn = Math.floor(Math.random() * (canvas.height - side));
  ctx.beginPath();
  ctx.strokeRect(xCorn, yCorn, side, side);
  ctx.stroke();
}

/* This makes a ball bounce arround
var canvas = document.getElementById( "myCanvas" );
var context = canvas.getContext( "2d" );
var width = 400;
var height = 200;

var ball = {
    x: 100,
    y: 100,
    radius: 25,
    xSpeed: 3,
    ySpeed: 3,
    draw: function( ctx ) {
    	ctx.beginPath();
        ctx.arc( this.x, this.y, this.radius, 0, 2*Math.PI );
        ctx.fill();
    },
    move: function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}

setInterval( function(){

    context.clearRect( 0, 0, width, height );
    context.strokeRect( 0, 0, width, height );

    ball.move();

    // right
    if ( ball.x + ball.radius >= width ) {
    	ball.x = width - ball.radius;
        ball.xSpeed = -ball.xSpeed;
    }

    // left
    if ( ball.x - ball.radius <= 0 ) {
    	ball.x = ball.radius;
        ball.xSpeed = -ball.xSpeed;
    }

    // down
    if ( ball.y + ball.radius >= height ) {
    	ball.y = height - ball.radius;
        ball.ySpeed = -ball.ySpeed;
    }

    // up
    if ( ball.y - ball.radius <= 0 ) {
    	ball.y = ball.radius;
        ball.ySpeed = -ball.ySpeed;
    }

    ball.draw( context );

}, 10 );

*/

function circles() {
  var int = setInterval(step, 300);
  var counter = 0;
  function step() {
    if ((counter % 20) == 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      drawO();
      drawX();
    }
    counter ++;
  }
}

circles();

/*
setInterval( function() {
  ctx.beginPath();
  ctx.arc(Math.floor(Math.random()*300),Math.floor(Math.random()*300),Math.floor(Math.random()*90)+4,0,2*Math.PI);ctx.stroke(); }, 200);
setInterval(function(){ctx.clearRect(0,0,400,300);},220)
*

/*
//Happy Face
ctx.beginPath();
ctx.arc(175, 175, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(210, 175);
ctx.arc(175, 175, 35, 0, Math.PI, false);  // Mouth (clockwise)
ctx.moveTo(165, 165);
ctx.arc(160, 165, 5, 0, Math.PI * 2, true);  // Left eye
ctx.moveTo(195, 165);
ctx.arc(190, 165, 5, 0, Math.PI * 2, true);  // Right eye
ctx.stroke();
*/
