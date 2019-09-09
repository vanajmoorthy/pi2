let pi = 4;
let div;
let iterations = 0;

let history = [];

function setup() {
    var canvas = createCanvas(windowWidth, 200, P2D);
    canvas.parent("sketch");
	// for (let i = 0; i < 40000; i++) {

	// }

    div = createDiv(pi).style("font-size", "43px");
}

function draw() {
	background(255);

	let denominator = iterations * 2 + 3;

	if (iterations % 2 == 0) {
		pi -= 4 / denominator;
	} else {
		pi += 4 / denominator;
    }
    
    history.push(pi);

    let piY = map(PI, 2, 4, height, 0);

    push();

    strokeWeight(2);
    stroke(255, 0, 0);
    line(0, piY, width, piY);

    pop();

    let spacing = width / history.length;

    strokeWeight(2);
    stroke(0);
    noFill();

    beginShape();
    for (let i = 0; i< history.length; i++) {
        let xPosition = i * spacing;
        let yPosition = map(history[i], 2, 4, height, 0);
        vertex(xPosition, yPosition);
    }
    endShape();

    div.html(pi);
    
    iterations++;
}
