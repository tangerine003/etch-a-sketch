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

/* eachSquareDiv.forEach((div) => {
  div.addEventListener("mousedown", () => {
    div.classList.add("change-color");
  });
});
 */

/* button.addEventListener("click", () => {
  const squareDivToRemove = document.querySelectorAll(".square-div");
  squareDivToRemove.forEach((div) => {
    container.removeChild(div);
  });

  let numOfSquareDivs = prompt(
    "Enter number of squares per side of the new grid(Maximum number is 100)"
  );

  numOfSquareDivs = Number(numOfSquareDivs);

  if (numOfSquareDivs <= 100) {
    for (let i = 0; i < numOfSquareDivs; i++) {
      for (let j = 0; j < numOfSquareDivs; j++) {
        squareDiv[j] = document.createElement("div");
        squareDiv[j].classList.add("square-div");
        squareDiv[j].style.width = `${1232 / numOfSquareDivs}px`;
        squareDiv[j].style.height = `${1232 / numOfSquareDivs}px`;
        container.appendChild(squareDiv[j]);
      }
    }
  }
}); */

/* GRID SLIDER */
let gridSlider = document.getElementById("myRange");
let output = document.getElementById("grid-size");
console.log(gridSlider.value);
output.textContent = gridSlider.value;
gridSlider.oninput = function () {
  console.log(this.value);
  output.textContent = this.value;

  const squareDivToRemove = document.querySelectorAll(".square-div");
  squareDivToRemove.forEach((div) => {
    container.removeChild(div);
  });

  let numOfSquareDivs = this.value;

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
};

const eachSquareDiv = document.querySelectorAll(".square-div");
eachSquareDiv.forEach((div) => {
  div.addEventListener("mousemove", draw);
  console.log("HI");
  div.addEventListener("mousedown", draw);
  console.log("HI again");
});

function draw(e) {
  if (e.button == 0) {
    e.target.style.backgroundColor = "black";
  } else {
    return;
  }
}
