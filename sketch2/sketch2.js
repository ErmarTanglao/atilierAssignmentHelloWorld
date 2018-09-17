var ball;

function setup(){
    createCanvas(720,480);
    ball = {
        x: width/2,
        y: height/2,
        r: 100,
        xspeed: random(-2,2),
        yspeed: random(-2,2),
        color: color(random(255), random(255), random(255))
    }
}

function draw(){
    ellipse(ball.x, ball.y, ball.r)
    // for (let i = 0; i < 10; i++) {
    //     fill(ball.color);
    //     ellipse(ball.x, ball.y, ball.r/2);
    //     ball.x = ball.x + ball.xspeed;
    //     ball.y = ball.y + ball.yspeed;    
    // }
}

function mouseClicked() {
    var clickeddistance = dist(ball.x, ball.y, mouseX, mouseY);
	if(clickeddistance < ball.r){
        ellipse(random(ball.x), random(ball.y), ball.r/2)
        fill(random(255), random(255), random(255))
        ball.x = ball.x + ball.xspeed;
        ball.y = ball.y + ball.yspeed;  
	}
	// if(mouseX < width/2 + 50 && mouseX > width/2 - 50){
	// 	if(mouseY < height/2 + 50 && mouseY > height/2 - 50){
    //         push();
    //         for (let i = 0; i < 1; i++) {
    //             fill(ball.color);
    //             ellipse(random(ball.x), random(ball.y), ball.r/2);
    //             ball.x = ball.x + ball.xspeed;
    //             ball.y = ball.y + ball.yspeed;    
    //         }
    //         console.log("Hi");
    //     }
    // }
}
