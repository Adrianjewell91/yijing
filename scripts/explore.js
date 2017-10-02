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
    const rect = document.getElementById("myCanvas").getBoundingClientRect();
    console.log(rect);
    console.log(e.clientX-rect.left);
    console.log(e.clientY-rect.top);
  }

  const width = 600;
  const height = 600;

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
