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
      .textContent = "I Ching: Input your question, and click 'Set.'"
    } else {
      // document.getElementById("header-instruction")
      // .textContent = "I Ching: What are these? Read about them to your right."
    }

    e.currentTarget.textContent = 'Ask the Oracle';
    document.getElementById('explore-view').style.display = 'none';
    document.getElementById('show-explore-button').style.display= 'none';
    document.getElementById('oracle-view').style.display = 'flex';
    document.getElementById('o-buttons').style.display = 'flex';
    exploreButton.removeAttribute("disabled");
    oracleButton.setAttribute("disabled", "true");

  },false);

  exploreButton.addEventListener('click', (e) => {
    e.preventDefault();
    oracleButton.removeAttribute("disabled");
    exploreButton.setAttribute("disabled", "true");
    document.getElementById('show-explore-button').style.display= 'inline';
    document.getElementById('explore-view').style.display = 'flex';
    document.getElementById('oracle-view').style.display = 'none';
    document.getElementById('o-buttons').style.display = 'none';
  },false);

  document.getElementById("help-button").addEventListener("click", (e) => {
    document.getElementById("help-dropdown").classList.toggle('show');
  }, false);

});
