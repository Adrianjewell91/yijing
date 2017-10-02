import * as Helpers from "./helpers.js";
import {hexagramCodes} from "./hex_codes.js"

export const exploreView = function exploreView(canvasEl) {
  const width = 500;
  const height = 500;

  canvasEl.width = width;
  canvasEl.height = height;

  const ctx = canvasEl.getContext("2d");

  Helpers.drawGua([1,1,1,1,1,1],ctx,width);
  const guaSelector = document.createElement("SELECT");

  createSelector(guaSelector);
  createOptions();

  guaSelector.addEventListener("change", (e)=>{
    ctx.clearRect(0,0,width,height);
    Helpers.drawGua(Helpers.toArray(guaSelector.value), ctx, width);
  }, false);
};


function createSelector(guaSelector) {
  guaSelector.setAttribute("id", "gua-selector");
  document.body.appendChild(guaSelector);
}

export const createOptions = function createSelect(ctx) {
  hexagramCodes.forEach((gua) => {
    let choice = document.createElement("OPTION");
    choice.setAttribute("value", `${Object.values(gua)}`);
    let text = document.createTextNode(`${Object.keys(gua)}`);
    choice.appendChild(text);
    document.getElementById('gua-selector').appendChild(choice);
  });
}
