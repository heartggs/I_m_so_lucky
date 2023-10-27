import "./src/main.css";
import "../image/grass-1000-mm-architextures.jpg";
import "../image/slot_image.png";
import "../image/lucky_image_540.jpg";
import "../image/lucky_image_320.jpg";

const slot_wrapper = document.querySelector(".slot_wrapper");
const slot_boxes = document.querySelectorAll(".slot_box");
const start_btn = document.querySelector(".start_btn");
const more_know_btn = document.querySelector(".to_know_hyeji_btn");
const modal_popup = document.querySelector(".popup_wrapper");

async function startAnimation() {
  const animationPromises = [];

  for (let i = 0; i < slot_boxes.length; i++) {
    const slotbox = slot_boxes[i];
    slotbox.style.animation = "slotAnimation 3s infinite linear";

    const animationPromise = new Promise((resolve) => {
      setTimeout(() => {
        stopSlotMachine(i);
        resolve(); // 애니메이션 종료 후 Promise를 해결합니다.
      }, (i + 1) * 1000);
    });
    animationPromises.push(animationPromise);
  }

  await Promise.all(animationPromises);
  startConfettiAnimation();

  await new Promise((resolve) => {
    setTimeout(() => {
      modal_popup.style.display = "flex";
      resolve();
    }, 1500);
  });
}

function stopSlotMachine(index) {
  const firstSlotBox = slot_boxes[0];
  const computedStyle = getComputedStyle(firstSlotBox);
  const backgroundImageHeight = computedStyle.backgroundSize;
  const toNumber = parseFloat(backgroundImageHeight);

  const slotbox = slot_boxes[index];
  slotbox.style.animation = "none";
  slotbox.style.backgroundPosition = `0 -${6 * toNumber}px`;
}

function startConfettiAnimation() {
  const canvas = document.getElementById("custom_canvas");
  const jsConfetti = new JSConfetti({ canvas });
  jsConfetti.addConfetti({
    confettiColors: [
      "#ff0a54",
      "#ff477e",
      "#ff7096",
      "#ff85a1",
      "#fbb1bd",
      "#f9bec7",
    ],
  });
}

start_btn.addEventListener("click", startAnimation);

more_know_btn.addEventListener("click", () => {
  const newPageURL = "knowHyeji.html";
  window.location.href = newPageURL;
});
