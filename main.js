
// HTML Body
const htmlBody = document.querySelector("body"); 
//Div container
const container = document.querySelector(".container");
htmlBody.appendChild(container);

// 16 divs creation

for(let i = 0; i<4; i++){ // row 1
    let topDiv = document.createElement("div");
    topDiv.classList.add("rowOne"); 
    topDiv.classList.add("sketch"); 
    topDiv.textContent = i+1;
    container.appendChild(topDiv);
}

for(let i = 0; i<4; i++){ // row 2
    let topDiv = document.createElement("div");
    topDiv.classList.add("rowTwo");
    topDiv.classList.add("sketch"); 
    topDiv.textContent = i+1;
    container.appendChild(topDiv);
}
for(let i = 0; i<4; i++){ // row 1
    let topDiv = document.createElement("div");
    topDiv.classList.add("rowThree"); 
    topDiv.classList.add("sketch"); 
    topDiv.textContent = i+1;
    container.appendChild(topDiv);
}
for(let i = 0; i<4; i++){ // row 1
    let topDiv = document.createElement("div");
    topDiv.classList.add("sketch"); 
    topDiv.classList.add("rowFour"); 
    topDiv.textContent = i+1;
    container.appendChild(topDiv);
}

