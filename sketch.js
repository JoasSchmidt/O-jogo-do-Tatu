
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tatu;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);

	engine = Engine.create();
	world = engine.world;

	var tatu_opitions={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	var chao_options = {
		isStatic: true
	  }
	  var parede_options = {
		isStatic: true
	  }
	  
	 
	//Create the Bodies Here.
	tatu = Bodies.circle(25,410,13,tatu_opitions)
	World.add(world,tatu)

	chao = Bodies.rectangle(400,590,1000,20,chao_options);
	World.add(world,chao);
	
	parede1 = Bodies.rectangle(420,555,10,50,parede_options);
	World.add(world,parede1);
	
	parede2 = Bodies.rectangle(490,555,10,50,parede_options);
	World.add(world,parede2);
	

	  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipseMode(RADIUS);
  fill("salmon")
  ellipse(tatu.position.x, tatu.position.y, 13);

  rectMode(CENTER);
  fill("lightgreen");
  rect(chao.position.x,chao.position.y,1000,20);

	rectMode(CENTER);
  fill("blue");
  rect(parede1.position.x,parede1.position.y,10,50);

  rectMode(CENTER);
  fill("blue");
  rect(parede2.position.x,parede2.position.y,10,50);

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(tatu,{x:0,y:0},{x:0.4,y:-0.4})
	}
}


