const newGridButton = document.querySelector("#create-grid");
let userInput = 16;
newGridButton.addEventListener('click', function () {
    userInput =   parseInt(prompt('Please enter number of squares per side:', '16'));
    createGrid(userInput);
});


function createGrid(size) {
    const container = document.querySelector(".container");
    container.innerHTML = '';

    for(let i = 0; i<size*size; i++)  {
        const square = document.createElement("div");
        square.textContent = "";
        square.classList.add('grid-squares');
        square.style.width = 'calc('+(1.0/size * 100)+'% - 2px)';
        square.style.paddingBottom = 'calc('+(1.0/size * 100)+'% - 2px)';
        
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = 'orange';
        });
        square.addEventListener('mouseout', function () {
            square.style.backgroundColor = 'rgb(56, 199, 232)';
        });
    
        container.appendChild(square);
    }
}

createGrid(16);
