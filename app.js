import { colors } from "./colors.js";

const board = document.querySelector("#board");
const squaresNumber = 2050;

for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const newColor = getRandomColor();
  element.style.backgroundColor = newColor;
  element.style.boxShadow = `0 0 2px ${newColor}, 0 0 10px ${newColor}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
