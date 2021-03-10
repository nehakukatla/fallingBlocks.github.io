const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rand, ground, platform;
var plank=[];
function preload() {
    img1 = loadImage("plankImages/blush.png");
    img2 = loadImage("plankImages/green.png");
    img3 = loadImage("plankImages/pink.png");
    img4 = loadImage("plankImages/purple.jpg");
    img5 = loadImage("plankImages/red.png");
}

function setup() {
    createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300, height, 1000, 50);
    platform = new Platform(300, 560);
    //plank = new Plank();

}

function draw() {
    background(175, 238, 238);
    Engine.update(engine);
    if(frameCount%60===0){
       plank.push(new Plank(random(75, 525), 0, 150, 70));
      }
        
      for (var j = 0; j < plank.length; j++) {
   
        plank[j].display();
      }
    ground.display();
    platform.display();
   
}


