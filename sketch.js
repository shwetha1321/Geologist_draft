const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ball1 = new Rubber(700,100,10);
    ball2 = new Rubber(710,100,10);
    ball3 = new Rubber(690,100,10);
    ball4 = new Rubber(695,100,10);
    ball5 = new Rubber(705,100,10);
    ball6 = new Rubber(680,100,10);
    ball7 = new Rubber(720,100,10);

    stone1 = new Stone(300,100,100,60)

   hammer = new Hammer(200,100,50,50)

   iron = new Iron(300,350)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
   


    plane.display();
    hammer.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    stone1.display();
    iron.display();

}