
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,rubber,rhombus;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create()
	world = engine.world;

	var options = { 
		'density':2,
		'friction':1.0,
		'restitution':0.5
	};
	//Create the Bodies Here.
hammer=Bodies.rectangle(100,100,50,100,options)
World.add(world,hammer);

var options = { 
	'density':1,
	'friction':5,
	'restitution':0.3
};
rubber=Bodies.circle(900,900,60,60)
World.add(world,hammer);









}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  //Matter.Bodies.cicle(x,y,radius,options,maxsize);
 // Matter.Bodies.rect()
 rect(hammer.postion.x,hammer.position.y,50,100) 

  drawSprites();
 
}



