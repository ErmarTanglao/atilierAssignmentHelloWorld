var radius = 150;
var angle = 0;
var speed = 0.05;
var centerX = 300;
var centerY = 300;

function setup() { 
  createCanvas(600, 600);
}

function draw() { 
    background(220);
  
    var x = mouseX + radius * cos(angle);
    var y = mouseY + radius * sin(angle);
    ellipse(x, y, 50, 50);

    angle = angle + speed;
}