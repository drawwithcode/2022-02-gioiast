//creo un array per cambiare lingua
var myText = ["ciao", "hello", "salut", "hola", "olá", "hallo", "konnichiwa", "ni hao"];
let angle = 0;
let speed = 0.5;
let Bubbles = [];
//dichiaro un index per fare in modo che la lingua continui a cambiare
var index = 0;


function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES)

	//chiamo la classe
	for (let i = 0; i < 500 ; i ++) {
    Bubbles[i] = new Bubble (random(width), random(height), 10)
	}

}

function draw() {
	background(250, 50, 0);

	//creo lo sfondo di piccoli pallini
	for (let i = 0; i < Bubbles.length; i++){
		Bubbles[i].show();
		
	}
     
	//disegno il saluto che cambia cliccando e usando gli argument dell'array
     textFont("Silkscreen");
	 textAlign(CENTER, CENTER);
     textSize(72);
	 strokeWeight(6)
	 stroke(0)
	 fill(255)
	 text(myText[index], windowWidth/2, windowHeight/2+100);
     
	 //disegno le istruzioni
	 push()
	 textFont("Comfortaa");
	 textAlign(CENTER, CENTER);
     textSize(14);
	 strokeWeight(1)
	 fill(0);
	 text("click to change language", windowWidth/2, windowHeight/2+150);
	 pop()
    
	 //chiamo la funzione creata 
	drawFlower(windowWidth/2, windowHeight/2-150, 100, 255, 0, 255);
    

}

 // creo una funzione per creare il fiore con i petali che ruotano
function drawFlower(x, y, d, r, g, b){

    strokeWeight(3)
    fill (0, 255, 0)
    rect(x-25, y, 50, 200)


  for (let i = 4; i <= 10; i++) {
	
	
	const angle = i * frameCount * speed

	push()
	strokeWeight(3)
	fill(r, g, b)
	translate(width / 2, height / 2-150);
	rotate(angle)
	ellipse(50, 50, d, d)
	pop()
  }
	

	strokeWeight(3)
	fill(255, 220, 0);
	ellipse(x, y, d+25, d+25);

}

//creo la classe delle bubbles disposte randomicamente ad ogni refresh
class Bubble {
	constructor(posx, posy, radius) {

    this.x = posx;
	this.y = posy;
	this.radius = radius;
	}

	show() {
		strokeWeight(2);
		fill(255);
		ellipse(this.x, this.y, this.radius);
	}
    

}

// richiamo la funzione per poter interagire con il click 
function mousePressed() {
  index = index + 1;

  if (index == 6) {
	index = 0;
  }
}

//richiamo la funzione per la responsiveness 
function windowResized () {
	resizeCanvas(windowWidth, windowHeight);
}

