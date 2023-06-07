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
  cell.style.backgroundColor = 'red'
});


// 👇️ Change text color back on mouseout
cell.addEventListener('mouseout', function handleMouseOut() {
  cell.style.backgroundColor  = 'black'


} 

); 
function clearGrid(){
  clear.addEventListener('click', e=>{
      cell.style.backgroundColor = "white"
 })
}


clearGrid();  
  }} 

  let clear = document.querySelector("button");


clear.addEventListener('click', ()=>{ // we only want to add this listener once
    resetSize()
})


function resetSize(){
        
        let number = prompt("Pick the size of your grid (1-100)");
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        makeRows(number); // call the createGrid function here and pass the number they entered as the argument. 
}
        
        
//function to create a 16x16 grid
/*function createGrid(size){

//    resetSize(); // get rid of this as this was causing it to show the prompt again each time


    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        
        let cell = document.createElement("div");
        cell.style.backgroundColor = "black";
        container.appendChild(cell);

        


        //function to reset the grid
        /*function clearGrid(){
            clear.addEventListener('click', e=>{
                cell.style.backgroundColor = "black"
           })
        }
        

        clearGrid();    
    }*/





  /*function randomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + r + "," + g + "," + b + ")";  
    console.log(RGBColor);
  }
  
  randomRGB();*/





console.log(makeRows(16, 16));