var bullet,wall;
var speed,weight;
var damage=0,thickness;
var object1,object2;

function setup() {
  createCanvas(1200,400);
  
  speed=random(223,321);
  weight=(30,52);
  thickness=random(22,83);

  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  bullet=createSprite(50,200,70,10);
  bullet.shapeColor="white";
  bullet.velocityX=speed/5; 

  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
 
  


}


function draw() {
  background("black");  
  drawSprites();
  console.log(damage);

  if (isTouching(bullet,wall)){

      bullet.velocityX=0;
     
      if(damage<10){
       wall.shapeColor="green"; 
      }
  
      if(damage>=10){
       wall.shapeColor="red";
      }
      ;

  }
}

function isTouching(bullet,wall){
  if(bullet.x-wall.x>bullet.width/2+wall.width/2 &&                                                                        
   wall.x-bullet.x<wall.width/2+bullet.width/2&&
   bullet.y-wall.y<bullet.height/2+wall.height/2 &&                                                                        
   wall.y-bullet.y<wall.height/2+bullet.height/2){
     return true;

 
 }
  else {
     return false;        
  } 
} 