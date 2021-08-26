const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, bcg, testsprite;

function preload() {
  bg = loadImage("images/background.png")
}

function setup() {
  createCanvas(900,600);
  engine = Engine.create(); 
  world = engine.world;  
  var options = {
    isStatic: true
  }
  bcg = Bodies.rectangle(-2400, -1800, 3600, 2400, options)
  World.add(world, bcg)
  testsprite = createSprite(450, 300, 50, 50)
}

function draw() {
  background(34, 177, 76);
  image(bg, bcg.position.x, bcg.position.y, 3600, 2400)
  Engine.update(engine)
  
  if (keyDown(UP_ARROW)) {
    testsprite.y = testsprite.y - 50
    camera.position.y = testsprite.y
  }

  if (keyDown(DOWN_ARROW)) {
    testsprite.y = testsprite.y + 5
    camera.position.y = testsprite.y
  }

  if (keyDown(RIGHT_ARROW)) {
    testsprite.x = testsprite.x + 5
    camera.position.x = testsprite.x
  }

  if (keyDown(LEFT_ARROW)) {
    testsprite.x = testsprite.x - 5
    camera.position.x = testsprite.x
  }

  if(testsprite.x > 1060 && testsprite.y < -1565) {
    testsprite.x = 1150
    testsprite.y = -1590
    //console.log("xyz")
  }
  //console.log(/*testsprite.x,*/ testsprite.y) //1060 -1565

  drawSprites();
}