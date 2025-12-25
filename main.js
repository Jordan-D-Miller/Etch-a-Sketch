
// HTML Body
const htmlBody = document.querySelector("body"); 
//Div container
const container = document.querySelector(".container");
htmlBody.appendChild(container);

// 16x16 Grid
for(let i = 0; i<16; i++){ //Create 16 class tagged divs
    let rowDiv = document.createElement("div");
    const rowNumber = "row"+i;
    rowDiv.classList.add(rowNumber);
    container.appendChild(rowDiv);
    for(let k = 0; k<16;k++){
        let elementDiv = document.createElement("div");
        elementDiv.classList.add("sketch"); 
        elementDiv.textContent = i+1;
        rowDiv.appendChild(elementDiv); 
    }
  
    
}



