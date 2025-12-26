
// HTML Body
const htmlBody = document.querySelector("body"); 

//Div container
const container = document.querySelector(".container");
htmlBody.appendChild(container);

function createGrid(n = 16){
    for(let i = 0; i<n; i++){ //Create 16 Rows divs
    let rowDiv = document.createElement("div");
    const rowNumber = "row"+i;
    //adding classes
    rowDiv.classList.add(rowNumber);
    rowDiv.classList.add("row");

    rowDiv.addEventListener("mouseover",(event)=>{
        event.target.style.backgroundColor = "blue";

    });
    container.appendChild(rowDiv);


    for(let k = 0; k<n;k++){ //Create 16 divs in rows
        let elementDiv = document.createElement("div");
        elementDiv.classList.add("sketch"); 
        elementDiv.textContent = i+1;
        rowDiv.appendChild(elementDiv); 
    }   
}

}


//Default 16x16 Grid
createGrid();



