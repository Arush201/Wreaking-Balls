
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(width/2,590,width,50)
  ball = new Ball(200,200)
  rope = new Rope(ball.body,{x:400,y:100})
  box1 = new Box(580,320);
  box2 = new Box(650,320);
  box3 = new Box(650,240);
  box4 = new Box(580,240);
  box5 = new Box(650,390);
  box6 = new Box(580,390);
  box7 = new Box(650,460);
  box8 = new Box(580,460);
  box9 = new Box(650,530);
  box10 = new Box(580,530);

	Engine.run(engine);
  
}


function draw() {
  background(165);
  
  ground.display()
  ball.display()
  rope.display()  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()

}

function mouseDragged(){

  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
}

    


