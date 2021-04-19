let rows = prompt("How many rows and columns would you like in your grid?"); // rows and cols need to be set via user prompt
let cols = rows;

const topButton = document.getElementById('topButton');
const container = document.getElementById('container');
container.style.backgroundColor = 'white';

var btn = document.createElement("BUTTON");
topButton.appendChild(btn).className = "button-top";
btn.innerText = "CLEAR GRID";

btn.addEventListener('click', function(){

    // let cells = document.getElementsByClassName("grid-items");

    // for(let i = 0; i < (rows * cols); i++){

    //     container.parentNode.removeChild();

    // }


    // rows = prompt("How many rows would you like in your grid?"); // rows and cols need to be set via user prompt
    // cols = prompt("How many columns would you like in your grid?");

    // repeatBox(rows, cols);
    // addListener(rows, cols);

    location.reload();
});


function repeatBox(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    let boxHeight = (300/(cols));

    for(let i = 0; i < (rows * cols); i++){
        

        cell = document.createElement("div");
        cell.innerText = "";
        container.appendChild(cell).className = "grid-items";
        
        cell.style.setProperty('min-height', (boxHeight + "px"));
    }
    


} //ends function

repeatBox(rows, cols);
addListener(rows, cols);

function addListener(rows, cols){

    let cells = document.getElementsByClassName("grid-items");

    for(let i = 0; i < (rows * cols); i++){
    
        let gridCell = cells[i].addEventListener("mouseover", func, false);
        // let gridOut = cells[i].addEventListener("mouseout", func1, false);

        function func(){

            cells[i].style.backgroundColor = 'red';
    
        }
    
        function func1(){

            cells[i].style.backgroundColor = 'white';
    
        }
    }

    
} //Ends addListener function



console.dir(container);
console.dir(cell);




