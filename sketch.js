const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron, rubber, hammer;

function setup(){
    var canvas = createCanvas(1200,550);
    engine = Engine.create();
    world = engine.world;

	hammer = new Hammer(10,100);
    plane = new Plane(600,550,1200,20)
    stone = new Stone(900,320,100,100);
	rubber = new Rubber(500,450,70);
    iron = new Iron(300,350);

    sand1 = new Sand(585,450,10);
    sand2 = new Sand(590,455,10);
    sand3 = new Sand(595,450,10);
    sand4 = new Sand(600,455,10);
    sand5 = new Sand(605,450,10);
    sand6 = new Sand(610,445,10);
    sand7 = new Sand(615,440,10);
    sand8 = new Sand(620,445,10);
    sand9 = new Sand(625,440,10);
    sand10 = new Sand(630,445,10);
	sand11 = new Sand(635,440,10);
	sand12 = new Sand(640,445,10);
}

function draw(){
    background("lightblue");
    Engine.update(engine);

	hammer.display();
    plane.display();
	stone.display();
	rubber.display();
    iron.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();
	sand11.display();
	sand12.display();
}