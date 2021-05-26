
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var world,boy;
var Stone;
var string;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1000, 90, 30);
	mango3 = new mango(1200, 80, 30);
	mango4 = new mango(900, 200, 30)
	mango5 = new mango(1200, 200, 30);
	mango6 = new mango(900, 150, 30);
	mango7 = new mango(1000, 200, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	string = new constraint(this.boy.pos.x, this.stone.pos.x, this.boy.pos.y, this.stone.pos.y);
	Stone = new stone(250, 340, 20, 30);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  string.display();
  groundObject.display();

}

function detectCollision(Lstone, Lmango){
	mangoBodyPosition = Lmango.body.posiiion
	stoneBodyPosition = Lstone.body.mangoBodyPosition

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body, false);
	}
}
