let colors = [];

function setup() {
  createCanvas(1000, 300);
  noLoop(); // Disegna una sola volta
  noStroke(); // No bordi

  // Palette di colori più vicina all'immagine (toni caldi e neutri)
  colors = [
    color(35, 31, 32),   // Nero scuro
    color(125, 74, 35),  // Marrone scuro
    color(188, 155, 115),// Marrone chiaro
    color(234, 216, 186),// Beige
    color(247, 237, 227),// Bianco sporco
    color(220, 194, 146),// Sabbia
    color(153, 113, 85), // Marrone medio
    color(204, 182, 168),// Grigio caldo
    color(239, 205, 188),// Rosa tenue
    color(200, 158, 170), // Big Bubble sbiadita
    color(70, 60, 57), // Grigio scuro
    
  ];
}

function draw() {
  background(255);

  // Layer per quadrati piccoli
  drawLayer(15000, 1, 20, 1, 3, 50, 200, 1, 5); // Quadrati, dimensioni tra 0.1 e 10px

  // Layer per quadrati grandi
  drawLayer(400, 20, 70, 2, 4, 30, 150, 1, 3); // Quadrati, dimensioni tra 20 e 50px
}

// Disegno un layer
function drawLayer(numSquares, minSize, maxSize, minStrokeWeight, maxStrokeWeight, minAlpha, maxAlpha, minLayers, maxLayers) {
  for (let i = 0; i < numSquares; i++) {
    // Posizione casuale
    let x = random(width);
    let y = random(height);

    // Genera un valore casuale tra 0 e 1 per determinare la dimensione
    let prob = random(1);
    let size;

     // Se prob è minore di x, crea quadrati piccoli
     if (prob < 0.99) {
      size = random(0.02, 7); // Quadrati piccoli
    } 
    // Altrimenti crea quadrati grandi
    else {
      size = random(10, 50); // Quadrati grandi
    }
 
      // Colore casuale dalla palette
    let col = random(colors);
    // Opacità
    let alpha = random(1000, 1000);
    fill(col.levels[0], col.levels[1], col.levels[2], alpha);
    
    // Margine casuale bianco o nero
    let borderColor = random([0, 255]); // Nero (0) o bianco (255)
    stroke(borderColor);
    strokeWeight(random(0.01, 2)); // Spessore del bordo variabile
    
    // Sovrapposizione tramite disegno di più rettangoli vicini
    let numLayers = floor(random(1, 5)); // Più rettangoli sovrapposti per effetto di caos

    for (let j = 0; j < numLayers; j++) {
      // Leggera variazione della posizione per ogni layer
      let offsetX = random(-size * 2, size * 2);
      let offsetY = random(-size * 2, size * 2);
      
      rect(x + offsetX, y + offsetY, size, size);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
