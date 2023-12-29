// grid container where grid will populate
const gridContainer = document.querySelector('.grid');

// grid slider
const gridSlider = document.querySelector('#slider');

// slider label
const sliderLabel = document.querySelector('.sliderLabel');

// function to create grid 
function createGrid() {
    let gridSize = +gridSlider.value;
    gridContainer.textContent = '';
    sliderLabel.textContent = `Grid Size: ${gridSize} x ${gridSize}`;

    for (let i = 1; i <= gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);
        for(let j = 1; j <= gridSize; j++){
            const col = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);
        }
    }
}

// creates the defaul grid of 16x16
createGrid();

// creates grid as the size slider is adjusted
gridSlider.addEventListener('input', createGrid);


