const container = document.querySelector(".container");

for(let i = 0; i<256; i++)  {
    const square = document.createElement("div");
    square.textContent = "";
    square.classList.add('grid-squares');

    container.appendChild(square);
}