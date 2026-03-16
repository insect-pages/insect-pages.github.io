// SCROLLING THUMBNAIL BOX FOR TOP OF GENUS PAGES

/* global document */
"use strict";

// Declare initial variables
const genIdTag = document.querySelector(".gen-pg");
const hostplantString = genIdTag.getAttribute("id");
const allTableRows = document.querySelectorAll(".r");
const allTableLowerTaxa = document.querySelectorAll(".r td:nth-child(4)");
const thumbArray = [];
const lowerTaxaArray = [];
const btnCont = document.querySelector("#btns");
const prevButton = document.createElement("button");
const nextButton = document.createElement("button");

// Configure and insert buttons
prevButton.setAttribute("id", "prev-button");
nextButton.setAttribute("id", "next-button");
prevButton.setAttribute("aria-label", "go back to previous record");
nextButton.setAttribute("aria-label", "advance to next record");
prevButton.innerHTML = "&lt;";
nextButton.innerHTML = "&gt;";
btnCont.appendChild(prevButton);
btnCont.appendChild(nextButton);

// Use forEaches, not "for" loops (Doug Crockford).
allTableRows.forEach((tableRow) => {
  const recNum = tableRow.getAttribute("id");
  thumbArray.push(recNum.slice(4));
});
allTableLowerTaxa.forEach((tableLowerTaxon) => {
  const recSumm = tableLowerTaxon.innerHTML;
  lowerTaxaArray.push(recSumm);
});

let nowIndex = 0;
const nowThumb = document.getElementById("now-thumb");
const thumbToRecImgLink = document.getElementById("thumb-to-rec_img");
const thumbToRecTxtLink = document.getElementById("thumb-to-rec_txt");
const printRecSumm = document.getElementById("print-rec-summ");

prevButton.addEventListener("click", () => {
  nowIndex = (nowIndex - 1 + thumbArray.length) % thumbArray.length;
  nowThumb.src = "../img/" + hostplantString + "/thumbs/" + thumbArray[nowIndex] + ".jpg";
  thumbToRecImgLink.href = "#r" + thumbArray[nowIndex];
  thumbToRecTxtLink.href = "#r" + thumbArray[nowIndex];
  thumbToRecTxtLink.textContent = thumbArray[nowIndex];
  printRecSumm.innerHTML = lowerTaxaArray[nowIndex];
});

nextButton.addEventListener("click", () => {
  nowIndex = (nowIndex + 1) % thumbArray.length;
  nowThumb.src = "../img/" + hostplantString + "/thumbs/" + thumbArray[nowIndex] + ".jpg";
  thumbToRecImgLink.href = "#r" + thumbArray[nowIndex];
  thumbToRecTxtLink.href = "#r" + thumbArray[nowIndex];
  thumbToRecTxtLink.textContent = thumbArray[nowIndex];
  printRecSumm.innerHTML = lowerTaxaArray[nowIndex];
});