const sketcher = document.getElementById("sketcher");
const docFrag = document.createDocumentFragment();
// const newRow = document.createElement("div");
// const newTile = document.createElement("div");
// newRow.className = "row";
// newTile.className = "tile";

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const newRow = document.createElement("div");
    newRow.className = "row";
    for (let j = 0; j < num; j++) {
      const newTile = document.createElement("div");
      newTile.className = "tile";
      newRow.appendChild(newTile);
    }
    docFrag.appendChild(newRow);
  }
  sketcher.appendChild(docFrag);
}

createGrid(16);
