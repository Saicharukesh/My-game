var bg, bgImg;
var shooter, shooterImg;
var enemy, enemyImg, enemyGroup;

function preload(){
  bgImg = loadImage("bg.jpg");
  shooterImg = loadImage("Shooter.png");
  enemyImg = loadImage("Ufo_img.png");
}
function setup() {
  createCanvas(800,400);
 
  bg = createSprite(100, 100, 800, 400);
  bg.addImage(`background`,bgImg);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}