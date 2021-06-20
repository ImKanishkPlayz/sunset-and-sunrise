const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time = 0;

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
     noStroke();
    textSize(35)
    fill("white")
    text("Time: " + time, width-300, 50)

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour >= 04 && hour <= 05){

        bg = "sunrise1.png";423251346123565222
    }
    else if(hour >= 06 && hour <= 07 ){

        bg = "sunrise2.png";
    }
    else if(hour >= 07 && hour <= 08){

        bg = "sunrise3.png";
    }
    else if(hour >= 08 && hour <= 09){

        bg = "sunrise4.png";
    }
    else if(hour >= 10 && hour <= 12){

        bg = "sunrise5.png";
    }
    else if(hour >= 13 && hour <= 15){

        bg = "sunrise6.png";
    }
    else if(hour >= 16 && hour <= 17){

        bg = "sunset7.png";
    }
    else if(hour >= 17 && hour <= 18){

        bg = "sunset8.png";
    }
    
    else if(hour >=19 && hour <= 22){

        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }
        
    backgroundImg = loadImage(bg);
    
}


