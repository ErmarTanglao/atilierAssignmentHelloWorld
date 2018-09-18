//References
//https://p5js.org/reference/#/p5/keyPressed
//https://p5js.org/reference/#/p5/keyIsPressed
//https://p5js.org/reference/#/p5/keyIsDown

var ball;
var w = 720;
var h = 480;
var toggle = 0;

function setup() {
  createCanvas(w, h);
  ball = {
        x: width/2,
        y: height/2,
        r: 50
    }
}

function draw() {

    if (keyIsPressed === true) {
        fill(0);
    } else {
        fill(255);
    }

    if (keyIsDown(65)) {
        ball.x -= 5;
    }

    if (keyIsDown(68)) {
        ball.x += 5;
    }

    if (keyIsDown(87)) {
        ball.y -= 5;
    }

    if (keyIsDown(83)) {
        ball.y += 5;
    }

  clear();
  background("red");
  ellipse(ball.x, ball.y, ball.r);

    if (ball.x + ball.r > w || ball.x - ball.r < 0){
        ball.x = w/2;
    }

    if (ball.y + ball.r > h || ball.y - ball.r < 0){
        ball.y = h/2;
    }   
}