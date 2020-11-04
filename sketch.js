 
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;

 var man;
 var ground,obsatcle1; 
 var ground2;

 function preload(){
   back = loadImage("bg.jpeg");
 }


function setup() {

  engine = Engine.create();
  world = engine.world;

 //Create the Bodies Here.

Engine.run(engine);

//creating a canvas
createCanvas(1900,400);

ground = new Ground(200,380,3500,10)
ground2 = new Ground(440,370,200,20);


obsatcle1 = new Obstacle(400,315,100,30); 

 

console.log("obstacle_options--->"+ obsatcle1);


console.log(obsatcle1);
man = new Player(200,300,20,20);

console.log(man);


}

function draw() {

  background("green");  
  drawSprites();
  ground.display();
  obsatcle1.display();
  man.display();
  ground2.display();
 // keyPressed();

}

function keyPressed() {
if(keyCode===32){
  man.jump();

}
 
}







 

