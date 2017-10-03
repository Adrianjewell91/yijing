import * as Helpers from "./helpers.js";
import {hexagramCodes} from "./hex_codes.js";


export const exploreView = function exploreView(width, height) {
  const canvasEl = document.createElement("CANVAS");
  canvasEl.setAttribute('id','exploreCanvas');
  canvasEl.width = width;
  canvasEl.height = height;
  document.getElementById("explore-view").appendChild(canvasEl);
  const ctx = canvasEl.getContext("2d");

  const guaSelector = document.createElement("SELECT");
    guaSelector.setAttribute("id", "gua-selector");
    document.getElementById("e-buttons").appendChild(guaSelector);

  hexagramCodes.forEach((gua) => {
    let choice = document.createElement("OPTION");
    choice.setAttribute("value", `${Object.values(gua)}`);
    let text = document.createTextNode(`${Object.keys(gua)}`);
    choice.appendChild(text);
    guaSelector.appendChild(choice);
  });

  guaSelector.addEventListener("change", (e)=>{
      Helpers.drawGua(Helpers.toArray(guaSelector.value), ctx, width);
      Helpers.setGuaDetails(guaSelector.value);
    }, false);

  const guaDetail = document.createElement("TEXTAREA");
    guaDetail.setAttribute("id","gua-detail");
    guaDetail.setAttribute("disabled","true");
    guaDetail.setAttribute("rows","18");
    guaDetail.setAttribute("cols","10");
    document.getElementById("e-buttons").appendChild(guaDetail);


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

  canvasEl.addEventListener("mousemove", (e) => {
    e.preventDefault();
    const rect = canvasEl.getBoundingClientRect();
    const guaValue = Helpers.toArray(guaSelector.value);

    const xVal = e.clientX-rect.left;
    const yVal = e.clientY-rect.top;
    //I want to rerender the regular gua when I'm outside of the it.
    if (xVal < (canvasEl.width*0.75) && xVal > canvasEl.width/4) {
      for(let i=0; i<6; i++) {
        if (yVal < 320-(40*i) && yVal > 300-(40*i)) {
          console.log('worked');
          Helpers.drawHighlightedYang('black',ctx,125,300-(40*i));
        } else if (yVal < 300-(40*i) && yVal > 280-(40*i)) {
          Helpers.drawGua(Helpers.toArray(guaSelector.value), ctx, 500);
        } else if (yVal < 100 || yVal > 320) {
          Helpers.drawGua(Helpers.toArray(guaSelector.value), ctx, 500);
        }
      }
    } else {
      Helpers.drawGua(Helpers.toArray(guaSelector.value), ctx, 500);
    }

  }, false);


  Helpers.drawGua([1,1,1,1,1,1],ctx,width);
  Helpers.setGuaDetails(guaSelector.value);
};
