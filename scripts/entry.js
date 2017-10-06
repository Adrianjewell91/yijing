import {exploreView} from "./explore.js"
import {oracleView} from "./oracle.js";

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("myCanvas");

  exploreView(500, 500);
  oracleView(835,500);

  const oracleButton = document.getElementById("oracle-button");
  const exploreButton = document.getElementById("explore-button");

  oracleButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (oracleButton.textContent === "Ask the Oracle") {
      document.getElementById("header-instruction")
      .textContent = "Instructions: Input your question below."
    } else {
      document.getElementById("header-instruction")
              .textContent = "Instructions: Click on the Hexagrams!"
    }

    e.currentTarget.textContent = 'Ask the Oracle';
    document.getElementById('explore-view').style.display = 'none';
    document.getElementById('show-explore-button').style.display= 'none';
    document.getElementById('oracle-view').style.display = 'flex';
    document.getElementById('o-buttons').style.display = 'flex';
    exploreButton.removeAttribute("disabled");

    oracleButton.classList.add("hidden");
  },false);


  document.getElementById("help-button").addEventListener("click", (e) => {
    document.getElementById("help-dropdown").classList.toggle('show');
  }, false);

});
