let bloom; // Declare object
let Bunch = [];
let Min = [];
let Blo = [];


function mousePressed(){
if (over(diam)){
  redd = 255;
  greenn = 10;
  bluee = 20;
}else if (over(3*diam)){
  redd = 255;
  greenn = 170;
  bluee = 210;
}else if (over(5*diam)){
  redd = 150;
  greenn = 100;
  bluee = 255;
}else if (over(7*diam)){
    redd = 135;
  greenn = 160;
  bluee = 255;
}else if (over(9*diam)){
  redd = 100;
  greenn = 190;
  bluee = 255;
}
}


function setup() {
  createCanvas(1000, 500);
  background(0);
  radius = 500;
  bump = 50;
  count = 60;
  minicount=count;
  budcount = 0;
  for (i=0;i<count;i++){
    if (i%5==0){
      radius -= random(0,5);
    }
    wd = width/2 + random(-radius,radius);
    ht = height/2 + random(radius)/2 + random(-sqrt(sq(radius)-sq(width/2-wd)), sqrt(sq(radius)-sq(width/2-wd)))/2;
    stem = new Stem(wd,ht);
    Bunch[i] = stem;
    mini = new Mini(wd,ht);
    Min[i] = mini;
    run =0;
}
  frameRate(10);
        redd = random(0,150);
      greenn = random(170,255);
      bluee = random(20,220);
  

diam = height/11;
by = 30;
redx = diam;
pinkx = 3*diam;
purplex = 5*diam;
perryx = 7*diam;
bluex = 9*diam;
}

function draw() { 
  noStroke();
  fill(255,0,10);
  rect(diam, diam, diam, diam);
  fill(255,170,210);
  rect(diam, 3*diam, diam, diam);
  fill(150,100,255);
  rect(diam, 5*diam, diam, diam);
  fill(135,160,255);
  rect(diam, 7*diam, diam, diam);
  fill(100,190,255);
  rect(diam, 9*diam, diam, diam);
  
  run++;
  radius = 450;
  
  for (i=0;i<10;i++){
    wd = width/2 +40 + random(-radius,radius);
    ht = height/2 + random(radius)/2 + random(-sqrt(sq(radius)-sq(width/2-wd)), sqrt(sq(radius)-sq(width/2-wd)))/2;
    stem = new Stem(wd,ht);
    Bunch[count] = stem;
    count++;
}
  
    
  for (i=0;i<count;i++){
    /*if (i%30==0){
      mini = new Mini(Bunch[i].cX,Bunch[i].cY);
      Min[minicount] = mini;
      minicount++;
    }*/
     if (run%20==0){
      bud = new Bud(Bunch[i].cX,Bunch[i].cY);
      bud.updatecolors(redd,greenn,bluee);
      Blo[budcount] = bud;
      budcount++;
    }
    for (j=0;j<10;j++){
    if (Bunch[i].cY>Bunch[i].end){
      Bunch[i].display();
      Bunch[i].move();
    } else {
      Bunch[i].r = random(225,255);
      Bunch[i].g = random(50,150);
      Bunch[i].b = random(50,100);
    }
    }
  }
  for (i=0;i<minicount;i++){   
    if (Min[i].cY>(Min[i].end+random(-10,10))){
      Min[i].display();
      Min[i].move();
    }
  }
 for (i=0;i<budcount;i++){
   if (Blo[i].count<Blo[i].max){
     Blo[i].updatecolors(redd,greenn,bluee);
      Blo[i].display();
      Blo[i].move();
   } else if (Blo[i].yel<Blo[i].yelmax) {
     Blo[i].yellow();
     Blo[i].display();
  }
}
}

function over(x) {
  if (mouseX >= by && mouseX <= by+diam && mouseY >= x && mouseY <= x+diam){
    return true;
  } else {
    return false;
}
}

class Stem {
  constructor(w,h) {
    this.bump = random(10);
    this.cX = w + random(-this.bump, this.bump);
    this.cY = h + random(-this.bump, this.bump);
    //this.cY = h + random(-sqrt(sq(this.bump)-sq(abs(w-this.cX))),sqrt(sq(this.bump)-sq(abs(w-this.cX))));
    this.diameter = 2;
    this.r = random(0,150);
    this.g = random(170,255);
    this.b = random(20,220);
    this.end = h-random(4,30);
  }
  move() {
    this.cX += random(-1,1);
    this.cY += random(-1,0);
    if (random(5)==1){
      this.cY += random(-1,1);
    }
    this.r += random(-2,2);
    this.g += random(-2,2);
    this.b += random(-2,2);
  }
  display() {
    fill(this.r, this.g, this.b, 100);
    noStroke();
    ellipse(this.cX, this.cY, this.diameter, this.diameter);
  }
}
class Mini {
  constructor(w,h) {
    this.bump = random(10);
    this.cX = w + random(-this.bump, this.bump);
    this.cY = h + random(-this.bump, this.bump);
    //this.cY = h + random(-sqrt(sq(this.bump)-sq(abs(w-this.cX))),sqrt(sq(this.bump)-sq(abs(w-this.cX))));
    this.diameter = 2;
    this.r = random(0,150);
    this.g = random(170,255);
    this.b = random(20,220);
    this.end = h-random(4,30);
  }
  move() {
    this.r += random(-2,2);
    this.g += random(-2,2);
    this.b += random(-2,2);
    this.cX += random(-1,1);
    this.cY += random(-1,0);
    if (random(5)==1){
      this.cY += random(-1,1);
    }
  }
  display() {
    fill(this.r, this.g, this.b, 100);
    noStroke();
    ellipse(this.cX, this.cY, this.diameter, this.diameter);
  }
}
  
class Bud {
  constructor(w,h) {
    this.startx = w;
    this.starty = h;
    this.cX = w;
    this.cY = h;
    //this.cY = h + random(-sqrt(sq(this.bump)-sq(abs(w-this.cX))),sqrt(sq(this.bump)-sq(abs(w-this.cX))));
    this.diameter = 2;
    this.r = 255;
    this.g = random(50,150);
    this.end = h-random(4,30);
    this.count = 0;
    this.max = random(20,50);
    this.yel = 0;
    this.yelmax = random(2,10);
  }
  move() {
    this.r += random(-2,2);
    this.g += random(-2,2);
    this.b += random(-2,2);
    this.cX += random(-1,1);
    this.cY += random(-1,1);
    this.count++;
  }
  yellow() {
    this.r += random(230,255);
    this.g = random(150,255);
    this.b = 0;
    this.cX = this.startx + random(-1,1);
    this.cY = this.starty + random(-1,1);
    this.yel++;
  }
  updatecolors(re,gree,blu){
    this.r = re+ random(-5,5);
    this.g = gree+ random(-5,5);
    this.b = blu+ random(-5,5);
  }
  display() {
    fill(this.r, this.g, this.b, 50);
    noStroke();
    ellipse(this.cX, this.cY, this.diameter, this.diameter);
  }
}
