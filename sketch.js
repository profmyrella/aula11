var trex, trexCorrendo, solo, soloImg;

function preload(){
  trexCorrendo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  soloImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  trex = createSprite(50,160, 20,50);
  trex.addAnimation("correndo", trexCorrendo);
  trex.scale = 0.5;

  solo = createSprite(300,180,600,20);
  solo.addImage(soloImg);
  solo.velocityX = -2;
}

function draw(){
  background("white");

  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY += 0.5;

  trex.collide(solo);

  if(solo.x <0){
    solo.x = width/2;
  }

  drawSprites();
}
