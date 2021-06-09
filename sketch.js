const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    } 

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Australia/Brisbane");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour >= 06 && hour <= 08 || hour >= 10 && hour <= 12 || hour >= 14 && hour <= 16){
        bg = "sunrise1.png";
    }
    else{
        bg = "sunrise2.png";
        bg = "sunrise3.png";
        bg = "sunrise4.png";
        bg = "sunrise5.png";
        bg = "sunrise6.png";
    }
    
    

    backgroundImg = loadImage(bg);
    
}


