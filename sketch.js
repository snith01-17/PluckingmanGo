
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango11,mango2,mango3,mango4,mango5,mango6;
var world,boy,chain;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango11 = new mango(1100,100,30);
	mango2 = new mango(1000,100,30);
	mango3 = new mango(1200,100,30);
	mango4 = new mango(1200,200,30);
	mango5 = new mango(1100,200,30);
	mango6 = new mango(950,200,30);
  stoneObj = new mango1(247,425,30)    
	chain = new Chain(stoneObj.body,{x:160, y:500});

	treeObj = new tree(1050,580);
	groundObject = new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  //displaying tree
  treeObj.display();

  //displaying mangoes
  mango11.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObj.display();
  //cons1.display();

  //displaying ground
  groundObject.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY})

}

function mouseReleased(){
  stoneObj.fly();
}
