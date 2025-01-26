/* Slideshow for species pages */

/* global document */ //Needed for ESLint
"use strict";

const figIds = [];
const figs = document.querySelectorAll(".fig-holder figure");
figs.forEach((fig) => {
  const figId = fig.getAttribute("id");
  figIds.push(figId);
});

const nextLinks = document.querySelectorAll(".next");
const prevLinks = document.querySelectorAll(".prev");
let i = 0;
let nextLinkHrefLoc = 0;

nextLinks.forEach((nextLink) => {
  nextLinkHrefLoc = (i + 1) % nextLinks.length;
  nextLink.href = "#" + figIds[nextLinkHrefLoc];
  i = i + 1;
});

prevLinks.forEach((prevLink) => {
  nextLinkHrefLoc = (i - 1 + prevLinks.length) % prevLinks.length;
  prevLink.href = "#" + figIds[nextLinkHrefLoc];
  i = i + 1;
});