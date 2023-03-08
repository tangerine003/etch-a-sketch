const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
  for (j = 0; j < 16; j++) {
    const squareDiv = {};
    squareDiv[j] = document.createElement("div");
    squareDiv[j].classList.add("square-div");
    container.appendChild(squareDiv[j]);
  }
}
