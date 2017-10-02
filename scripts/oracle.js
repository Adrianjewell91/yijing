export const oracleView = function OracleView (canvasEl, width, height) {

  canvasEl.width = width;
  canvasEl.height = height;

  const ctx = canvasEl.getContext("2d");
  ctx.clearRect(0,0,width,height);

}
