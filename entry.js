document.addEventListener("DOMContentLoaded", function() {
  const width = 500;
  const height = 500;

  const canvasEl = document.getElementById("myCanvas");

  canvasEl.width = width;
  canvasEl.height = height;

  const ctx = canvasEl.getContext("2d");

  let gua = [0,1,1,1,1];

  gua.forEach((el,i) => {
    if (el === 1) {
      drawYang("black", ctx, (width/4),100+(i*40));
    } else {
      drawYin("black", ctx, (width/4),100+(i*40));
    }
  });
});

  function drawYin(color, ctx, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,100,20);
    ctx.fillRect(x+150,y,100,20);
  }

  function drawYang(color, ctx, x,y) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,250,20);
  }

  function shuffle(a) {
    for (let i=a.length; i; i--) {
      let j = Math.floor(Math.random()*i);
      [a[j],a[i-1]] = [a[i-1],a[j]];
    }
    return a;
  }
