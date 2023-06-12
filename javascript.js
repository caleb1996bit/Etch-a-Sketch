let clear = document.querySelector("button");
let container = document.querySelector(".container"); // move container out here so can use everywhere

clear.addEventListener('click', ()=>{ // we only want to add this listener once
    resetSize()
})


function resetSize(){
        
        let number = prompt("Choose the size of your grid (1-100)");
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        makeRows(number); // call the makeRows function here and pass the number they entered as the argument. 
}
        
        
//function to create a 16x16 grid
function makeRows(rows,cols){

//    resetSize(); // get rid of this as this was causing it to show the prompt again each time


    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    
    for (let i = 0; i < rows*cols; i++) {
        
        let cell = document.createElement("div");
        cell.style.backgroundColor = "black";
        container.appendChild(cell);

        //change background color of a square on hover
        cell.addEventListener('mouseover', e=>{
            cell.style.backgroundColor = "white";
        })


        //function to reset the grid
        function clearGrid(){
            clear.addEventListener('click', e=>{
                cell.style.backgroundColor = "black"
           })
        }
        

        clearGrid();    
    }
}

makeRows(16,16);


/*let clear = document.querySelector("button");
const container = document.getElementById("container");

clear.addEventListener('click', ()=>{ // we only want to add this listener once
  resetSize()
})

function resetSize(){
        
  let number = prompt("Pick the size of your grid (1-100)");
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  makeRows(number); // call the makeRows function here and pass the number they entered as the argument. 
}


function makeRows(rows,cols) {
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
 
  //function to reset the grid
  function clearGrid(){
    clear.addEventListener('click', e=>{
        cell.style.backgroundColor = "white"
   })
}


clearGrid();    
}
}*/






/*function resetSize(){
        
  let number = prompt("Pick the size of your grid (1-100)"); 
  document.querySelectorAll(".grid-item").forEach((e) => e.parentNode.removeChild(e));
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  makeRows(rows,cols); // call the makeRows function here and pass the number they entered as the argument. 
}*/


/*function makeRows(_canvasSize) {
  const rows = canvasSize
  const cols = canvasSize
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', 
      
    )
  };
};*/



     /*👇️ Change text color on mouseover
cell.addEventListener('mouseover', function handleMouseOver() {
  cell.style.backgroundColor = 'red'
});


/*👇️ Change text color back on mouseout
cell.addEventListener('mouseout', function handleMouseOut() {
  cell.style.backgroundColor  = 'black'*/


 
 
  /*function to reset the grid
  
  function resetSize() {
    makeRows(canvasSize) 
    document.querySelectorAll(".grid-item").forEach((e) => e.parentNode.removeChild(e));
}

makeRows(canvasSize);




        
        
//function to create a 16x16 grid
/*function createGrid(size){

//    resetSize(); // get rid of this as this was causing it to show the prompt again each time


    /*container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    /*for (let i = 0; i < size*size; i++) {
        
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
    }





  /*function randomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + r + "," + g + "," + b + ")";  
    console.log(RGBColor);
  }
  
  randomRGB();*/




