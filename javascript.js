const body = document.querySelector("body");
const container = document.querySelector(".container");
const button = document.createElement("button");

button.textContent = "Click Me";
body.appendChild(button);
body.appendChild(container);

const squareDiv = {};

for (i = 0; i < 16; i++) {
  for (j = 0; j < 16; j++) {
    squareDiv[j] = document.createElement("div");
    squareDiv[j].classList.add("square-div");
    container.appendChild(squareDiv[j]);
  }
}

button.addEventListener("click", () => {
  const squareDivToRemove = document.querySelectorAll(".square-div");
  squareDivToRemove.forEach((div) => {
    container.removeChild(div);
  });

  let numOfSquareDivs = prompt(
    "Enter number of squares per side of the new grid(Maximum number is 100)"
  );

  numOfSquareDivs = Number(numOfSquareDivs);

  if (numOfSquareDivs <= 100) {
    for (i = 0; i < numOfSquareDivs; i++) {
      for (j = 0; j < numOfSquareDivs; j++) {
        squareDiv[j] = document.createElement("div");
        squareDiv[j].classList.add("square-div");
        squareDiv[j].style.width = `${1232 / numOfSquareDivs}px`;
        squareDiv[j].style.height = `${1232 / numOfSquareDivs}px`;
        container.appendChild(squareDiv[j]);
      }
    }
  }
});
