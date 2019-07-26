let FONT;
let selectedText;

const quantities = {
  x: 150,
  y: 150,
}

const width = window.innerWidth; //1500;
const height = window.innerHeight;//1500;

const padding = {
  x: width / quantities.x,
  y: height / quantities.y
}

// const start = {
//   x: - width / 2 + padding.x / 2,
//   y: - height / 2 + padding.y / 2
// }

const start = {
  x: width / 4,
  y: height / 4
}


const limit = {
  x: quantities.x / 2,
  y: quantities.y / 2
}

let xoff = 0.01;

function preload() {
  FONT = loadFont('./Roboto/Roboto-Light.ttf')
}

function createPoint(x, y, index, testo) {
  const coeff = 20;
  textFont(FONT); 
  textSize(15)
  smooth();
  
  xoff = index.x < 50 ? index.x * 0.01 : index.x * -0.01
  x -= xoff
  
  fill('#FF0000');
  text(testo, x - padding.x / coeff, y);
  fill('#00FF00');
  text(testo, x, y - padding.y / coeff);
  fill('#0000FF');
  text(testo, x + padding.x / coeff, y);
}



function calculateXOffset(j, coeff) {
  return  j < limit.y ? (j % limit.y) * coeff : (quantities.y - 2 - j) * coeff
}

function calculateYOffset(i, coeff) {
  return i < limit.x ? (i % limit.x) * coeff : (quantities.x - 2 - i) * coeff
}



function drawPoints() {
  let x = start.x;
  let y = start.y;

  let coeff = 0.2;
  let xoff = 0;
  const limit = {
    x: quantities.x /2,
    y: quantities.y /2
  }
  console.log(limit)
  const charArray = ['/', '\\', '/', '/', '\\', '/', '\\', '\\']
  // const charArray = ['W', 'M', 'W', 'W', 'W', 'M', 'M', 'W']
  
  for (let i = 0; i < quantities.x; i++) {
    for (let j = 0; j < quantities.y; j++) {

      selectedText = charArray[Math.floor((i+j)/50)];

      // if ((i <= 50 && j <= 50) || i >= 50 && j >= 50) selectedText ='/'
      // if ((i < 50 && j < 50) || i > 50 && j > 50) selectedText = '/'
      
      // else selectedText = '\\'
      // if (i == 50 || j == 50) selectedText = '+'

      createPoint(x , y, {x: i, y: j}, selectedText)
      y += calculateYOffset(j, coeff)
    }

    y = start.y;    
    x += calculateXOffset(i, coeff);
  }
}


function setup() {
  // put setup code here
  console.log('PADDING: ', padding)
  createCanvas(width, height)
  background('black')
  drawPoints();
}


function draw() {

  // drawPoints();
}




