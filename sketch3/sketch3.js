//Used sketch 3 code

var mouseclicks = [];
var w = 720;
var h = 480


function setup(){
	createCanvas(w,h);
	var button = createButton("Create Ball");
	button.mousePressed(addball);
	noStroke();
}

function draw(){
	//translate(width/2,height,2);
	background(255);
	for(var i=0; i<mouseclicks.length; i++){
		fill(mouseclicks[i].color);
		ellipse(mouseclicks[i].x,mouseclicks[i].y,mouseclicks[i].r);
		mouseclicks[i].x = mouseclicks[i].x + mouseclicks[i].xspeed;
        mouseclicks[i].y = mouseclicks[i].y + mouseclicks[i].yspeed;
        
        if (mouseclicks[i].x + mouseclicks[i].r > w || mouseclicks[i].x - mouseclicks[i].r < 0){
            mouseclicks[i].xspeed = mouseclicks[i].xspeed * (-1);
        }
    
        if (mouseclicks[i].y + mouseclicks[i].r > h || mouseclicks[i].y - mouseclicks[i].r < 0){
            mouseclicks[i].yspeed = mouseclicks[i].yspeed * (-1);
        }
    }
}

function addball(){
	var ball = {
		x: random(width),
        y: random(height),
        r: 30,
		xspeed: random(-2,2),
		yspeed: random(-2,2),
		color: color(random(255), random(255), random(255))
	}
	mouseclicks.push(ball);
}