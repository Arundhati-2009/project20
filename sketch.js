var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tomsleeping",tomImg1);
    tom.scale=0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerrystanding", jerryImg1);
    jerry.scale=0.2;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("tomlastimage",tomImg3);
        tom.x=300;
        tom.scale=0.2;
        tom.changeAnimation("tomlastimage");
        jerry.addAnimation("jerrylastImage",jerryImg3);
        jerry.changeAnimation("jerrylastImage");
        jerry.scale=0.2;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode==LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomrunning",tomImg2);
    tom.changeAnimation("tomrunning");
    jerry.addAnimation("jerryteasing",jerryImg2);
    jerry.changeAnimation("jerryteasing");

}

}
