import {database} from "./hexagrams.js";

export const drawGua = function drawGua(gua,ctx,width) {
  ctx.clearRect(0,0,width,500);
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

export const drawYin = function drawYin(color, ctx, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,100,20);
  ctx.fillRect(x+150,y,100,20);
}

export const drawYang =function drawYang(color, ctx, x,y) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,250,20);
}

export const toArray = function toArray(str) {
  let arr = [];
  for (let i = 0; i<str.length; i++) {
    if (i%2===0) {arr.push(parseInt(str[i]))}
  }
  return arr;
}

export const equals = function equals(arr1, arr2) {
  for (let i=0; i<arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {return false};
  }

  return true;
};

export const setGuaDetails = function setGuaDetails(guaCode) {
  const guaInfo = database[`[${guaCode}]`];


  document.getElementById('gua-detail').value = `${guaInfo.character}\n\n${guaInfo.title}\n\n${guaInfo.description}`;
}

//Potentially for loading a random gua.
// function shuffle(a) {
//   for (let i=a.length; i; i--) {
//     let j = Math.floor(Math.random()*i);
//     [a[j],a[i-1]] = [a[i-1],a[j]];
//   }
//   return a;
// }
