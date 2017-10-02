import * as Helpers from "./helpers.js";
import {hexagramCodes} from "./hex_codes.js"

export const exploreView = function exploreView(canvasEl, width, height) {

  //1. Set up the canvas, and the buttons.
  //1.5 Draw the gua, and set the buttons.
  //2. Set up the listers.
  canvasEl.width = width;
  canvasEl.height = height;

  const ctx = canvasEl.getContext("2d");
  Helpers.drawGua([1,1,1,1,1,1],ctx,width);

  const guaSelector = document.createElement("SELECT");
  guaSelector.setAttribute("id", "gua-selector");
  document.getElementById("buttons").appendChild(guaSelector);

  hexagramCodes.forEach((gua) => {
    let choice = document.createElement("OPTION");
    choice.setAttribute("value", `${Object.values(gua)}`);
    let text = document.createTextNode(`${Object.keys(gua)}`);
    choice.appendChild(text);
    guaSelector.appendChild(choice);
  });

  const guaDetail = document.createElement("TEXTAREA");
  guaDetail.setAttribute("id","gua-detail");
  guaDetail.setAttribute("disabled","true");
  guaDetail.setAttribute("rows","20");
  guaDetail.setAttribute("cols","50");

  document.getElementById("buttons").appendChild(guaDetail);
  Helpers.setGuaDetails(guaSelector.value);

  guaSelector.addEventListener("change", (e)=>{
    Helpers.drawGua(Helpers.toArray(guaSelector.value), ctx, width);
    Helpers.setGuaDetails(guaSelector.value);
  }, false);

  canvasEl.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const rect = canvasEl.getBoundingClientRect();
    const guaValue = Helpers.toArray(guaSelector.value);

    const xVal = e.clientX-rect.left;
    const yVal = e.clientY-rect.top;

    if (xVal < (canvasEl.width*0.75) && xVal > canvasEl.width/4) {
      for(let i=0; i<6; i++) {
        if (yVal < 320-(40*i) && yVal > 300-(40*i)) {
          guaValue[i] = guaValue[i] === 1 ? 0 : 1;
        }
      }

      const options = guaSelector.options;

      for (let i=0; i<options.length; i++) {
        let gua = options[i];
        let array = Helpers.toArray(gua.value);

        if (Helpers.equals(guaValue, Helpers.toArray(gua.value)) === true) {
          guaSelector.selectedIndex = i;
          break;
        }
      }

      Helpers.drawGua(guaValue, ctx, width);
      Helpers.setGuaDetails(guaValue);
    }
  }, false);

};

// const createCanvas = function createCanvas(width, height) {
//   canvasEl.width = width;
//   canvasEl.height = height;
//
//   const ctx = canvasEl.getContext("2d");
//   Helpers.drawGua([1,1,1,1,1,1],ctx,width);
//   return ctx;
// }
//
// const createSelector = function createSelector() {
//   const guaSelector = document.createElement("SELECT");
//   guaSelector.setAttribute("id", "gua-selector");
//   document.getElementById("buttons").appendChild(guaSelector);
//   return guaSelector;
// }
//
// const createOptions = function createOptions(guaSelector) {
//   hexagramCodes.forEach((gua) => {
//     let choice = document.createElement("OPTION");
//     choice.setAttribute("value", `${Object.values(gua)}`);
//     let text = document.createTextNode(`${Object.keys(gua)}`);
//     choice.appendChild(text);
//     hexSelector.appendChild(choice);
//   });
// }
//
// const changeGuaParams = function changeGuaParams(e) {
//   e.preventDefault();
//   const canvas = document.getElementById("myCanvas");
//   const rect = canvas.getBoundingClientRect();
//   const guaValue = Helpers.toArray(document.getElementById('gua-selector')
//   .value);
//
//   const xVal = e.clientX-rect.left;
//   const yVal = e.clientY-rect.top;
//
//
//   if (xVal < (canvas.width*0.75) && xVal > canvas.width/4) {
//     for(let i=0; i<6; i++) {
//       if (yVal < 320-(40*i) && yVal > 300-(40*i)) {
//         guaValue[i] = guaValue[i] === 1 ? 0 : 1;
//       }
//     }
//
//     const selector = document.getElementById('gua-selector');
//     const options = selector.options;
//
//     for (let i=0; i<options.length; i++) {
//       let gua = options[i];
//       let array = Helpers.toArray(gua.value);
//
//       if (Helpers.equals(guaValue, Helpers.toArray(gua.value)) === true) {
//         selector.selectedIndex = i;
//         break;
//       }
//     }
//
//     Helpers.drawGua(guaValue, canvas.getContext('2d'),canvas.width);
//     Helpers.setGuaDetails(guaValue);
//   }
// }
//
// /////////The Actual code
//
// const width = 500;
// const height = 500;
//
// const ctx = createCanvas(width, height);
// const hexSelector = createSelector();
//
// createOptions(hexSelector);
//
// const guaDetail = document.createElement("TEXTAREA");
// guaDetail.setAttribute("id","gua-detail");
// guaDetail.setAttribute("disabled","true");
// guaDetail.setAttribute("rows","20");
// guaDetail.setAttribute("cols","50");
//
// document.getElementById("buttons").appendChild(guaDetail);
// Helpers.setGuaDetails(hexSelector.value);
//
// hexSelector.addEventListener("change", (e)=>{
//   ctx.clearRect(0,0,width,height);
//   Helpers.drawGua(Helpers.toArray(hexSelector.value), ctx, width);
//   Helpers.setGuaDetails(hexSelector.value);
// }, false);
//
// canvasEl.addEventListener("mousedown", changeGuaParams, false);
