var fixedRect, movingRect;

function setup() {
  createCanvas(400, 400);

  fixedRect = createSprite(300, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(100, 100, 80, 30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(180);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 && fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    movingRect.y - fixedRect.y < movingRect.height / 2 + fixedRect.height / 2 && fixedRect.y - movingRect.y <
    movingRect.height / 2 + fixedRect.height / 2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}