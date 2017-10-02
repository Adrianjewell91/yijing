import {exploreView} from "./explore.js"

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("myCanvas");

  exploreView(canvasEl, 500, 500);
});
