// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let kitchen = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,0,0,0,0,1],
               [1,0,0,0,0,0,1],
               [1,0,0,0,0,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]];

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (let y = 0; y < kitchen.length; y++){
    for (let x = 0; x < kitchen[y].length; x++){
      if (kitchen[y][x] === 1){
        fill('black');
      }
      if (kitchen[y][x] === 0){
        fill('white');
      }      
      square(x,y,50);
    }
  }
}
