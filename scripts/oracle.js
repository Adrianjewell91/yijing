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
  ctx.font = "30px Arial";

  ctx.fillText('The Present', 75, 50);
  ctx.fillText('The Future', 450, 50);

  const guas = Helpers.yarrowGenerator();



  for (let i = 0;i<6; i++) {
    drawOracleGua(guas[0][i], i, ctx, 75);
    drawOracleGua(guas[1][i], i, ctx, 450);
  }

  ctx.fillText(`- ${database[`[${guas[0]}]`].character}`, 200, 400);
  ctx.fillText(`- ${database[`[${guas[1]}]`].character}`, 575, 400);
}

export const drawOracleGua = function drawOracleGua(gualine, i,ctx,x) {
    if (gualine === 1) {
      Helpers.drawYang("black", ctx, x,300-(i*40));
    } else {
      Helpers.drawYin("black", ctx, x,300-(i*40));
    }
};
