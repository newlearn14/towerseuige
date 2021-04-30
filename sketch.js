const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,ground1;
var box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12,box13,box15,box15;
var chain;
var ball;
var polygon;
function preload() {
   
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(400,300,200,5)
    var Options={
      isStatic:false,
    }
    box1=new Box(400,290,20,20,Options)
    box2=new Box(380,290,20,20,Options)
    box3=new Box(360,290,20,20,Options)
    box4=new Box(340,290,20,20,Options)
    box5=new Box(420,290,20,20,Options)
    box6=new Box(440,290,20,20,Options)
    box7=new Box(400,270,20,20,Options)
    box8=new Box(420,270,20,20,Options)
    box9=new Box(380,270,20,20,Options)
    box10=new Box(360,270,20,20,Options)
    box11=new Box(380,250,20,20,Options)
    box12=new Box(400,250,20,20,Options)
    box13=new Box(390,230,20,20,Options)
  var optionss={
  restitution:1,
  isStatic:false
   
 
  }
    //ball=new Circle(100,100,optionss)
  
   polygon=Bodies.circle(50,200,20);
   World.add(world,this.polygon)
    chain = new Slingshot(polygon.body,{x:100,y:100})
}

function draw(){
   background("black");
   Engine.update(engine);
ground1.display();

ball.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
ellipseMode(RADIUS); 
ellipse(polygon.position.x,polygon.position.y,20,20);
chain.display();
}
function mouseDragged(){

  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
chain.fly();
}