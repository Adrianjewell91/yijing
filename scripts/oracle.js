import * as Helpers from "./helpers.js";
import {database} from "./hexagrams.js";

export const oracleView = function OracleView (width, height) {
  const canvasEl = document.getElementById('oracle-canvas');
  const ctx = canvasEl.getContext("2d");

  ctx.clearRect(0,0,width,height);
  ctx.font = "30px Arial";

  ctx.fillText('The Present', 50, 50);
  ctx.fillText('The Future', 450, 50);

  const questionButton = document.getElementById('question-button');
  const questionInput = document.getElementById('question-input');


  questionButton.addEventListener('click', (e => {
    e.preventDefault();
    questionButton.textContent = "Generate."
    questionInput.setAttribute("disabled",'');
    questionInput.classList.add("disabled-input");
    document.getElementById("header-instruction")
            .textContent = "I Ching: Click 'Generate' six more times."
  }));

  let i = 0;
  const numberArr = ["five more times",
                      'four more times',
                      'three more times',
                      'two more times',
                      'one more time',
                      'results'];

  const guas = [[],[]];

  questionButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (i<6) {
        const lines = Helpers.yarrowGenerator();
        Helpers.drawOracleGua(lines[0], i, ctx, 50);
        Helpers.drawOracleGua(lines[1], i, ctx, 450);
        i = i+1;
        guas[0].push(lines[0]);
        guas[1].push(lines[1]);
        questionButton.textContent = `Generate.`;
        if (lines[0] !== lines[1]) {
          ctx.font = "15px Arial";
          ctx.fillText(`Is changing into:`, 320, 355-(i*40));
        }
        if (i===6){
          document.getElementById("header-instruction")
                  .textContent = "I Ching: Click again to generate the results.";
        } else {
          document.getElementById("header-instruction")
          .textContent = `I Ching: Click 'Generate' ${numberArr[i-1]}.`
        }
    } else {
      document.getElementById("header-instruction")
              .textContent = "I Ching: Click on a hexagram!";
      questionButton.textContent = "Generated!";
      questionButton.classList.add("disabled-input");
      document.getElementById("help-dropdown").classList.toggle("show");
      questionButton.setAttribute("disabled",'true');

      ctx.font = "30px Arial";
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
        if (guas[j].length === 6) {
          document.getElementById("e-buttons").style.display = "flex";
          document.getElementById('show-explore-button').textContent = 'Hide Info';
          document.getElementById('show-explore-button').style.display= 'inline';

          document.getElementById('explore-view').style.display= 'flex';
          document.getElementById('oracle-view').style.display= 'none';
          document.getElementById('o-buttons').style.display= 'none';
          document.getElementById('oracle-button').removeAttribute("disabled");
          document.getElementById('oracle-button').textContent="Back to Oracle";
          document.getElementById('explore-button').setAttribute("disabled", "true");

          document.getElementById("header-instruction")
                  .textContent = "I Ching: Click on the lines!"

          Helpers.drawGua(guas[j],
                  document.getElementById('explore-canvas')
                          .getContext('2d'),500);
          Helpers.setGuaDetails(guas[j]);

          const options = document.getElementById("gua-selector").options;

          for (let i=0; i<options.length; i++) {
            let gua = options[i];
            let array = Helpers.toArray(gua.value);

            if (Helpers.equals(guas[j], array) === true) {
              document.getElementById("gua-selector").selectedIndex = i;
              break;
            }
          }
        }

      }
    }
  }, false);

  // canvasEl.addEventListener("mousemove", (e) => {
  //   e.preventDefault();
  //   const rect = canvasEl.getBoundingClientRect();
  //   const xVal = e.clientX-rect.left;
  //   const yVal = e.clientY-rect.top;
  //   console.log(xVal);
  //   if ((xVal < 300) && (xVal > 50)) {
  //     ctx.strokeStyle='blue';
  //     ctx.rect(50, 100, 250, 220);
  //     ctx.stroke();
  //   } else {
  //     ctx.strokeStyle='white';
  //     ctx.rect(50, 100, 250, 220);
  //     ctx.rect(450, 100, 250, 220);
  //     ctx.stroke();
  //   }
  // }, false);

}


//on mouse click, build the next hexagram.
