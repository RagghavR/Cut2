const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var rabbit

function preload(){
  bg = loadImage("assets/background.png")
  fruitImg = loadImage("assets/melon.png")
  rabbitImg = loadImage("assets/Rabbit-01.png")
}

function setup() 
{
  createCanvas(400,550);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,530,600,20);

  rope = new Rope(7,{x:200,y:30});
  fruit = Bodies.circle(200,300,20);
  Matter.Composite.add(rope.body,fruit);

  link = new Link(rope,fruit);
  rabbit = createSprite(200,480,100,100)
  rabbit.addImage(rabbitImg)
  rabbit.scale = 0.2

  button = createImg("assets/cut_btn.png")
  button.position(600,30)
  button.size(50,50)
  button.mouseClicked(function(){
    rope.break()
    link.break()
  })
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(bg);
  drawSprites()
  rope.display();
  push()
  imageMode(CENTER)
  image(fruitImg,fruit.position.x,fruit.position.y,80,80);
  pop()
  Engine.update(engine);
  //ground.display();

 
   
}