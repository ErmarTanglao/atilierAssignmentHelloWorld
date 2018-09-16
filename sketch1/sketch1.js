var iceCream;
var iceCreamCone;
var iceCreamDetails;

function setup(){
    createCanvas(720,480)
    iceCream = {
        x: width/2,
        y: height/2,
        r: 100
    }
    iceCreamCone = {
        x1: 320,
        y1: 270,
        x2: 400,
        y2: 270,
        x3: 360,
        y3: 370
    }
    // iceCreamDetails = {
    //     x: width/2 - 15,
    //     y: height/2,
    //     r: 25
    // }
}

function draw(){
    background(255, 237, 244)
    //Using simple shapes to draw unique shapes
    
    // //Ice Cream 1
    // noStroke();
    
    // //IceCream
    // fill(252, 86, 141);
    // ellipse(iceCream.x, iceCream.y, iceCream.r);

    // //Ice Cream cone
    // fill(145, 82, 0)
    // triangle(iceCreamCone.x1, iceCreamCone.y1, iceCreamCone.x2, iceCreamCone.y2, iceCreamCone.x3, iceCreamCone.y3);

    // //Ice Cream cone details
    // stroke(168, 105, 0);
    // strokeWeight(2);
    // line(360, 270, 360, 368);
    // line(340, 270, 340, 319);
    // line(380, 270, 380, 319);
    // line(334, 300, 386, 300);
    // line(346, 335, 374, 335);

    // //IceCream Details
    // noStroke();
    // fill(252, 86, 141);
    // ellipse(325, 270, 25);
    // ellipse(340, 270, 25);
    // ellipse(355, 270, 25);
    // ellipse(370, 270, 25);
    // ellipse(385, 270, 25);
    // ellipse(397, 270, 25);

    // //Ice Cream 2
    // fill(70, 0, 0);
    // ellipse(iceCream.x, iceCream.y, iceCream.r);

    // //Ice Cream cone
    // fill(145, 82, 0)
    // triangle(iceCreamCone.x1, iceCreamCone.y1, iceCreamCone.x2, iceCreamCone.y2, iceCreamCone.x3, iceCreamCone.y3);

    // //Ice Cream cone details
    // stroke(168, 105, 0);
    // strokeWeight(2);
    // line(360, 270, 360, 368);
    // line(340, 270, 340, 319);
    // line(380, 270, 380, 319);
    // line(334, 300, 386, 300);
    // line(346, 335, 374, 335);

    // //IceCream Details
    // stroke(255, 0, 0);
    // strokeWeight(2);
    // line(340,240,330,230);
    // line(352,210,362,200);
    // line(388,230,378,220);
    // noStroke();
    // fill(70, 0, 0);
    // ellipse(325, 270, 25);
    // ellipse(340, 270, 25);
    // ellipse(355, 270, 25);
    // ellipse(370, 270, 25);
    // ellipse(385, 270, 25);
    // ellipse(397, 270, 25);

    
    //Ice Cream 3
    noStroke();
    
    //IceCream
    fill(100, 195, 52);
    ellipse(iceCream.x, iceCream.y, iceCream.r);

    //Ice Cream cone
    fill(145, 82, 0)
    triangle(iceCreamCone.x1, iceCreamCone.y1, iceCreamCone.x2, iceCreamCone.y2, iceCreamCone.x3, iceCreamCone.y3);

    //Ice Cream cone details
    stroke(168, 105, 0);
    strokeWeight(2);
    line(360, 270, 360, 368);
    line(340, 270, 340, 319);
    line(380, 270, 380, 319);
    line(334, 300, 386, 300);
    line(346, 335, 374, 335);

    //IceCream Details
    noStroke();
    fill(100, 195, 52);
    ellipse(325, 270, 25);
    ellipse(340, 270, 25);
    ellipse(355, 270, 25);
    ellipse(370, 270, 25);
    ellipse(385, 270, 25);
    ellipse(397, 270, 25);

    //Ice Cream Sauce
    fill(82, 0, 0)
    arc(360, 240, 100, 100, PI, 0);
    ellipse(390,240,15,50);
    ellipse(340,240,15,35);
    ellipse(368,240,15,23);
    
}