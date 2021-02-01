var cat;
var mouse;
function preload() {
    //load the images here
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(100,20,50,100);
mouse  = createSprite(100,200,50,90);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x<(cat.width - mouse.width)/2){
    cat.addAnimation("catRunning", catImg3);
cat.changeAnimation("catLastImage");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catLastImage", catImg2);
    cat.changeAnimation("catRunning");
}

}
