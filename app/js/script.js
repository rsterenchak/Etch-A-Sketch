

let rows = prompt("How many rows would you like in your grid?"); // rows and cols need to be set via user prompt
let cols = prompt("How many columns would you like in your grid?");


const container = document.getElementById('container');
container.style.backgroundColor = 'white';

function repeatBox(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(let i = 0; i < (rows * cols); i++){
        

        cell = document.createElement("div");
        cell.innerText = (i + 1);

        container.appendChild(cell).className = "grid-items";
        
    }
    
} //ends function

repeatBox(rows, cols);



//     cell.addEventListener("mouseover", func, false);
//     cell.addEventListener("mouseout", func1, false);

// function func(){  
//    cell.setAttribute("style", "background-color:blue;")
// }

// function func1()
// {  
//    cell.setAttribute("style", "background-color:green;")
// }


//try to use grid_template to create a 16 by 16 grid div
// console.dir(grid_box);
console.dir(container);
console.dir(cell);




