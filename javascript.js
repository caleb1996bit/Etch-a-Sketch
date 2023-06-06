const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";  


     //👇️ Change text color on mouseover
cell.addEventListener('mouseover', function handleMouseOver() {
  cell.style.backgroundColor = 'green'
});


// 👇️ Change text color back on mouseout
cell.addEventListener('mouseout', function handleMouseOut() {
  cell.style.backgroundColor = 'yellow'
} 

); 

  };
};




console.log(makeRows(16, 16));