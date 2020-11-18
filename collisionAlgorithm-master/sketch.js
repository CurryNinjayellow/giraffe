var fixedRect, movingRect,go1,go2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1=createSprite(200,300,50,50);
  go1.shapeColor="yellow";
  go1.velocityX=2
  go2=createSprite(400,300,50,50);
  go2.shapeColor="white";
  go2.velocityX=-2;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,go2)){
    movingRect.shapeColor = "grey";
    go2.shapeColor = "grey";
  }
  else{
    movingRect.shapeColor = "green";
   go2.shapeColor = "green";
  }
  
  bounceOff(go1,go2);
  drawSprites();
}
