


var cnv;

function setup() {
  cnv= createCanvas(windowWidth,windowHeight,WEBGL);

  noStroke();
  ortho(-1600, 1600, 800, -800, 0.1, 100);
}
 function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
 }
function draw() {
  background(255);
  defineLights();
  for (var x = -800; x <= 800; x += 80) {
      push();
      translate(x,50);
      rotateY(map(mouseX, 0, width, 0, PI));
      rotateX(map(mouseY, 0, height, 0, PI));
      box(40);
      pop();
  }
    for (var x = -800; x <= 800; x += 80) {
      push();
      translate(x,200);
      rotateY(map(mouseX, 0, width, 0, PI));
      rotateX(map(mouseY, 0, height, 0, PI));
      box(40);
      pop();
    }
}


function defineLights() {
  pointLight(0, 204, 255,200, -150, 0);
  directionalLight(255, 153,204,0,0,1);
  ambientLight(255,255,255); //even red light across our objects
  ambientMaterial(120);

}
