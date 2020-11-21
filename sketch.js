var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime=0;
function preload()
{
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() 
{
 //creating monkey
 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
  
 ground=createSprite(400,350,900,10); 
 ground.velocityX=-4;
 console.log(ground.x);
}


function draw() 
{
  background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:",+score,500,50);
  
  
if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  ground.velocityX = -(6 + 3*score/100);
  
  spawnFood();
  spawnObstacles();
if(obstacleGroup.isTouching(monkey)){  
   
  obstacleGroup.velocityX = 0;
  ground.velocityX=0;
  foodGroup.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  foodGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
  foodGroup.setLifetimeEach(-1);
}
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime:"+ survivalTime,100,50)


drawSprite();
}
function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 60 === 0) {
    var food = createSprite(600,120,40,10);
    food.y = Math.round(random(80,120));
    food.addImage(foodImage);
    food.scale = 0.5;
    food.velocityX = -3;
    food.lifetime = 400;
  }
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.y = Math.round(random(80,120));
    obstacle.addImage(foodImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    obstacle.lifetime = 300;
    
  }
}