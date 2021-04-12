

const container = document.getElementById('container');
container.style.backgroundColor = 'white';
container.style.display = 'grid';
container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.gridTemplateRows = `repeat(16, 1fr)`;

let grid_box = document.createElement('div');

grid_box.style.backgroundColor = 'white';
grid_box.textContent = ('box 1');
grid_box.style.border = "3px solid black";
grid_box.style.padding = '5px';

repeatBox();

function repeatBox(){

    for(let i = 1; i < 257; i++){
        
        cell = document.createElement("div");
        cell.innerText = (i);

        container.appendChild(cell).className = "grid-items";
        
    }
    
} 







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
console.dir(grid_box);
console.dir(container);
console.dir(cell);




