import * as Helpers from "./helpers.js";
import {database} from './hexagrams.js';

export const oracleView = function OracleView (width, height) {

  const canvasEl = document.createElement("CANVAS");
  canvasEl.setAttribute('id','myCanvas');
  canvasEl.width = width;
  canvasEl.height = height;
  document.getElementById("view").appendChild(canvasEl)
  const ctx = canvasEl.getContext("2d");
  ctx.clearRect(0,0,width,height);

  const guas = Helpers.yarrowGenerator();

  console.log(guas);
  ctx.clearRect(0,0,800,500);
  drawGua(guas[0], ctx, 75);
  drawGua(guas[1], ctx, 450);
}

export const drawGua = function drawGua(gua,ctx,x) {

  gua.forEach((el,i) => {
    if (el === 1) {
      drawYang("black", ctx, x,300-(i*40));
    } else {
      drawYin("black", ctx, x,300-(i*40));
    }
  });

  ctx.font = "30px Arial";
  ctx.fillText(`- ${database[`[${gua}]`].character}`, x, 400);
};

export const drawYin = function drawYin(color, ctx, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,100,20);
  ctx.fillRect(x+150,y,100,20);
};

export const drawYang =function drawYang(color, ctx, x,y) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,250,20);
};
