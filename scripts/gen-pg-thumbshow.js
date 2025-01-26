// SCROLLING THUMBNAIL BOX FOR TOP OF GENUS PAGES
// Notes & old code at bottom
// JSLint (browser version) 1/19/25:
// Only complains about line length (>80 char) and using
// "=> {}" shorthand when the function is too complex.

/* global document */ //Needed for ESLint
"use strict";
const genIdTag = document.querySelector(".genId");
const hostplantString = genIdTag.getAttribute("id");
const allTableRows = document.querySelectorAll(".r");
const allTableLowerTaxa = document.querySelectorAll(".r td:nth-child(4)");
const thumbArray = [];
const lowerTaxaArray = [];

// Use forEaches, not "for" loops (Doug Crockford). Old version at bottom.
allTableRows.forEach((tableRow) => {
  const recNum = tableRow.getAttribute("id");
  thumbArray.push(recNum);
});
allTableLowerTaxa.forEach((tableLowerTaxon) => {
  const recSumm = tableLowerTaxon.textContent;
  lowerTaxaArray.push(recSumm);
});

let nowIndex = 0;
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const nowThumb = document.getElementById("nowThumb");
const thumbToRec = document.getElementById("thumbToRec");
const printRecNum = document.getElementById("printRecNum");
const printRecSumm = document.getElementById("printRecSumm");

prevButton.addEventListener("click", () => {
  nowIndex = (nowIndex - 1 + thumbArray.length) % thumbArray.length;
  nowThumb.src = "000-img/" + hostplantString + "/thumbs/" + thumbArray[nowIndex] + ".jpg";
  thumbToRec.href = "#r" + thumbArray[nowIndex];
  printRecNum.textContent = thumbArray[nowIndex];
  printRecSumm.textContent = lowerTaxaArray[nowIndex];
});

nextButton.addEventListener("click", () => {
  nowIndex = (nowIndex + 1) % thumbArray.length;
  nowThumb.src = "000-img/" + hostplantString + "/thumbs/" + thumbArray[nowIndex] + ".jpg";
  thumbToRec.href = "#r" + thumbArray[nowIndex];
  printRecNum.textContent = thumbArray[nowIndex];
  printRecSumm.textContent = lowerTaxaArray[nowIndex];
});

//NOTES, OLD CODE

/* HTML components needed in each genus page for proper functioning of this script:
    >> A div with class="genId" and id correctly set to five-letter hostplant genus code (e.g., agera)
    >> A div named rlist, containing tr tags whose id attributes are set to the four-digit number codes
        (with no characters in the id strings other than the four digits)
    >> The code for the image box, including id's of prevButton, nextButton, nowThumb, thumbToRec, printRecNum
    >> Record details (lower part of page) each given an id of the four-digit record no. followed by "R"
    >> Thumbnail images stored in the correct place (e.g., 000-img/agera/0675.jpg)
*/
/* One of the two old for loops
for (const tableLowerTaxon of allTableLowerTaxa) {
  const recSumm = tableLowerTaxon.textContent;
  lowerTaxaArray.push(recSumm);
}
*/
/* Sample script for printing something on the page with JS
const para = document.createElement("p");
para.textContent = thumbArray + hostplantString;
document.body.appendChild(para);
*/