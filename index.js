const { createCanvas } = require("canvas");
const fs = require("fs");

// TODO: How to make p5 work with the canvas from node-canvas?
// clue is probably in: https://www.npmjs.com/package/node-p5
// global.window = {};
// global.now = 0;
// const p5 = require("p5");
// console.log(p5);

const width = 4880;
const height = 1500;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

// Make my own random walk design
// anyhting can go here
ctx.fillStyle = "white";
ctx.fillRect(0, 0, width, height);

let x = width / 2;
let y = height / 2;
const stepSize = 4;
// randomSeed(parseInt(number.value()));
for (let i = 0; i < 1000000; i++) {
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, stepSize, stepSize);
  const r = Math.floor(Math.random() * 4);
  switch (r) {
    case 0:
      x = x + stepSize;
      break;
    case 1:
      x = x - stepSize;
      break;
    case 2:
      y = y + stepSize;
      break;
    case 3:
      y = y - stepSize;
      break;
  }
}
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("test.png", buffer);
