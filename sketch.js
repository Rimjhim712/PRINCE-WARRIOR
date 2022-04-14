var prince,princess,fighter1,fighter2,dragon,bg5;
var goldCoins,goldBricks,bombs,dangerBox,treasure,castle;
var weapon5,weapon2,weapon3,weapon4;
var prison1,prison2,prison3,prison4;
var witch1,witch2,witch3;

var goldCoinsImg,goldBricksImg,bombsImg,dangerBoxImg,treasureImg,castleImg;
var weapon5Img,weapon2Img,weapon3Img,weapon4Img;
var prison1Img,prison2Img,prison3Img,prison4Img;
var witch1Img,witch2Img,witch3Img;
var princeImg,princessImg,fighter1Img,fighter2Img,dragonImg,bg5Img;

var lives = 0;
var timeline;

function preload(){
goldBricksImg = loadImage("gold brick.png");
goldCoinsImg = loadImage("gold coin.png");
bombsImg = loadImage("black bomb.png");
dragonImg = loadImage("dragon.png");
fighter2Img = loadImage("fighter2.png");
treasureImg = loadImage("treasure.png");
weapon2Img = loadImage("weapon2.png");
weapon3Img = loadImage("weapon3.png");
weapon4Img = loadImage("weapon4.png");
weapon5Img = loadImage("weapon5.png");
witch1Img = loadImage("witch.png");
witch2Img = loadImage("witch.png");
witch3Img = loadImage("witch.png");
princeImg= loadImage("prince.jpg");
bgImg = loadImage("BG5.jpg");

}
function setup(){
createCanvas = (800,800);


}
function draw(){

background(bg5Img);

drawSprites();

}


    
