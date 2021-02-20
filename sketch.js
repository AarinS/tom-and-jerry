var cat,catImage2,catImage3,catImage4;
var backGroundImage;
var mouse,mouseImage2,mouseImage3,mouseImage4;


function preload() {
    catImage = loadImage("images/cat1.png");
    catImage2 = loadImage("images/cat2.png");
    catImage3 = loadImage("images/cat3.png");
    catImage4 = loadImage("images/cat4.png");
    
    backGroundImage = loadImage("images/garden.png");
    
    mouseImage = loadImage("images/mouse1.png");
    mouseImage2 = loadImage("images/mouse2.png");
    mouseImage3 = loadImage("images/mouse3.png");
    mouseImage4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
   mouse = createSprite(500,700,20,20);
   mouse.addImage(mouseImage);
   mouse.scale = 0.15;
   cat = createSprite(750,700,20,20);
   cat.addImage(catImage);
   cat.scale = 0.15;
 
   cat.addAnimation("catLastImage", catImage3);
 cat.changeAnimation("catLastImage");

 if(cat.x - mouse.x < (cat.width - mouse.width)/2);


}

function draw() {
background(backGroundImage);
if(cat.collide(mouse)){
    cat.velocityX = 0;
    mouse.velocityX = 0;
}

    text(mouseX + ',' + mouseY,10,45);
    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImage2)
        cat.changeAnimation("catRunning") 
    }
}
    