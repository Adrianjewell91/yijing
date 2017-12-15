import {exploreView} from "./explore.js"
import {oracleView} from "./oracle.js";

document.addEventListener("DOMContentLoaded", function() {
  //Modal Logic - taken from W3 - just some basic vanilla js.
  // // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementsByClassName("about-button")[0];

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.addEventListener("click", function(e) {
      modal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function(e) {
      modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function(e) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });

  const canvasEl = document.getElementById("myCanvas");

  exploreView(500, 500);
  oracleView(835,500);

  const oracleButton = document.getElementById("oracle-button");
  const exploreButton = document.getElementById("explore-button");

  oracleButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (oracleButton.textContent === "Consult the Oracle") {
      document.getElementById("header-instruction")
      .textContent = "Think deeply about a question."
    } else {
      document.getElementById("header-instruction")
              .textContent = "Click on the Hexagrams!"
    }

    e.currentTarget.textContent = 'Consult the Oracle';
    document.getElementById('explore-view').style.display = 'none';
    document.getElementById('show-explore-button').style.display= 'none';
    document.getElementById('oracle-view').style.display = 'flex';
    document.getElementById('o-buttons').style.display = 'flex';

    oracleButton.classList.add("hidden");
  },false);
});
