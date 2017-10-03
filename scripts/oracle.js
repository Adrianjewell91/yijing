import * as Helpers from "./helpers.js";
import {database} from './hexagrams.js';

export const oracleView = function OracleView (width, height) {
  const canvasEl = document.createElement("CANVAS");
  const ctx = canvasEl.getContext("2d");

  canvasEl.setAttribute('id','oracleCanvas');
  canvasEl.width = width;
  canvasEl.height = height;
  document.getElementById("oracle-view").appendChild(canvasEl);
  ctx.clearRect(0,0,width,height);
  ctx.font = "30px Arial";

  ctx.fillText('The Present', 50, 50);
  ctx.fillText('The Future', 450, 50);

  const questionButton = document.createElement("BUTTON");
    questionButton.setAttribute("id",'question-button');
    questionButton.textContent = "Ask the Question."
  const questionInput = document.createElement("INPUT");
    questionInput.setAttribute("id",'question-input');
    questionInput.placeholder = "Input your question.";

  const generateLine = document.createElement("BUTTON");
    generateLine.textContent = "Generate the first line.";
    generateLine.setAttribute("id",'generate-line');
    generateLine.setAttribute("disabled",'');
    document.getElementById("o-buttons").appendChild(questionInput);
    document.getElementById("o-buttons").appendChild(questionButton);
    document.getElementById("o-buttons").appendChild(generateLine);

  questionButton.addEventListener('click', (e => {
    e.preventDefault();
    questionButton.setAttribute("disabled",'');
    questionInput.setAttribute("disabled",'');
    generateLine.removeAttribute("disabled");
  }));

  const directions = document.createElement("TEXTAREA");
    directions.setAttribute("id","directions");
    directions.style.fontSize = "20px";
    directions.setAttribute("disabled","true");
    directions.setAttribute("rows","18");
    directions.setAttribute("cols","30");
    document.getElementById("oracle-view").appendChild(directions);
    directions.textContent = `Instructions:

    1. Think carefully about a question that you have.

    2. Type the question into the prompt, and click "Ask the question".

    3. Generate the hexagrams, line by line, with the newly activated button.

    4. Interpret the hexagrams in the context of your own life.

    5. Click on either hexagram to view it in the 'explore' tab.`;

  let i = 0;
  const numberArr = ["second line",
                      'third line',
                      'fourth line',
                      'fifth line',
                      'sixth line',
                      'results below'];

  const guas = [[],[]];

  generateLine.addEventListener("click", (e) => {
    e.preventDefault();
    if (i<6) {
        const lines = Helpers.yarrowGenerator();
        drawOracleGua(lines[0], i, ctx, 50);
        drawOracleGua(lines[1], i, ctx, 450);
        i = i+1;
        guas[0].push(lines[0]);
        guas[1].push(lines[1]);
        generateLine.textContent = `Generate the ${numberArr[i-1]}.`
    } else {

      generateLine.textContent = "See the results below.";
      generateLine.setAttribute("disabled",'true');

      ctx.fillText(`- ${database[`[${guas[0]}]`].character}`, 175, 425);
      ctx.fillText(`- ${database[`[${guas[1]}]`].character}`, 575, 425);

      ctx.font = "20px Arial";
      ctx.fillText(`${database[`[${guas[0]}]`].title}`, 50, 375);
      ctx.fillText(`${database[`[${guas[1]}]`].title}`, 450, 375);
    }
  });

  canvasEl.addEventListener("click", (e) => {
    e.preventDefault();
    const rect = canvasEl.getBoundingClientRect();
    const xVal = e.clientX-rect.left;
    const yVal = e.clientY-rect.top;

    const xVals = [[50,300],[450,700]];

    for(let j=0; j<2; j++) {
      if ((xVal > xVals[j][0] && xVal< xVals[j][1]) && (yVal < 320 && yVal > 100)) {
        // ctx.strokeStyle='blue';
        // ctx.rect(xVals[j][0], 100, 250, 220);
        // ctx.stroke();
        if (guas[j].length === 6) {
          document.getElementById('explore-view').style.display= 'flex';
          document.getElementById('oracle-view').style.display= 'none';
          document.getElementById('oracle-button').removeAttribute("disabled");
          document.getElementById('oracle-button').textContent="Back to Oracle";
          document.getElementById('explore-button').setAttribute("disabled", "true");

        }
        //Open the explore-view, set the selected index to the gua,
        //
      }
    }

  }, false);
}


export const drawOracleGua = function drawOracleGua(gualine, i,ctx,x) {
    if (gualine === 1) {
      Helpers.drawYang("black", ctx, x,300-(i*40));
    } else {
      Helpers.drawYin("black", ctx, x,300-(i*40));
    }
};


//on mouse click, build the next hexagram.
