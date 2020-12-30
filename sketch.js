//Read The Readme File First

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var holder;
var rope1;

function preload()
{
 //	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(300, 400, 25);
	bob2 = new Bob(350, 400, 25);
	bob3 = new Bob(400, 400, 25);
	bob4 = new Bob(450, 400, 25);
	bob5 = new Bob(500, 400, 25);

	holder = new Roof(400, 200, 300, 20);

	rope1 = new Rope(bob1.body, holder.body, -100);
	rope2 = new Rope(bob2.body, holder.body, -50);
	rope3 = new Rope(bob3.body, holder.body, 0);
	rope4 = new Rope(bob4.body, holder.body, 50);
	rope5 = new Rope(bob5.body, holder.body, 100);

	Engine.run(engine);
}


function draw() {
	background("skyblue");
	
	rectMode(CENTER);

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	holder.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed(){
	if (keyCode === 49){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -50, y: -50});
	}
	if (keyCode === 50){
		Matter.Body.applyForce(bob2.body, bob2.body.position, {x: -50, y: -50});
	}
	if (keyCode === 51){
		Matter.Body.applyForce(bob3.body, bob3.body.position, {x: -50, y: -50});
	}
	if (keyCode === 52){
		Matter.Body.applyForce(bob4.body, bob4.body.position, {x: 50, y: -50});
	}
	if (keyCode === 53){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x: 50, y: -50});
	}
}