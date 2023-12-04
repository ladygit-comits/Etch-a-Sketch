function button() 
{
    const addButton = document.createElement("button")
    addButton.classList.add("button-el")
    let docBody = document.body;
    docBody.appendChild(addButton )
    return addButton

    
}
const myButton = button()
myButton.style.position = "absolute";
myButton.style.top = "0";
myButton.style.left = "50%";
myButton.style.transform = "translateX(-50%)";
myButton.textContent="CLICK  ME"

myButton.addEventListener("click", function clickMe() {

   let userInput =  prompt("Input the number of squares per side for new grid")
   
   let parsed = parseInt(userInput)
  

   if (!isNaN(parsed) && parsed <= 100) {
    squareGrid(parsed);
} else if(isNaN( parsed )) {
alert("Not a number!");
}

 else {
    alert("Input number below 100");
}
   
})

function clearGrid() {
    const container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function squareGrid(sideLength){
  clearGrid()

  const container = document.getElementById("container")
  const squareSize = 960 / sideLength

 
  for (let i = 0; i < sideLength; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < sideLength; j++) {
      const square = document.createElement("div");
      square.classList.add("square-el");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.style.border = "1px"
      row.appendChild(square);

        square.addEventListener("mouseover",()=>{
    const randomColor = getRandomColor()
        square.style.backgroundColor = randomColor
   
    
    square.addEventListener("mouseout", ()=>{
        const randomColor = getRandomColor()
        square.style.backgroundColor = randomColor
    })
    })
    }

    container.appendChild(row);
  }
}

function squareDiv() {
    const square = document.createElement("div")
    square.classList.add('square-el')
  
return square
}

//create grid(16*16)

const container = document.getElementById("container")
container.style.marginTop = "40px"
for (let i = 0; i < 16 * 16; i++) {
    const square = squareDiv();
    container.appendChild(square)
   
    

    
}
const squares = document.querySelectorAll(".square-el")

squares.forEach((square) =>{

    square.addEventListener("mouseover",()=>{

        const randomColor = getRandomColor()
        square.style.backgroundColor = randomColor
})

square.addEventListener("mouseout", ()=>{
    const randomColor = getRandomColor()
    square.style.backgroundColor = randomColor
})
})
function getRandomColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    return `rgb(${randomR},${randomG},${randomB})`;
}