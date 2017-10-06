import * as Helpers from "./helpers.js";
import {database} from "./hexagrams.js";

export const oracleView = function OracleView (width, height) {
  const canvasEl = document.getElementById('oracle-canvas');
  const ctx = canvasEl.getContext("2d");

  ctx.clearRect(0,0,width,height);
  ctx.font = "30px Arial";

  ctx.fillText('This is your Present.', 50, 50);
  ctx.fillText('This is your Future.', 450, 50);

  const questionButton = document.getElementById('question-button');
  const questionInput = document.getElementById('question-input');

  questionButton.addEventListener('click', (e => {
    e.preventDefault();
    questionButton.textContent = "Generate."
    questionInput.setAttribute("disabled",'');
    questionInput.classList.add("disabled-input");
    document.getElementById("header-instruction")
            .textContent = "Instructions: Click 'Generate' six more times."
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
        questionButton.textContent = `Click Again!`;
        if (lines[0] !== lines[1]) {
          ctx.font = "15px Arial";
          ctx.fillText(`Is changing into:`, 320, 355-(i*40));
        }
        if (i===6){
          document.getElementById("header-instruction")
                  .textContent = "Instructions: Click again to generate the results.";
        } else {
          document.getElementById("header-instruction")
          .textContent = `Instructions: Click 'Generate' ${numberArr[i-1]}.`
        }
    } else {
      document.getElementById("header-instruction")
              .textContent = "Instructions: Interpret your Hexagrams by clicking on them!";
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

      canvasEl.addEventListener("mousemove", (e) => {
        e.preventDefault();
        const rect = canvasEl.getBoundingClientRect();
        const xVal = e.clientX-rect.left;
        const yVal = e.clientY-rect.top;
        if ((xVal < 300) && (xVal > 50)) {
          console.log("first");
          ctx.beginPath();
          ctx.arc(175, 75, 10, 0, 2*Math.PI);
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.fill();
          ctx.stroke();
        } else if ((xVal < 700) && (xVal > 450)){
          console.log("second");
          ctx.beginPath();
          ctx.arc(575, 75, 10, 0, 2*Math.PI);
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.fill();
          ctx.stroke();
        } else {
          console.log("neither");
          ctx.beginPath();
          ctx.arc(175, 75, 10, 0, 2*Math.PI);
          ctx.strokeStyle = "white";
          ctx.fillStyle = "white";
          ctx.fill();
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(575, 75, 10, 0, 2*Math.PI);
          ctx.strokeStyle = "white";
          ctx.fillStyle = "white";
          ctx.fill();
          ctx.stroke();
        }
      }, false);
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

          canvasEl.addEventListener("mouseleave", (e) => {
            ctx.beginPath();
            ctx.arc(175, 75, 10, 0, 2*Math.PI);
            ctx.strokeStyle = "white";
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(575, 75, 10, 0, 2*Math.PI);
            ctx.strokeStyle = "white";
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.stroke();
          }, false);

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
                  .textContent = "Instructions: Read the Info, or click on the lines!"

          Helpers.drawGua(guas[j],
                  document.getElementById('explore-canvas')
                          .getContext('2d'),500);
          Helpers.setGuaDetails(guas[j]);

          document.getElementById("oracle-button").classList.remove("hidden");

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


}
