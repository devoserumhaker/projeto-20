
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	fis = Engine.create();
	terra = fis.world;

	//Crie os Corpos Aqui.
	options ={
		isStatic : true
	}
	chao = Bodies.rectangle (400, 670, 800, 10, options)
	World.add (terra, chao)
	options_bola ={
		restitution : 0.5,
		friction : 0.02
	}
	bolinha = Bodies.circle (400, 450, 30, options_bola)
	World.add(terra, bolinha)

	options_quadrado ={
		restitution : 0.7,
		frictionAir : 0.1,
		friction : 0.01
	}

	quadradinho = Bodies.rectangle (200, 300, 60, 60, options_quadrado)
	World.add (terra, quadradinho)

	options_retangulo ={
		restitution : 0.01,
		friction : 1,
		frictionAir : 0.3
	}

	retanglinho = Bodies.rectangle (600, 100, 100, 60, options_retangulo)
	World.add (terra, retanglinho)
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background("blue");
  noStroke()
  fill("red")
  Engine.update(fis);
	var pos = chao.position
	rect (pos.x, pos.y, 800, 10)
	var pos_1 = bolinha.position
	ellipse (pos_1.x, pos_1.y, 30)
	var pos_2 = quadradinho.position
	rect (pos_2.x, pos_2.y, 60, 60)
	var pos_3 = retanglinho.position
	rect (pos_3.x, pos_3.y, 100, 60)

  drawSprites();
 
}



