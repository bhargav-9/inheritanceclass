const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
function setup(){
createCanvas(1200,400);
engine=Engine.create();
world=engine.world;

ground=new Ground(600,height,1200,20);
//box1=new Box(200,300,50,50)
//box2=new Box(240,100,50,100);
bird=new Bird(100,100,50,50)
log1=new Log(810,260,300,PI/2)
log2=new Log(810,180,300,PI/2)
log3=new Log(760,120,150,PI/7)
log4=new Log(870,120,150,-PI/7)
}
function draw(){
background('cyan');
Engine.update(engine)
ground.display();
//box1.display();
//box2.display();
bird.display();
log1.display();
log2.display();
log3.display();
log4.display();



}