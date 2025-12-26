
// HTML Body
const htmlBody = document.querySelector("body"); 

//Div container
const container = document.querySelector(".container");
htmlBody.appendChild(container);

//Button for user prompt
const gridButton = document.createElement("button");
gridButton.addEventListener("click", (event) => {

   
    let gridSize = prompt("How large would you like you grid? Max size is 100");
    if (+gridSize && gridSize <=100){
        // Selecting all rows and deleting 
        const oldRows = document.querySelectorAll(".row");
        oldRows.forEach(node =>{
            node.remove();
        });
        //Create grid with size
        createGrid(gridSize);

    }else{
        alert("You gave an invalid input defualting to 16");
        // Selecting all rows and deleting 
        const oldRows = document.querySelectorAll(".row");
        oldRows.forEach(node =>{
            node.remove();
        })
        //Default grid
        createGrid();
    }
    
});
gridButton.textContent = "Grid Editor";
container.appendChild(gridButton);

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
createGrid();

//Default 16x16 Grid






