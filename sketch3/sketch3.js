var ball;
var w = 720;
var h = 480;
var mouseclicks = [];

function setup(){
    createCanvas(w,h);

    //Taken from sketch 3
    var button = createButton("add ball");
    button.mousePressed(addball);
    
    ball = {
        x: random(width/2),
        y: random(height/2),
        r: 100,
        xspeed: random(-2,2),
        yspeed: random(-2,2),
        color: color(random(255), random(255), random(255))
    }
}

function draw(){
    clear();
    ellipse(ball.x, ball.y, ball.r);
    fill(ball.color);
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;

    //Bouncing
    if (ball.x + ball.r > w || ball.x - ball.r < 0){
        ball.xspeed = ball.xspeed * (-1);
    }

    if (ball.y + ball.r > h || ball.y - ball.r < 0){
        ball.yspeed = ball.yspeed * (-1);
    }
}

function addball(){
    // console.log("Hi")
	var clickposition = {
		x: width/2,
        y: height/2,
        r: 100,
        xspeed: random(-2,2),
        yspeed: random(-2,2),
        color: color(random(255), random(255), random(255))
	}
	push(clickposition);
}