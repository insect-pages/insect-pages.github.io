/* global document window Request */

const speciesIdCont = document.querySelector(".sppId");
const speciesId = speciesIdCont.getAttribute("id");
const recordLoc = "#r" + speciesId;
const recTxtNewHome = document.getElementById("recTxtNewHome");
const getGenusPage = new Request("../agera.html");

window
  .fetch(getGenusPage)
  .then((genPg) => {
    if (!genPg.ok) {
      throw new Error(`Zoinks! Something went wrong. Status: ${genPg.status}`);
    }
    else {
      const recTxtOldHome = genPg.querySelector(recordLoc);
      const recTxt = recTxtOldHome.innerHTML;
      recTxtNewHome.innerHTML = recTxt;
    }
  })