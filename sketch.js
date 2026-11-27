// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let kitchen = 
[[1,1,1,1,1,1,1],
[1,0,0,0,0,0,1],
[1,0,0,0,0,0,1],
[1,0,0,0,0,0,1],
[1,0,0,0,0,0,1],
[1,0,0,0,0,0,1],
[1,1,1,1,1,1,1]];

const TILE_DIMENSIONS = kitchen.length;

let chef = {
  x: 400,
  y: 400,
  size: 50,
  speed: 5,
};
let squareSize;
let inWall;
async function setup() {
  createCanvas(windowWidth, windowHeight);
  squareSize = min(width,height)/TILE_DIMENSIONS;
}

function draw() {
  background(220);
  displayKitchen();
  displayChef();
  checkCollisions();
  moveChef();
}

function displayKitchen(){
  for (let y = 0; y < kitchen.length; y++){
    for (let x = 0; x < kitchen[y].length; x++){
      if (kitchen[y][x] === 1){
        fill('pink');
      }
      if (kitchen[y][x] === 0){
        fill('white');
      }           
      square(x*squareSize,y*squareSize,squareSize);
    }
  }
}    

function displayChef(){
  if (inWall){
    fill('blue');
  }
  fill('red');
  circle(chef.x,chef.y,chef.size);
}

function moveChef(){
  if (keyIsDown('a')){
    chef.x -= chef.speed;
  }
  if (keyIsDown('d')){
    chef.x += chef.speed;
  }
  if (keyIsDown('w')){
    chef.y -= chef.speed;
  }
  if (keyIsDown('s')){
    chef.y += chef.speed;
  }
}

function checkCollisions(){
  let x = Math.floor(chef.x/squareSize);
  let y = Math.floor(chef.y/squareSize);

  if (kitchen[y + 1][x] === 1){
    console.log('wall');
  }

  // inWall = collideRectCircle(x*squareSize, y*squareSize, squareSize, squareSize, chef.x, chef.y, chef.size);
}