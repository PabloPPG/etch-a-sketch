const SMALL_GRID = 6;
const DEFAULT_GRID = 16;
const LARGE_GRID = 60;
const DEFAULT_COLOR = "544C4A";

const sketcher = document.getElementById("sketcher");
const clearButton = document.getElementById("clearButton");
const lowButton = document.getElementById("low");
const normalButton = document.getElementById("normal");
const highButton = document.getElementById("high");
const paintBlack = document.getElementById("paint-black");
const paintColorfull = document.getElementById("paint-colorfull");
const gridItem = document.getElementsByClassName("grid-item");

function createGrid(num) {
  let gridContainer = document.querySelector("#sketcher");
  gridContainer.innerHTML = "";
  let gridTemplate = `repeat(${num}, 1fr)`;

  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = gridTemplate;
  gridContainer.style.gridTemplateRows = gridTemplate;

  for (let i = 0; i < num * num; i++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
  }
}

//LISTENERS

lowButton.addEventListener("click", () => {
  lowButton.classList.add("isClicked");
  normalButton.classList.remove("isClicked");
  highButton.classList.remove("isClicked");
  startGrid(SMALL_GRID);
});
normalButton.addEventListener("click", () => {
  lowButton.classList.remove("isClicked");
  normalButton.classList.add("isClicked");
  highButton.classList.remove("isClicked");
  startGrid(DEFAULT_GRID);
});
highButton.addEventListener("click", () => {
  lowButton.classList.remove("isClicked");
  normalButton.classList.remove("isClicked");
  highButton.classList.add("isClicked");
  startGrid(LARGE_GRID);
});

paintBlack.addEventListener("click", () => {
  paintBlack.classList.add("isClicked");
  paintColorfull.classList.remove("isClicked");
  paint();
});

paintColorfull.addEventListener("click", () => {
  paintBlack.classList.remove("isClicked");
  paintColorfull.classList.add("isClicked");
  paint();
});

function startGrid(size) {
  deleteGrid();
  createGrid(size);
  paint();
}

clearButton.addEventListener("click", clear);

function clear() {
  const divsInsideSketcher = document.querySelectorAll("#sketcher div");
  [...divsInsideSketcher].map((e) => (e.style.backgroundColor = ""));
}

function paint() {
  !paintColorfull.classList.contains("isClicked")
    ? [...gridItem].map((tile) =>
        tile.addEventListener(
          "mouseover",
          () => (tile.style.backgroundColor = `#${DEFAULT_COLOR}`)
        )
      )
    : [...gridItem].map((tile) =>
        tile.addEventListener(
          "mouseover",
          () => (tile.style.backgroundColor = getRandomRgb())
        )
      );
}

function deleteGrid() {
  sketcher.replaceChildren();
}

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

createGrid(DEFAULT_GRID);
paint();
