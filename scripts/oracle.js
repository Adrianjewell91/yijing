export const oracleView = function OracleView (width, height) {

  const canvasEl = document.createElement("CANVAS");
  canvasEl.setAttribute('id','myCanvas');
  canvasEl.width = width;
  canvasEl.height = height;
  document.getElementById("view").appendChild(canvasEl)
  const ctx = canvasEl.getContext("2d");
  ctx.clearRect(0,0,width,height);
}
