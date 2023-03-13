const body = document.querySelector("body");
const container = document.querySelector(".container");
const button = document.createElement("button");
const mainContainer = document.querySelector(".main-container");

button.textContent = "Click Me";
//body.appendChild(button);
mainContainer.appendChild(container);

const squareDiv = {};

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    squareDiv[j] = document.createElement("div");
    squareDiv[j].classList.add("square-div");
    container.appendChild(squareDiv[j]);
  }
}

paintGrid();

/* GRID SLIDER */
let gridSlider = document.getElementById("myRange");
let output = document.getElementById("grid-size");
console.log(gridSlider.value);
output.textContent = gridSlider.value;
gridSlider.oninput = function () {
  console.log(this.value);
  output.textContent = this.value;
  drawGrid(this.value);
  paintGrid();
};

function drawGrid(numOfSquareDivs) {
  const squareDivToRemove = document.querySelectorAll(".square-div");
  squareDivToRemove.forEach((div) => {
    container.removeChild(div);
  });

  if (numOfSquareDivs <= 100) {
    for (let i = 0; i < numOfSquareDivs; i++) {
      for (let j = 0; j < numOfSquareDivs; j++) {
        squareDiv[j] = document.createElement("div");
        squareDiv[j].classList.add("square-div");
        squareDiv[j].style.width = `${512 / numOfSquareDivs}px`;
        squareDiv[j].style.height = `${512 / numOfSquareDivs}px`;
        container.appendChild(squareDiv[j]);
      }
    }
  }
}

function paintGrid() {
  const eachSquareDiv = document.querySelectorAll(".square-div");
  eachSquareDiv.forEach((div) => {
    div.addEventListener("mousemove", draw);
    div.addEventListener("mousedown", draw);
  });

  function draw(e) {
    if (e.button == 0) {
      e.target.style.backgroundColor = "black";
    } else {
      return;
    }
  }
}
