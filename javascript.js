const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};


/* 👇️ Change text color on mouseover
container.addEventListener('mouseover', function handleMouseOver() {
  container.style.color = 'red';
});//

/* 👇️ Change text color back on mouseout
container.addEventListener('mouseout', function handleMouseOut() {
  container.style.backgroundcolor = 'black';
});*/ 

container.addEventListener('mouseover', 
  e => e.target.classList.add('grid-item')
) 

let currentColor = 'black'

const colors = { black: 'black' }

e => e.target.classList.add(colors[currentColor])

console.log(makeRows(16, 16));