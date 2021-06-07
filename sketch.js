const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine;
var world;
var maxDrops = 100
var drops = []
var umbrella;
var thunder;
var thunder1;
var thunder2;
var thunder3;
var thunder4;
var thunderCreated;

function preload(){
    thunder1 = loadImage("Image/1.png");
    thunder2 = loadImage("Image/2.png");
    thunder3 = loadImage("Image/3.png");
    thunder4 = loadImage("Image/4.png");
}

function setup(){
   createCanvas(500,700);
   engine = Engine.create();
    world = engine.world
    Engine.run(engine);
    if(frameCount%100 === 0){
        for(var i = 0; i<maxDrops; i++){
            drops.push(new Drop(random(0,500),random(0,500)))
        }
    }
    umbrella = new Umbrella(250,500);
    
    
}

function draw(){
    background(0);
    if(frameCount%100 === 0){
        thunderCreated = frameCount
        rand = Math.round(random(1,4))
        thunder = createSprite(random(0,500),25);
        if(rand === 1){
            thunder.addImage(thunder1);
        }
        else if(rand === 2){
            thunder.addImage(thunder2);
        }
        else if(rand === 3){
            thunder.addImage(thunder3);
        }
        else if(rand === 4){
            thunder.addImage(thunder4);
        }
    }
    if(thunderCreated+20 === frameCount && thunder){
        thunder.destroy();
    }
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updatePosition();
    }
    umbrella.display();
drawSprites();
}   

