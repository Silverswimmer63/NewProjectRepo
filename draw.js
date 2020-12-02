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
  var side = (Math.floor(Math.random() * 50) + 1);
  //side = Math.abs(side);
  var xCorn = Math.floor(Math.random() * (canvas.width - side));
  var yCorn = Math.floor(Math.random() * (canvas.height - side));
  ctx.beginPath();
  ctx.strokeRect(xCorn, yCorn, side, side);
  ctx.stroke();
}

function circles() {
  var int = setInterval(step, 500);
  var counter = 0;

  function step() {
    if ((counter % 20) == 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
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
