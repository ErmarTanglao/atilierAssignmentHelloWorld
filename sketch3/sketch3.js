var ball;
var w = 720;
var h = 480;

function setup(){
    createCanvas(w,h);

    ball = {
        x: width/2,
        y: height/2,
        r: 100,
        xspeed: 2,
        yspeed: 2
    }
}

function draw(){
    clear();
    ellipse(ball.x, ball.y, ball.r);
    fill(0);
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;

    //Bouncing
    if (ball.x + ball.r > w || ball.x - ball.r < 0){
        ball.xspeed = ball.xspeed * (-1)
    }

    if (ball.y + ball.r > h || ball.y - ball.r < 0){
        ball.yspeed = ball.yspeed * (-1)
    }
}