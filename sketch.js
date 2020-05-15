const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,fox
var backgroundImg,platform;
var bird, slingshot;
var score = 0;


function preload() {
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    fox1 = new Fox(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    fox2 = new Fox(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    log6 = new Log(580,260,280,PI/600);
    log7 = new Log(1040,260,280,PI/600);
    log8 = new Log(580,90,120,PI/2);
    log9 = new Log(1040,90,120,PI/2);
    fox3 = new Fox(580,60);
    fox4 = new Fox(1040,60);

    lion = new Lion(200,50);
    slingshot = new SlingShot(lion.body,{x:200, y:50});
    
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    fill("red")
    textSize(30)
    text("Score : " + score,700,50);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    fox1.display();
    log1.display();

    box3.display();
    box4.display();
    fox2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();

    fox3.display();
    fox4.display();

    lion.display();
    platform.display();
    //log6.display();
    slingshot.display();   
    fox1.score();
    fox2.score(); 
    fox3.score();
    fox4.score();
}

function mouseDragged(){
   
    Matter.Body.setPosition(lion.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
 
    slingshot.fly();
    Matter.Body.setPosition(lion.body, {x: 200 , y: 50});
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(lion.body);
    }
}
async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour);
    if(hour>=6 && hour<=22 ){
        backgroundImg = loadImage("sprites/amuse.png");
    }
    else{
          backgroundImg = loadImage("sprites/house.jpg");
    }
}

  