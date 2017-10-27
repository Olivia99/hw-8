var shades=[10,20,33,44,55,66,77,88,99,110,120,130,140];
// var shade0 = 10;
// var shade1 = 20;
// var shade2 = 45;
// var shade3 = 25;
// var shade4 = 60;
 // fill(shade0, 100, 100);
 //  rect(0*width/5, 0, width/5, height);

function setup() { 
  createCanvas(900, 400);
	colorMode(HSB);
	noStroke();

for (var i=0; i<15; i++){
	rect[i]={
		x: i*(width/this.units),
		y: 0,
		w: width/this.units,
		h: height,
		s: shades[i],
		units: 8,
		drawRects: function(){
		fill(this.s,100,100);
		rect(this.x,this.y,this.w,this.h);
		},
		addUnits: function mouseClicked(){
			this.units+=1;
			},
}
}
}

function draw() { 
	for (var i=0;i<15;i++){
		rect[i].drawRects();
		rect[i].addUnits();
	}
}
