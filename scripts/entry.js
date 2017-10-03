import {exploreView} from "./explore.js"
import {oracleView} from "./oracle.js";

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("myCanvas");

  exploreView(500, 500);

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
    document.getElementById("buttons")
            .removeChild(document.getElementById('gua-selector'));
    document.getElementById("buttons")
            .removeChild(document.getElementById('gua-detail'));
    document.getElementById('view')
            .removeChild(document.getElementById("myCanvas"));
    exploreButton.removeAttribute("disabled");
    oracleButton.setAttribute("disabled", "true");

    //clear the html screen.
    oracleView(800,500);
    //call the function.
  },false);

  exploreButton.addEventListener('click', (e) => {
    e.preventDefault();
    oracleButton.removeAttribute("disabled");
    exploreButton.setAttribute("disabled", "true");
    document.getElementById('view')
    .removeChild(document.getElementById("myCanvas"));

    // document.getElementById("view")
    //         .removeChild(document.getElementById('buttons'));
    //clear the html screen.

    exploreView(500,500);
  },false);

});
