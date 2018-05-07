// variables 
var home; // home button 
var about; // about button 
var join; // join button 

var level; // essentially "levels" of the page, different pages 

// level 0 = home page 
// level 1 = about page 
// level 2 = join page 

var post1; // post 1
var post1ex; // post 1 expanded 

//---------------//

function setup () {
    createCanvas (1500, 1000);
    level = 0;
}

function draw () {
// home page 
    
if (level == 0){
    background(4,21,51);
    var home = 
        stroke(255, 255, 255, 1);
        fill(4, 21, 51);
        rect(990, 50, 540, 60);
        textSize(50);
        strokeWeight (2);
        stroke(255, 255, 255, 200);
        fill (4, 21, 51); 
        if (mouseX > 990 && mouseX < 1500 && mouseY > 50 && mouseY < 110){
        fill(200);}
        text('D E // S T A B I L I Z E', 1000, 100); 

  
// getting you to the home page
if (mouseIsPressed && mouseX > 990 && mouseX < 1500 && mouseY > 50 && mouseY < 110){
    level = 0;
}
  
    var about = 
        fill (4, 21, 51); 
        if (mouseX > 1350 && mouseX < 1500 && mouseY > 152 && mouseY < 187) {
            fill(200);
        }
        rect(1350, 152, 148, 35); 
        stroke(255);
        fill (4, 21, 51); 
        textSize(30);
        text('A B O U T', 1355, 180);
     
// getting you to the about page 
if (mouseIsPressed && mouseX > 1350 && mouseX < 1500 && mouseY > 152 && mouseY < 187){
    level = 1;
}
    
    var join = 
        fill (4, 21, 51); 
        if (mouseX > 1392 && mouseX < 1500 && mouseY > 200 && mouseY < 237){
            fill(200);
        }
        rect(1392, 200, 106, 37);
        stroke(255);
        fill (4, 21, 51); 
        textSize(30);
        text('J O I N', 1398, 230);
    
// getting you to the join page 
if (mouseIsPressed && mouseX > 1392 && mouseX < 1500 && mouseY > 200 && mouseY < 237){
    level = 2;
}
    
    var post =
        fill(255, 255, 255);
        stroke(193);
        rect(200, 170, 400, 200)
        fill(209, 184, 189);
        if (mouseX > 200 && mouseX < 600 && mouseY > 170 && mouseY < 370){
        stroke(100);
        fill(4,21,51);

    }
        stroke(0);
        textSize(30);
        text('MOCK POST', 305, 285);
        
        textSize(15);
        noStroke();
        text('click to expand + see discussion', 287, 325);

// clicking to expand post, see discussion 
    if (mouseIsPressed && mouseX > 200 && mouseX < 600 && mouseY > 170 && mouseY < 370){
        fill(255);
        stroke (193);
        rect(650, 170, 600, 600);

// OP + post
        stroke(200);
        fill(209, 184, 189);
        rect(670, 190, 50, 50);
// commenter 1 avatar
        rect(735, 275, 50, 50);
// commenter 2 avatar
        rect(735, 340, 50, 50);
// commenter 3 avatar
        rect(800, 425, 50, 50);
// commenter 4 avatar
        rect(735, 505, 50, 50);
// commenter 5 avatar
        rect(800, 590, 50, 50);
// commenter 6 avatar
        rect(864, 675, 50, 50);
        
// lines to represent post content
        stroke(4, 21, 51);
        line(740, 209, 1220, 209);
        line(740, 239, 1220, 239);
        line(805, 294, 1220, 294);
        line(805, 324, 1220, 324);
        line(805, 358, 1220, 358);
        line(805, 389, 1220, 389);
        line(870, 444, 1220, 444);
        line(870, 474, 1220, 474);
        line(805, 524, 1220, 524);
        line(805, 554, 1220, 554);
        line(870, 609, 1220, 609);
        line(870, 639, 1220, 639);
        line(935, 695, 1220, 695);
        line(935, 725, 1220, 725);
        
// line pointing to someone's response
        stroke(150);
        line(695, 240, 695, 530);
        line(695, 300, 735, 300);
        line(695, 365, 735, 365);
        line(760, 390, 760, 450);
        line(760, 450, 800, 450);
        line(695, 530, 735, 530);
        line(760, 555, 760, 615);
        line(760, 615, 800, 615);
        line(825, 640, 825, 700);
        line(825, 700, 864, 700);
    }
    
    // mock profile 1
        fill(190);
        stroke(193);
        rect(100, 170, 80, 80);
        fill(4, 21, 51);
        stroke(145);
        triangle(120, 250, 140, 220, 160, 250);
        ellipse(140, 210, 40, 40);
    
    // mock post 2
        fill(255, 255, 255);
        stroke(193);
        rect(200, 450, 400, 200)
        fill(209, 184, 189);
        stroke(0);
        textSize(30);
        text('MOCK POST', 305, 565); 
    
    // mock profile 2
        fill(190);
        stroke(193);
        rect(100, 450, 80, 80);
        fill(4, 21, 51);
        stroke(145);
        triangle(120, 530, 140, 500, 160, 530);
        ellipse(140, 490, 40, 40);
}
    
// about page 
if (level == 1) {
    background (4, 21, 51);
    noStroke();
    var home =    
        textSize(50);
        strokeWeight (2);
        stroke(255, 255, 255, 200);
        fill (4, 25, 51); 
        if (mouseX > 990 && mouseX < 1500 && mouseY > 50 && mouseY < 110){
        fill(200);}
        text('D E // S T A B I L I Z E', 1000, 100); 
    
    var about = 
        fill (4, 21, 51); 
        if (mouseX > 1350 && mouseX < 1500 && mouseY > 152 && mouseY < 187) {
            fill(200);
        }
        rect(1350, 152, 148, 35); 
        stroke(255);
        fill (4, 21, 51); 
        textSize(30);
        text('A B O U T', 1355, 180);
    
    var join = 
        fill (4, 21, 51); 
        if (mouseX > 1392 && mouseX < 1500 && mouseY > 200 && mouseY < 237){
            fill(200);
        }
        rect(1392, 200, 106, 37);
        stroke(255);
        fill (4, 21, 51); 
        textSize(30);
        text('J O I N', 1398, 230);
    
    strokeWeight(1);
    rect(100, 110, 137, 5);
    rect(100, 160, 300, 5);
    
    noStroke();
    fill(200);
    text ('A B O U T', 100, 100); 
    fill(249, 227, 233);
    text ('D E // S T A B I L I Z E', 100, 150)
    textSize(20);
    fill(255, 255, 255, 200);
    text('constructs of gender and sexuality in america are too institutionalized, naturalized, and embedded', 100, 300); 
    text('in social structures and daily life. these constructs include norms, roles, and expectations about', 100, 325); 
    text('how people should behave based on how they are classified by gender and sexuality categories.', 100, 350); 
    text('although gender and sexuality are meaningfully different constructs, they are inextricably related;', 100, 375);
    text('gender can sometimes be defined by sexual attraction/sexual activity, and sexuality/sexual', 100, 400);
    text('orientations/sexual identities are often dependent on definitions of gender and implicit assumptions', 100, 425);
    text('of gender + biological sex.', 100, 450);
    
    text('the problem is that these constructs can be harmful, discriminatory, and invalidating at every level', 100, 525);
    text('of human existence. benefits from the state are distributed based on these constructs, american laws', 100, 550);
    text('were and are formed heavily in relation to the historical/contemporary development of these constructs,', 100, 575);
    text('ideas about what it means to be someone of a particular gender are biologically essentialized in alignment', 100, 600);
    text('with these constructs. the problem is that these constructs are established as stable, naturalized, and', 100, 625);
    text('inherent to human life when they are, in fact, constructed in various ways.', 100, 650);
    
    text ('de // stabilize is an intersectional feminist collective aimed at destabilizing these constructs.', 100, 725);
    text ('we want to talk about it, to examine and discuss the potential roots of these constructs.', 100, 750);
    
    text ('so let’s talk about it.', 100, 825);
    
    
    
// getting you to the home page
if (mouseIsPressed && mouseX > 990 && mouseX < 1500 && mouseY > 50 && mouseY < 110){
    level = 0;
}
    
// getting you to the join page 
if (mouseIsPressed && mouseX > 1392 && mouseX < 1500 && mouseY > 200 && mouseY < 237){
    level = 2;
}
}
    
// join page
if (level == 2){
    background (4, 21, 51);
    noStroke();
    var home = 
        textSize(50);
        strokeWeight (2);
        stroke(255, 255, 255, 200);
        fill (4, 25, 51); 
        if (mouseX > 990 && mouseX < 1500 && mouseY > 50 && mouseY < 110){
        fill(200);}
        text('D E // S T A B I L I Z E', 1000, 100); 
    
    var about = 
        fill (4, 21, 51); 
        if (mouseX > 1350 && mouseX < 1500 && mouseY > 152 && mouseY < 187) {
            fill(200);
        }
        rect(1350, 152, 148, 35); 
        stroke(255);
        fill (4, 21, 51); 
        textSize(30);
        text('A B O U T', 1355, 180);
    
    var join = 
        fill (4, 21, 51); 
        if (mouseX > 1392 && mouseX < 1500 && mouseY > 200 && mouseY < 237){
            fill(200);
        }
        rect(1392, 200, 106, 37);
        stroke(255);
        fill (4, 21, 51); 
        textSize(30);
        text('J O I N', 1398, 230);
    
    noStroke();
    fill(249, 227, 233);
    textSize(30);
    text('wanna talk about it?', 100, 100); 
    
// mock join button 
    stroke(255, 255, 255, 100);
    strokeWeight(10);
    rect(100, 180, 200, 50);
    textSize(25);
    stroke(255);
    fill(4,21,51);
    strokeWeight(1);
    text('click here to join', 110, 215);
    
// mock sign in button
    fill(249, 227, 233);
    stroke(255, 255, 255, 100);
    strokeWeight(10);
    rect(100, 280, 205, 50);
    textSize(25);
    stroke(255);
    fill(4,21,51);
    strokeWeight(1);
    text('click here sign in', 110, 315);
    
// getting you to the home page
if (mouseIsPressed && mouseX > 990 && mouseX < 1500 && mouseY > 50 && mouseY < 110){
    level = 0;
}
    
// getting you to the about page 
if (mouseIsPressed && mouseX > 1350 && mouseX < 1500 && mouseY > 152 && mouseY < 187){
    level = 1;
}
    
}

}

