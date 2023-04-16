const body = document.querySelector("body");
const container = document.querySelector(".container");

/* INITIAL 16 * 16 GRID */
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
output.textContent = gridSlider.value;
gridSlider.oninput = function () {
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

let isDrawing = 0,
  isMoving = 0,
  pass = 0,
  IncrementalyDarkening = 0;

/* GRID PAINTING */
function paintGrid() {
  const eachSquareDiv = document.querySelectorAll(".square-div");
  let decColor;
  eachSquareDiv.forEach((div) => {
    div.addEventListener("mousedown", (e) => {
      isDrawing = 1;
      if (isIncrementalyDarkening) {
        IncrementalyDarkening = 1;
      }
    });
    div.addEventListener("mouseenter", (e) => {
      decColor = e.target.style.backgroundColor;
    });

    div.addEventListener("mousemove", (e) => {
      if (isDrawing) {
        draw(e, color);
      }
      if (isRandomColorDrawing) {
        drawrandomColor(e);
      }
      if (isErasing) {
        erase(e, "white");
      }
      if (IncrementalyDarkening) {
        darkenIncrementally(e, decColor);
      }
    });
    div.addEventListener("mouseup", (e) => {
      isDrawing = 0;
      IncrementalyDarkening = 0;
    });
  });
}

function draw(e, color) {
  if (isDrawing == 1 && e.button == 0) {
    e.target.style.backgroundColor = color;
  }
}

/*GRID CLEAR  */
const gridClear = document.querySelector(".grid-clear");
gridClear.addEventListener("click", () => {
  let clear = 0;
  const eachSquareDiv = document.querySelectorAll(".square-div");
  this.active = !this.active;
  if (this.active) {
    gridClear.classList.add("button-activated");
  }

  eachSquareDiv.forEach((div) => {
    if (div.style["background-color"]) {
      console.log(div.style["background-color"]);
      div.style["background-color"] = "white";
      clear = 1;
    }
  });

  if (clear) {
    setTimeout(() => {
      gridClear.classList.remove("button-activated");
    }, 1000);
  }
  this.active = !this.active;
});

/* TOGGLE GRID LINES */
const toggleGridLines = document.querySelector(".toggle-grid-lines");
toggleGridLines.addEventListener("click", () => {
  const eachSquareDiv = document.querySelectorAll(".square-div");
  this.active = !this.active;
  if (this.active) {
    toggleGridLines.classList.add("button-activated");
  } else {
    toggleGridLines.classList.remove("button-activated");
  }
  eachSquareDiv.forEach((div) => {
    div.classList.toggle("grid-lines");
  });
});

let isErasing = 0,
  isRandomColorDrawing = 0,
  isIncrementalyDarkening = 0;

/* RANDOM COLOUR */
const randomColor = document.querySelector(".random-color");
function drawrandomColor(e) {
  let redComponent, greenComponent, blueComponent;
  const eachSquareDiv = document.querySelectorAll(".square-div");
  eachSquareDiv.forEach((div) => {
    redComponent = Math.floor(Math.random() * 256);
    greenComponent = Math.floor(Math.random() * 256);
    blueComponent = Math.floor(Math.random() * 256);
    if (isDrawing == 1 && e.button == 0) {
      e.target.style.backgroundColor = `rgb(${redComponent}, ${blueComponent}, ${greenComponent})`;
    }
  });
}
randomColor.addEventListener("click", () => {
  this.active = !this.active;
  this.active ? (isRandomColorDrawing = 1) : (isRandomColorDrawing = 0);

  if (this.active) {
    randomColor.classList.add("button-activated");
  } else {
    randomColor.classList.remove("button-activated");
  }
});

/* ERASER */
function erase(e, color) {
  if (isDrawing == 1 && isErasing == 1 && e.button == 0) {
    e.target.style.backgroundColor = color;
  }
}

const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
  this.active = !this.active;
  this.active ? (isErasing = 1) : (isErasing = 0);
  if (this.active) {
    eraser.classList.add("button-activated");
  } else {
    eraser.classList.remove("button-activated");
  }
});

/* COLOR PICKER */
const colorPicker = document.getElementById("color-picker");
let color = colorPicker.value;
colorPicker.addEventListener("input", () => {
  color = colorPicker.value;
});

/* DARKEN INCREMENTALLY */
const incrementalDarken = document.querySelector(".incremental-darken");
incrementalDarken.addEventListener("click", () => {
  this.active = !this.active;
  this.active ? (isIncrementalyDarkening = 1) : (isIncrementalyDarkening = 0);
  if (this.active) {
    incrementalDarken.classList.add("button-activated");
  } else {
    incrementalDarken.classList.remove("button-activated");
  }
});

function darkenIncrementally(e, mycolor) {
  console.log(e.target);
  if (e.button == 0 && IncrementalyDarkening == 1) {
    console.log(e.target.style.backgroundColor);

    let squareDiv, colors;

    squareDiv = mycolor;
    console.log(squareDiv);
    //Get values
    colors = squareDiv.split(", ");

    colors[0] = parseFloat(colors[0].split("(")[1]);
    colors[1] = parseFloat(colors[1]);
    colors[2] = parseFloat(colors[2]);

    colors[0] = colors[0] - colors[0] / 10;
    colors[1] = colors[1] - colors[1] / 10;
    colors[2] = colors[2] - colors[2] / 10;

    colors = "rgb(" + colors.join(",") + ")";
    e.target.style.backgroundColor = colors;
  }
}
