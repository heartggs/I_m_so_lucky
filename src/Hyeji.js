import { explanationPopup } from "./knowHyeji.js";
import "./Hyeji.css";
import "../image/person_me.png";
import "../image/shirt.png";
import "../image/jeans.png";
import "../image/t-shirt.png";
import "../image/hoodie.png";
import "../image/shoe.png";
import "../image/cap.png";
import "../image/shirt_me.png";
import "../image/shirt_me.png";
import "../image/jeans_me.png";
import "../image/t-shirt_me.png";
import "../image/hoodie_me.png";
import "../image/shoe_me.png";
import "../image/cap_me.png";
import "../image/cotton-canvastextures.jpg";

const clothingAreas = document.querySelectorAll(".area");
const popupContent = document.querySelector(".popupContent");
const closeButton = document.querySelector(".closeButton");
const explanationPopupElement = document.querySelector(".explanation_popup");

function showExplanation(content) {
  explanationPopupElement.style.display = "flex";
  popupContent.innerHTML = content;
}

function hideExplanation() {
  explanationPopupElement.style.display = "none";
}

clothingAreas.forEach((area) => {
  area.addEventListener("click", () => {
    const firstClassName = area.classList[0];
    const clothing = explanationPopup[firstClassName];
    const meImage = document.querySelector(".me");

    meImage.setAttribute("src", clothing.img);

    const addContent = clothing.content
      .map((item, index, array) => {
        if (
          index === array.length - 1 &&
          (firstClassName === "shoe" || firstClassName === "cap")
        ) {
          return `<a href="${item}">[링크] ${item}</a>`;
        } else {
          return `<p>${item}</p>`;
        }
      })
      .join("");

    showExplanation(`<h3>${clothing.title}</h3>
    ${addContent}`);
  });
});

closeButton.addEventListener("click", hideExplanation);

//css hover효과를 javascript로 사용해보기
const clothElements = document.querySelectorAll(".cloth");
const hoverEffectElements = document.querySelectorAll(".hover_effect");
const hoverTxtElements = document.querySelectorAll(".hover_txt");

function handleClothHover(event) {
  const index = Array.from(clothElements).indexOf(event.target);

  hoverEffectElements[index].style.display = "block";
  hoverTxtElements[index].style.display = "block";
}

function handleClothMouseOut(event) {
  const index = Array.from(clothElements).indexOf(event.target);
  hoverEffectElements[index].style.display = "none";
  hoverTxtElements[index].style.display = "none";
}

clothElements.forEach((cloth) => {
  cloth.addEventListener("mouseenter", handleClothHover);
  cloth.addEventListener("mouseleave", handleClothMouseOut);
});
