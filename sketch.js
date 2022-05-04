var player,alien,teamMates,tm
var bg,playerImg,alienImg,ALIENS




function preload(){
bg=loadImage("Pictures/bgimage.jpg")
playerImg=loadImage("Pictures/Player_spaceship.png")
alienImg=loadImage("Pictures/Alien_spaceship.png")
}

function setup(){
createCanvas(displayWidth-3,displayHeight-140)
player=createSprite(displayWidth/2,displayHeight-250,50,50)
player.shapeColor="black"
player.addImage(playerImg)
player.scale=0.4


ALIENS=new Group()
teamMates=new Group()
}

function draw(){
background(bg)
aliens();
teammates();

if(keyDown("right")){
     player.x=player.x+2
}

if(keyDown("left")){
    player.x=player.x-2
}

if(ALIENS.isTouching(player)){
    for(var i=0;i<ALIENS.length;i++){
        if(ALIENS[i].isTouching(player)){
            ALIENS.destroy();
            teamMates.destroy();
        }
    }
}



drawSprites();

}
function aliens(){
if(frameCount%70===0){
    alien=createSprite(Math.round(random(20,1300)),Math.round(random(-10,200)),40,40)
    alien.addImage(alienImg)
    alien.scale=0.3
    alien.velocityY=2
    ALIENS.add(alien)
}
}

function teammates(){
  if(frameCount%160===0){
      tm=createSprite(Math.round(random(20,1300)),Math.round(random(-10,200)),40,40)
      tm.addImage(playerImg)
      tm.scale=0.3
      tm.velocityY=2
      teamMates.add(tm)
  }
}


function shoot(){

}