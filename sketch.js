
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect;
var ball1,ball2,ball5,ball3,ball4;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rect = createSprite(300,20,350,30)
	ball1 = new Ball(200,200)
	ball2 = new Ball(200,200)
	ball5 = new Ball(200,200)
	ball3 = new Ball(200,200)
	ball4 = new Ball(200,200)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
    rect.display()
	ball1.display()
	ball2.display()
	ball5.display()
	ball3.display()
	ball4.display()
  drawSprites();
 
}



