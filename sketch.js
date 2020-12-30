
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.

	Engine.run(engine);
  dustbin1=new dustbin();
 
  ground=Bodies.rectangle(width/2, 680,width, 10 , {isStatic:true} )
  World.add(world,ground)
  paper1=new Paper(100,650,35)
}


function draw() {
  rectMode(CENTER);
  background(0);
 dustbin1.display(); 
rectMode(CENTER)
fill("yellow")
rect(ground.position.x,ground.position.y,width,10)
paper1.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50})
	}
}


