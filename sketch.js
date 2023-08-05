
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
box.shapeColor=("purple")
}

function draw() 
{

  // write the code to change background color 
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
  // to red when RIGHT_ARROW is pressed
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
   
  }

  
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

