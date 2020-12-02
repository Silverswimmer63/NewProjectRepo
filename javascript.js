/*--------------- Preset output before we edit anything start ----------------*/

var output = "JavaScript Loading";
document.getElementById("output").innerHTML = output;

/*------------ preset output before we edit end should read "JavaScript Loading"
if this does not show up, and your expected result does not happen, then you
have an issue bellow. --------------------------------------------------------*/

/*
For this homework I am giving fairly limited instructions. My goal is that you do your best to follow them, if you get them wrong, that's OK at this point.

Make a Class called asset
class asset should have a constructor that has the following inputs:
type, center, num1, num2

for type, you should expect "circle" or "rect"
for center you should assume an object with keys of x and y (example {x: 10, y:20})
for num1 & num 2 you should expect numbers.

it should store the inputs in .type, .center, .num1, and .num2

Ignore this for now

if it is a circle, it should return arc(center.x, center.y, num1, num2 *pi) (but with the math already done)
if it is a rect, it should return rect(center.x - <something>, center.y - <something>, num1, num2), look this up to try to figure it out
*/

class Asset {
  constructor(type, center, num1, num2) {
    this.type = type;
    this.center = center;
    this.num1 = num1;
    this.num2 = num2;
  }
  
}

/*----------------------------------------- Do not make changes below this line
Output command for any changes above. If there are no changes above then it
will read "JavaScript Loading". If there is a change above, then it will output
that change, if there is an error it will output "JavaScript file not loading".
------------------------------------------------------------------------------*/

var styledOutput = "";

if (Array.isArray(output)) {
  for (var i = 0; i < output.length; i++) { styledOutput += output[i] + "<BR>";}
}

if (styledOutput.length != 0) { output = styledOutput; }

document.getElementById("output").innerHTML = output;

/* ------------------------------- End of File -------------------------------*/
