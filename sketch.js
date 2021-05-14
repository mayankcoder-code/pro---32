const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hour = 0;

var bg ;
var backgroundImg 
function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
  
    bac2 =loadImage("sunrise1.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
     background(backgroundImg);
    else{
        background(bac2);
    }
    Engine.update(engine);

    // write code to display time in correct format here
      text("time:"+hour,200,200)
    
}

async function getBackgroundImg(){

    // write code to fetch time from API
     var response = await fetch("http://worldclockapi.com/api/json/cst/now")

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.currentDateTime;

    // write code slice the datetime
   
     hour = datetime.slice(11,13);
     console.log(hour);

    // add conditions to change the background images from sunrise to sunset
       if(hour >=01 && hour <=06){
           bg = "sunrise5.png";
       }else if(hour >=07 && hour <=09){
           bg = "sunrise2.png";
       }else if(hour >=10 && hour <=12){
           bg = "sunset10.png";
       }else if(hour >=13 && hour <=19){
           bg = "sunset11.png";
       }else if(hour >=20 && hour<=24){
           bg = "sunset12.png";
       }
        
    //load the image in backgroundImg variable here
      backgroungImg = loadImage(bg);
}
