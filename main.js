
// HTML Body
const htmlBody = document.querySelector("body"); 
//Div container
const container = document.querySelector(".container");
htmlBody.appendChild(container);

// 16x16 Grid
let j = 0;
for(let i = 0; i<256; i++){ //Create 16 class tagged divs
    if(i%16==0 && i!=0){
        j+=1;
    }
    const rowNumber = "row"+j;
    let topDiv = document.createElement("div");
    topDiv.classList.add(rowNumber); 
    topDiv.classList.add("sketch"); 
    topDiv.textContent = i+1;
    container.appendChild(topDiv);
}



