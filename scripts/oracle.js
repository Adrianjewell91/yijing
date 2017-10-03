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


  const questionButton = document.createElement("BUTTON");
  questionButton.setAttribute("id",'question-button');
  questionButton.textContent = "Ask the Question."
  const questionInput = document.createElement("INPUT");
  questionInput.setAttribute("id",'question-input');
  questionInput.placeholder = "Input your question."

  const generateLine = document.createElement("BUTTON");
  generateLine.textContent = "Generate a line."
  generateLine.setAttribute("id",'generate-line');
  generateLine.setAttribute("disabled",'');
  document.getElementById("buttons").appendChild(questionInput);
  document.getElementById("buttons").appendChild(questionButton);
  document.getElementById("buttons").appendChild(generateLine);

  questionButton.addEventListener('click', (e => {
    e.preventDefault();
    questionButton.setAttribute("disabled",'');
    questionInput.setAttribute("disabled",'');
    generateLine.removeAttribute("disabled");
  }))

  generateLine.addEventListener("click", (e) => {
    e.preventDefault();
    const guas = Helpers.yarrowGenerator();
    for (let i = 0;i<6; i++) {
      drawOracleGua(guas[0][i], i, ctx, 75);
      drawOracleGua(guas[1][i], i, ctx, 450);
    }

    generateLine.textContent = "See your results to the right."

    ctx.fillText(`- ${database[`[${guas[0]}]`].character}`, 200, 425);
    ctx.fillText(`- ${database[`[${guas[1]}]`].character}`, 575, 425);

      ctx.font = "20px Arial";
    ctx.fillText(`${database[`[${guas[0]}]`].title}`, 75, 375);
    ctx.fillText(`${database[`[${guas[1]}]`].title}`, 450, 375);
  });
}

export const drawOracleGua = function drawOracleGua(gualine, i,ctx,x) {
    if (gualine === 1) {
      Helpers.drawYang("black", ctx, x,300-(i*40));
    } else {
      Helpers.drawYin("black", ctx, x,300-(i*40));
    }
};


//on mouse click, build the next hexagram.
