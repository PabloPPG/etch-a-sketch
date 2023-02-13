const sketcher = document.getElementById("sketcher");
const clearButton = document.getElementById("clearButton");
const lowButton = document.getElementById("low");
const normalButton = document.getElementById("normal");
const highButton = document.getElementById("high");
const higherButton = document.getElementById("higher");
const tile = document.getElementsByClassName("tile");
console.log(tile);

function deleteGrid() {
  sketcher.replaceChildren();
}

function defaultGrid() {
  const num = 16;
  for (let i = 0; i < num; i++) {
    const newRow = document.createElement("div");
    newRow.className = "row";
    for (let j = 0; j < num; j++) {
      const newTile = document.createElement("div");
      newTile.className = "tile";
      newRow.appendChild(newTile);
    }
    sketcher.appendChild(newRow);
  }
}

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const newRow = document.createElement("div");
    newRow.className = "row";
    for (let j = 0; j < num; j++) {
      const newTile = document.createElement("div");
      newTile.className = "tile";
      newRow.appendChild(newTile);
    }
    sketcher.appendChild(newRow);
  }
}

defaultGrid();

//LISTENERS
//button 12x12 grid
lowButton.addEventListener("click", () => {
  deleteGrid();
  createGrid(10);
});

normalButton.addEventListener("click", () => {
  deleteGrid();
  createGrid(16);
  // clear();
  paintBlack();
});

highButton.addEventListener("click", () => {
  deleteGrid();
  createGrid(24);
});

higherButton.addEventListener("click", () => {
  deleteGrid();
  createGrid(40);
  paintBlack();
});

clearButton.addEventListener("click", clear);

function clear() {
  [...tile].map((x) => {
    x.className = "tile";
  });
}
function paintBlack() {
  for (let i = 0; i < [...tile].length; i++) {
    tile[i].addEventListener("mousemove", () =>
      tile[i].classList.add("toBlack")
    );
  }
}
