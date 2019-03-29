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

  ctx.font = "20px Arial";
  ctx.fillText(`${database[`[${gua}]`].title}`, width/4, 375);
  ctx.font = "30px Arial";
  ctx.fillText(`- ${database[`[${gua}]`].character}`, width/2, 425);
}

export const drawOracleGua = function drawOracleGua(gualine, i,ctx,x) {
    if (gualine === 1) {
      drawYang("black", ctx, x,300-(i*40));
    } else {
      drawYin("black", ctx, x,300-(i*40));
    }
    if (i<5) {
      ctx.font = "20px Arial";
      ctx.fillText(`CLICK`, 70, 280-(i*40));
      ctx.fillText(`AGAIN`, 220, 280-(i*40));
      ctx.fillText(`CLICK`, 470, 280-(i*40));
      ctx.fillText(`AGAIN`, 620, 280-(i*40));
    }
};

export const drawYin = function drawYin(color, ctx, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,100,20);
  ctx.fillRect(x+150,y,100,20);
}

export const drawYang =function drawYang(color, ctx, x,y) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,250,20);
}

export const drawHighlightedYang = function drawHighlightedYang (color, ctx, x,y) {
  ctx.beginPath();
  ctx.arc(x+260, y+10, 5, 0, 2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x-10, y+10, 5, 0, 2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();
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

  document.getElementById('gua-detail')
          .value = `${guaInfo.character}\n\n${guaInfo.title}\n\n${guaInfo.description}`;
}

export const yarrowGenerator = function yarrowGenerator() {

  //Traditional Coin Toss Method
  let lineValue = 0;
  let flipValue = 0;
  for (let i=0;i<3;i++) {
    flipValue = Math.round(Math.random());
    lineValue += flipValue === 0 ? 2 : 3;
  }
  //if ans === 6 [1,0], 7 [1,1], 8[0,0], 9[0,1]
  if (lineValue === 6) {return [1,0];}
  else if (lineValue === 7) {return [1,1];}
  else if (lineValue === 8) {return [0,0];}
  else if (lineValue === 9) {return [0,1];}
}

export const drawOverheadCircle = function drawOverheadCircle(color, ctx, x) {
  ctx.beginPath();
  ctx.arc(x, 75, 10, 0, 2*Math.PI);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}
