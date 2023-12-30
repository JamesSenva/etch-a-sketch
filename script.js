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



//------------- Color options: Pen Color
const pen = document.querySelector('#pen');

// first the mouse button is clicked over gridbox, it calls the handleMousedown function
gridContainer.addEventListener('mousedown', handleMousedown);

// handleMousedown function handles two events, mousemove for mouse dragging and mouseup when the mouse button is released
// also calls their respective callbacks to handle these events
function handleMousedown() {
    gridContainer.addEventListener('mousemove', handleMousemove);
    gridContainer.addEventListener('mouseup', handleMouseup);
}

// changes the grid color when mouse is dragged
function handleMousemove(e) {
    e.target.style.backgroundColor = pen.value;
    if(rainbowMode.classList.contains('active')){
        e.target.style.backgroundColor = randColor();
    }
}

// when the mouse is released, removes handleMouseup function itself and handleMousemove function which add these functions
function handleMouseup() {
    gridContainer.removeEventListener('mouseup', handleMouseup);
    gridContainer.removeEventListener('mousemove', handleMousemove);
}


//------------- Color options: Background Color
const bg = document.querySelector('#bg');

// input event updates the background color of gridContainer 
bg.addEventListener('input', function() {
  gridContainer.style.backgroundColor = bg.value;
});


//------------- Color options: Rainbow Mode
// function to generate random colors
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
};

const rainbowMode = document.querySelector('.rainbow');
rainbowMode.addEventListener('click', function() {
    rainbowMode.classList.toggle('active');
});