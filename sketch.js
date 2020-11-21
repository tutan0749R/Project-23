var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundSprite;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 60, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX = 5;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green");

	box1 = createSprite(340,535,10,50);
	box1.shapeColor = ("red");
	
	box2 = createSprite(440,535,10,50);
	box2.shapeColor = ("red");

	box3 = createSprite(390,555,100,10);
	box3.shapeColor = ("red");
    
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 110 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	//packageBody.x = helicopterSprite.x
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x = helicopterSprite.x;
 // packageSprite.collide(box1);
 // packageSprite.collide(box2);
  packageSprite.velocityX = 5;
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
    
  }
  
}



