
// HTML Body
const htmlBody = document.querySelector("body"); 

//Div container and reset button
const container = document.querySelector(".container");
const titleButtons = document.createElement("div");


htmlBody.appendChild(titleButtons);
titleButtons.classList.add("bar");

//reset button
const resetButton = document.createElement("button");



resetButton.classList.add("reset");
resetButton.classList.add("Header");

titleButtons.appendChild(resetButton);
resetButton.textContent = "RESET"

resetButton.addEventListener('click', () =>{
    resetGrid();
    createGrid();
});



//Title 
const gameTitle = document.createElement("h1");
htmlBody.appendChild(gameTitle);
gameTitle.textContent = "Etch-a-Sketch!"
gameTitle.classList.add("title");
//gameTitle.classList.add("Header");







//Editor Button
const gridButton = document.createElement("button");
gridButton.addEventListener("click", (event) => {

   
    let gridSize = prompt("How large would you like you grid? Max size is 100");
    if (+gridSize && gridSize <=100){
        // Select all rows and delete
         resetGrid();
        //Create grid with size
        createGrid(gridSize);

    }else{
        alert("You gave an invalid input defualting to 16");
        // Selecting all rows and deleting 
         resetGrid();
        //Default grid
        createGrid();
    }
    
});
gridButton.textContent = "Grid Editor";
gridButton.classList.add("Editor");
titleButtons.appendChild(gridButton);

// Etch a sketch Code
htmlBody.appendChild(container);

// Grid Creation 
function createGrid(n = 16){
    for(let i = 0; i<n; i++){ //Create 16 Rows divs
       let rowDiv = document.createElement("div");
       const rowNumber = "row"+i;
       //adding classes
       rowDiv.classList.add(rowNumber);
       rowDiv.classList.add("row");

       rowDiv.addEventListener("mouseover",(event)=>{
        event.target.style.backgroundColor = "#5C6F2B";

       });
       container.appendChild(rowDiv);


       for(let k = 0; k<n;k++){ //Create 16 divs in rows
           let elementDiv = document.createElement("div");
           elementDiv.classList.add("sketch"); 
          // elementDiv.textContent = i +1;
           rowDiv.appendChild(elementDiv); 
    }   
    }

}

//Reset Grid
function resetGrid(){
    const oldRows = document.querySelectorAll(".row");
        oldRows.forEach(node =>{
            node.remove();
        });
}

//Default 16x16 Grid
createGrid();





