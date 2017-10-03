import {exploreView} from "./explore.js"
import {oracleView} from "./oracle.js";

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("myCanvas");

  exploreView(500, 500);
  oracleView(800,500);

  const oracleButton = document.createElement("BUTTON");
    oracleButton.setAttribute("id", "oracle-button");
    oracleButton.textContent = "Ask the Oracle";
    document.getElementById("header").appendChild(oracleButton);

  const exploreButton = document.createElement("BUTTON");
      exploreButton.setAttribute("id", "explore-button");
      exploreButton.setAttribute("disabled", "true");
      exploreButton.textContent = "Explore";
      document.getElementById("header").appendChild(exploreButton);

  oracleButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('explore-view').style.display = 'none';
    document.getElementById('oracle-view').style.display = 'flex';
    document.getElementById('o-buttons').style.display = 'flex';
    exploreButton.removeAttribute("disabled");
    oracleButton.setAttribute("disabled", "true");

    //clear the html screen.
    //call the function.
  },false);

  exploreButton.addEventListener('click', (e) => {
    e.preventDefault();
    oracleButton.removeAttribute("disabled");
    exploreButton.setAttribute("disabled", "true");
    document.getElementById('explore-view').style.display = 'flex';
    document.getElementById('oracle-view').style.display = 'none';
    document.getElementById('o-buttons').style.display = 'none';


  },false);

});
