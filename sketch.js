let x;
let y;


function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}
function draw() {
  background("lilac")
x = x + random(-20,20);  
y = y + random(-20,20);
  if (x > 400) {
    x = 400;
  }
  let distancia;
  //distancia =sqrt(distanciaX*distanciaX + distanciaY*distanciaY)
  distancia = dist(mouseX,mouseY,x,y)
  circle(mouseX,mouseY,distancia);
  circle(x,y,10);
  fill("black")
  
  if(distancia< 3);
 if (mouseX == x && mouseY == y){
   text("Encontrei!", 200, 200);
niLoop();
}
}

