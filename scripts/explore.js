import * as Helpers from "./helpers.js";
import {hexagramCodes} from "./hex_codes.js"

//these are not pure functions!

export const exploreView = function exploreView(canvasEl) {

  const createCanvas = function createCanvas(width, height) {
    canvasEl.width = width;
    canvasEl.height = height;

    const ctx = canvasEl.getContext("2d");
    Helpers.drawGua([1,1,1,1,1,1],ctx,width);
    return ctx;
  }

  const createSelector = function createSelector() {
    const guaSelector = document.createElement("SELECT");
    guaSelector.setAttribute("id", "gua-selector");
    document.body.appendChild(guaSelector);
    return guaSelector;
  }

  const createOptions = function createOptions(hexSelector) {
    hexagramCodes.forEach((gua) => {
      let choice = document.createElement("OPTION");
      choice.setAttribute("value", `${Object.values(gua)}`);
      let text = document.createTextNode(`${Object.keys(gua)}`);
      choice.appendChild(text);
      hexSelector.appendChild(choice);
    });
  }

  const changeGuaParams = function changeGuaParams(e) {
    e.preventDefault();
    const canvas = document.getElementById("myCanvas");
    const rect = canvas.getBoundingClientRect();
    const guaValue = Helpers.toArray(document.getElementById('gua-selector')
                            .value);
    const xVal = e.clientX-rect.left;
    const yVal = e.clientY-rect.top;

    //if the x is between two numbers and the y value is between two numbers?
    if (xVal < (canvas.width*0.75) && xVal > canvas.width/4) {
      //work on this part tomorrow;
      guaValue[0] = 0;

      canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
      //move the selector to that hexagram code via the hexagram code database.
      const selector = document.getElementById('gua-selector');
      const options = selector.options;

      for (let i=0; i<options.length; i++) {
        let gua = options[i];
        let array = Helpers.toArray(gua.value);

        if (Helpers.equals(guaValue, Helpers.toArray(gua.value)) === true) {
          selector.selectedIndex = i;
          break;
        }
      }

      Helpers.drawGua(guaValue, canvas.getContext('2d'),canvas.width);
    }
  }


  const width = 500;
  const height = 500;

  const ctx = createCanvas(width, height);
  const hexSelector = createSelector();

  createOptions(hexSelector);

  hexSelector.addEventListener("change", (e)=>{
    ctx.clearRect(0,0,width,height);
    Helpers.drawGua(Helpers.toArray(hexSelector.value), ctx, width);
  }, false);

  canvasEl.addEventListener("mousedown", changeGuaParams, false);
};

//If the mouse is over one of the gua then oppose the value in that gua and rerender.
