
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var ground
var mango1,mangoIMG,mango2,mango3,mango4
var boyIMG,stoneIMG,treeIMG
var tree

function preload()
{
mangoIMG=loadImage("mango.png")	
boyIMG=loadImage("boy.png")
stoneIMG=loadImage("stone.png")
treeIMG=loadImage("stone.png")
}

function setup() {
	createCanvas(800, 400);
engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	mango1=new Mango(300,200,10,10)
	mango2=new Mango(340,200,10,10)
    mango3=new Mango(300,240,10,10)
	mango4=new Mango(340,240,10,10)
	tree= new Tree(300,400,30,30)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  tree.display();
  mango1.display();
  
  
  drawSprites();
 
}



