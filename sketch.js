var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var division =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var START =1;
//the new state of playing
var singleplayer=3;
var MULTIPLEPLAYER=4;
var PLAY =2;
var END =0;
var gameState = START;
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 30; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 30; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);

  if(gameState === START){
background("yellow");
textFont("bold")
fill("darkblue");
textSize(40);
text("Welcome to Plinko game!!",400,90)
textSize(30);
textFont("bold")
text("The rules for proceeding the game are as follows.....",300,150)
textSize(28);
textFont("italics")
fill("darkred");
text("1)Click on the screen where you wanted to drop the ball.....",200,220)
text("2)Prevent multiple clicks on the screen.",200,280)
text("3)This game can also played by two or more players.",200,340)
text("4)For multiplayer game press M .",200,400)
text("5)For singleplayer game press S .",200,460)
textSize(40);
fill("darkblue");
textFont("bold")
textFont("italics")
text(" This game is developed by SHRISTI RATHORE.....",220,550)
division.display=false;
ground.display=false;
if(keydown("s")){
  gamestate = "singleplayer";
}
  }
 /* textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);*/
  Engine.update(engine);
  //ground.display();
  

  
  if(gameState ==="singleplayer"){
background("black"); }

  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < division.length; k++) 
   {
     division[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}
function keyPressed(){
  if(keyCode === 115){
 gameState =singleplayer
  }
}