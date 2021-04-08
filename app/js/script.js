



const container = document.getElementById('container');
container.style.backgroundColor = 'white';
container.style.display = 'grid';
container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.gridTemplateRows = `repeat(16, 1fr)`;

const grid_box = document.createElement('div');

grid_box.style.backgroundColor = 'white';
grid_box.textContent = ('box 1');
grid_box.style.border = "3px solid black";
grid_box.style.padding = '5px';



container.appendChild(grid_box);

function repeatBox(){

    for(let i = 1; i < 17; i++){
        
        const (grid_box) + 'i' = document.getElementById('div');// need to dynamically alter name

    }
} 


//try to use grid_template to create a 16 by 16 grid div
console.dir(grid_box);
console.dir(container);




