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
      //work on this part tomorrow -
      if (yVal < 320 && yVal > 300) {guaValue[0] = guaValue[0] === 1 ? 0 : 1;}
      if (yVal < 280 && yVal > 260) {guaValue[1] = guaValue[1] === 1 ? 0 : 1;}
      if (yVal < 240 && yVal > 220) {guaValue[2] = guaValue[2] === 1 ? 0 : 1;}
      if (yVal < 200 && yVal > 180) {guaValue[3] = guaValue[3] === 1 ? 0 : 1;}
      if (yVal < 160 && yVal > 140) {guaValue[4] = guaValue[4] === 1 ? 0 : 1;}
      if (yVal < 120 && yVal > 100) {guaValue[5] = guaValue[5] === 1 ? 0 : 1;}

      console.log(yVal);
      canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);

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
