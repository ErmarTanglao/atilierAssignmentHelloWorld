var ball;
var w = 720;
var h = 480;

function setup() {
  createCanvas(w, h);
  ball = {
        x: width/2,
        y: height/2,
        r: 50
    }
}

function draw() {
    if (keyIsDown(LEFT_ARROW)) {
        ball.x -= 5;
  }

    if (keyIsDown(RIGHT_ARROW)) {
        ball.x += 5;
  }

    if (keyIsDown(UP_ARROW)) {
        ball.y -= 5;
  }

    if (keyIsDown(DOWN_ARROW)) {
        ball.y += 5;
  }

  clear();
  background(0);
  fill(255, 0, 0);
  ellipse(ball.x, ball.y, ball.r);

    if (ball.x + ball.r > w || ball.x - ball.r < 0){
        ball.x = w/2;
    }

    if (ball.y + ball.r > h || ball.y - ball.r < 0){
        ball.y = h/2;
    }   
}