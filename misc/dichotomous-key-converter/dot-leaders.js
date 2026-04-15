let inputTxt = document.querySelector("#input-text").textContent;
let genusLineRex = /\n\*([A-Z0-9a-z\s]+?)\*\s\((.+)\)\n/g;
let coupletChoiceRex = /\n((.+)\s\.\.\.\s)(.+)/g;
let coupletLabelRex = /^(([0-9]+)([a-z]))\s\s(.+)\s\.\.\.\s/;
let coupletReferralValueRex = /[0-9]+/;
let br = `
`;

let allGeneraLines = [...inputTxt.matchAll(genusLineRex)];
let allChoicesOneGenus; let coupletLabel;
let allCoupletsOneGenus; let allChoicesOneCouplet;
let coupletChoiceHTML = ""; let coupletReferralValue; let coupletValueHTML = "";
let choiceFullEndIndex = 0; let choiceStrictEndIndex = 0; let choiceExplHTML = "";
let genusContentEndIndex; let genusContentStartIndex;
let genusHTML = ""; let firstCoupletChoiceID = "";
let allGeneraHTML = ""; let genusNameConverted;
let allChoices = [];

function setItalics(str) {
  const italicsRex = /\*(.+?)\*/g;
  let withI = str.replace(italicsRex, "<i>$1</i>");
  return withI;
}

allGeneraLines.forEach((genusLine, genusNum) => {
  genusNameConverted = genusLine[1].replace(/\s/g, "");
  genusHTML = br + `<div class="genus" id="${genusNameConverted}"><h3><i>${genusLine[1]}</i> (${genusLine[2]})</h3><ol>` + br;
  genusContentStartIndex = genusLine.index + genusLine[0].length;
  if (genusNum < (allGeneraLines.length - 1)) {
    genusContentEndIndex = allGeneraLines[genusNum + 1].index;
  }
  else if (genusNum === (allGeneraLines.length - 1)) {
    genusContentEndIndex = inputTxt.length;
  }
  genusContent = inputTxt.slice(genusContentStartIndex, genusContentEndIndex);
  allChoicesOneGenus = [...genusContent.matchAll(coupletChoiceRex)];
  allChoicesOneGenus.forEach((choice, choiceNum) => {
    allChoices.push([...choice]);
    choiceFullEndIndex = 0; choiceStrictEndIndex = 0;
    if (choiceNum < (allChoicesOneGenus.length - 1)) {
      choiceFullEndIndex = allChoicesOneGenus[choiceNum + 1].index;
    }
    else if (choiceNum === (allChoicesOneGenus.length - 1)) {
      choiceFullEndIndex = genusContent.length;
    } else {}
    choiceStrictEndIndex = choice.index + choice[0].length;
    if ((choiceStrictEndIndex + 5) < choiceFullEndIndex) {
      choiceExplHTML = `
    <p class="choice-explanation">` + genusContent.slice(choiceStrictEndIndex, choiceFullEndIndex).trim() + "</p>";
    }
    else {choiceExplHTML = "";}
    choiceExplHTML = choiceExplHTML.replace(/\t/g, "");
    
    coupletLabel = choice[1].match(coupletLabelRex);
    if (coupletLabel !== null) {
      firstCoupletChoiceID = "";
      coupletReferralValue = choice[3].match(coupletReferralValueRex);
      if (coupletReferralValue !== null) {
        if (coupletReferralValue[0].length === choice[3].length) {
          coupletValueHTML = `<a href="#${genusNameConverted}-${coupletReferralValue[0]}">${coupletReferralValue[0]}</a>`;
        } else {coupletValueHTML = coupletReferralValue[0];}
      } else {coupletValueHTML = choice[3];}
      if (coupletLabel[3] === "a") {firstCoupletChoiceID = ` id="${genusNameConverted}-${coupletLabel[2]}"`;}
      coupletChoiceHTML = `
  <li class="choice numbered couplet${coupletLabel[2]}"${firstCoupletChoiceID}>
    <div class="choice-line1">
      <span class="choice-number">${coupletLabel[1]}</span><span class="choice-label">${coupletLabel[4]}</span>
      <span class="choice-value">${coupletValueHTML}</span>
    </div>
    <div class="dots"></div>${choiceExplHTML}
  </li>
`;
    }
    else {
      coupletChoiceHTML = `
  <li class="choice numberless">
    <div class="choice-line1">
      <span class="choice-label">${choice[2]}</span>
      <span class="choice-value">${choice[3]}</span>
    </div>
    <div class="dots"></div>${choiceExplHTML}
  </li>
`;
    }
    genusHTML = genusHTML + coupletChoiceHTML;
  });
  genusHTML = genusHTML + br + `</ol></div>` + br;
  allGeneraHTML = allGeneraHTML + genusHTML;
});

allGeneraHTML = setItalics(allGeneraHTML);

let displayThis = document.querySelector("#display-this");
displayThis.innerHTML = allGeneraHTML;
let printHTML = document.querySelector("#print-html");
printHTML.textContent = allGeneraHTML;