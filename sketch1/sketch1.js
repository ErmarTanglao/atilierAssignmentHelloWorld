var iceCream;
var cone;

function setup(){
    createCanvas(720,480)
    iceCream = {
        x: width/2,
        y: height/2,
        r: 100
    }
}

function draw(){
    background(255, 237, 244)
    //Using simple shapes to draw unique shapes
    
    //Ice Cream 1
    noStroke();
    
    //IceCream
    fill(252, 86, 141);
    ellipse(iceCream.x, iceCream.y, iceCream.r);

    //Ice Cream cone
    fill(145, 82, 0)
    triangle(320, 270, 400, 270, 360, 370);

    //Ice Cream cone details
    stroke(168, 105, 0);
    strokeWeight(2);
    line(320, 270, 389, 295);
    
    //IceCream Details
    noStroke();
    fill(252, 86, 141);
    ellipse(325, 270, 25, 25);
    ellipse(340, 270, 25, 25);
    ellipse(355, 270, 25, 25);
    ellipse(370, 270, 25, 25);
    ellipse(385, 270, 25, 25);
    ellipse(397, 270, 25, 25);

    //fill(252, 86, 141);
   // ellipse(360, 240, 100, 100);
    //fill(70, 0, 0);
   // ellipse(300, 240, 100, 100);
 
}