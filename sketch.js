const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var play;
var gameState=0;
var carI,car;
var obstacle,stone;
var obstacleGroup=[];
var score=0;
var velocity=-5;
function preload()
{
	stone=loadImage("images/rock.png")
	carI=loadImage("images/car.png")
  obstacle=loadImage("images/obstacle.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
 
  play = createButton("START");
  play.position(windowWidth/2,windowHeight-100)
  play .style("width","200px")
  play .style("height","65px")
  play .style("font-size","25px")
	play .style("background-color","blue")
  play .style("border-radius","20px")
  play .style("font-weight","bold")

  car=createSprite(100,windowHeight-100,10,10);  
  car.addImage("carI",carI)
  car.scale=0.6

  reset = createButton("RESET");
  reset.position(windowWidth/2-100,windowHeight/2+50)
  reset .style("width","200px")
  reset .style("height","65px")
  reset .style("font-size","25px")
	reset .style("background-color","red")
  reset .style("border-radius","20px")
  reset .style("font-weight","bold")
  reset.hide();

}


function draw() {  
  if(gameState===0){
    background(0);
    fill("red");
    textSize(30)
    text("CARS RESCUE",windowWidth/2-100,30);
    text("USE UP ARROW AND DOWN ARROW TO MOVE THE CAR",windowWidth/2-100,windowHeight/2)
    play.mousePressed(()=>{
      gameState=1;
      play.hide();

    })
  }

  if(gameState===1){
    background("green");
    spawnObstacle();
    if(keyDown("UP_ARROW")){
       car.y=car.y-10;       
    }
    if(keyDown("DOWN_ARROW")){
      car.y=car.y+10;       
   }
    
     
     

      textSize(25);
      fill("black")
      text("SCORE:"+score,windowWidth-200,30);

  }
   else if(gameState===2){
       background(0);
       car.visible=false;
       textSize(35);
       fill("red")
       text("GAME OVER ",windowWidth/2-100,windowHeight/2);
       reset.show();
       reset.mousePressed(()=>{
        gameState=1;
        reset.hide();
        score=0;
        car.visible=true;
      })
   }

  
  drawSprites();
 
}

function spawnObstacle(){
   if(frameCount%100===0){
      obstacles=createSprite(windowWidth,windowHeight-100,20,20);
      
      random1=Math.round(random(1,2));
      if(random1===1){
        obstacles.addImage('obstacle',obstacle);
        
      }
      else if(random1===2){
        obstacles.addImage('rock',);
      }
       obstacleGroup.push(obstacles);
       obstacles.velocityX=velocity;

       
       
   }


}
