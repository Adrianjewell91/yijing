import {database} from "./hexagrams.js";
import {guas} from "./guas.js"

document.addEventListener("DOMContentLoaded", function() {
  const width = 500;
  const height = 500;

  const canvasEl = document.getElementById("myCanvas");

  canvasEl.width = width;
  canvasEl.height = height;

  const ctx = canvasEl.getContext("2d");
  let gua = [1,1,1,1,1,1];

  drawGua(gua,ctx,width);

  const guaSelector = document.createElement("SELECT");
  guaSelector.setAttribute("id", "gua-selector");
  document.body.appendChild(guaSelector);

  guas.forEach((gua) => {
    let choice = document.createElement("OPTION");
    choice.setAttribute("value", `${Object.values(gua)}`);
    let text = document.createTextNode(`${Object.keys(gua)}`);
    choice.appendChild(text);
    document.getElementById('gua-selector').appendChild(choice);
  });

  guaSelector.addEventListener("change", (e)=>{
    ctx.clearRect(0,0,width,height);
    drawGua(toArray(guaSelector.value), ctx, width);
  }, false);

});

  function drawGua(gua,ctx,width) {
    gua.forEach((el,i) => {
      if (el === 1) {
        drawYang("black", ctx, (width/4),300-(i*40));
      } else {
        drawYin("black", ctx, (width/4),300-(i*40));
      }
    });

    ctx.font = "30px Arial";
    ctx.fillText(`- ${database[`[${gua}]`].character}`, width/2, 400);
  }

  function drawYin(color, ctx, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,100,20);
    ctx.fillRect(x+150,y,100,20);
  }

  function drawYang(color, ctx, x,y) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,250,20);
  }

  function toArray(str) {
    let arr = [];
    for (let i = 0; i<str.length; i++) {
      if (i%2===0) {arr.push(parseInt(str[i]))}
    }
    return arr;
  }

  //POtentially for loading a random gua.
  // function shuffle(a) {
  //   for (let i=a.length; i; i--) {
  //     let j = Math.floor(Math.random()*i);
  //     [a[j],a[i-1]] = [a[i-1],a[j]];
  //   }
  //   return a;
  // }
