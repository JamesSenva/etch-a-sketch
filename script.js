// grid container where grid will populate
const gridContainer = document.querySelector('.grid');

//------------- Edit options: Display Grid
// store display grid button 
const gridMode = document.querySelector('.grid_on');

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
// gridSlider.addEventListener('input', handleGrid);



//------------- Color options: Pen Color
const pen = document.querySelector('#pen');
// first the mouse button is clicked over gridbox, it calls the handleMousedown function
gridContainer.addEventListener('mousedown', handleMousedown);

// handleMousedown function handles two events, mousemove for mouse dragging and mouseup when the mouse button is released
// also calls their respective callbacks to handle these events
function handleMousedown() {
    gridContainer.addEventListener('mousemove', handleMousemove);
    gridContainer.addEventListener('mouseup', handleMouseup);
    event.stopPropagation();
}

// changes the grid color when mouse is dragged
function handleMousemove(e) {
    e.target.style.backgroundColor = pen.value;
    if(rainbowMode.classList.contains('active')){
        e.target.style.backgroundColor = randColor();
    }
    if(eraserMode.classList.contains('active')){
        e.target.style.backgroundColor = '';
    }
}

// when the mouse is released, removes handleMouseup function itself and handleMousemove function which add these functions
function handleMouseup() {
    gridContainer.removeEventListener('mousemove', handleMousemove);
    gridContainer.removeEventListener('mouseup', handleMouseup);
}


//------------- Color options: Background Color
const bg = document.querySelector('#bg');

// input event updates the background color of background 
bg.addEventListener('input', function() {
  gridContainer.style.backgroundColor = bg.value;
});


//------------- Color options: Rainbow Mode
// function to generate random colors
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
};

const rainbowMode = document.querySelector('.rainbow');
const rainbowIcon = document.querySelector('.looksIcon');
rainbowMode.addEventListener('click', handleRainbow);

function handleRainbow() {
    rainbowMode.classList.toggle('active');
    rainbowIcon.classList.toggle('active');
    eraserMode.classList.remove('active');
    eraserIcon.classList.remove('active');
}



//------------- Edit options: Eraser
const eraserMode = document.querySelector('.eraser');
const eraserIcon = document.querySelector('.eraserIcon');

eraserMode.addEventListener('click', handleEraser);

function handleEraser() {
    eraserMode.classList.toggle('active');
    eraserIcon.classList.toggle('active');
    rainbowMode.classList.remove('active');
    rainbowIcon.classList.remove('active');
}

//------------- Edit options: Display Grid
const gridIcon = document.querySelector('.gridIcon');

// add event listener to Display Grid button
gridMode.addEventListener('click', handleGrid);

// handle the first grid creation when the button is clicked
function handleGrid() {
    // counts the columns at the time display grid button is clicked
    const columns = document.querySelectorAll('.col');
    gridMode.classList.toggle('active');
    gridIcon.classList.toggle('active');
    columns.forEach( c => {
        c.classList.toggle('colBorder');
    })
}

// handle slider grid
// add event listener to slider which check for the grids being created in real time and if the display grid button is active it creates the grid with border as slider is adjusted in real time
gridSlider.addEventListener('input', handleSliderGrid);
function handleSliderGrid() {
    // counts for the grids being created in real time and stores them
    const columns = document.querySelectorAll('.col');

    // checks if the button has active class and adds/removes the border as the slider is adjusted
    if(gridMode.classList.contains('active')){
        columns.forEach( c => {
            c.classList.add('colBorder');
        })
    }
}

//------------- Edit options: Reset
const reset = document.querySelector('.reset');
const resetIcon = document.querySelector('.resetIcon');
reset.addEventListener('click', handleReset);

function handleReset() {
    // stores the column at the time of clicking Reset btn
    const columns = document.querySelectorAll('.col');
    
    reset.classList.toggle('active');
    resetIcon.classList.toggle('active');
    columns.forEach( c => {
        c.style.backgroundColor = '';
    })

    // after 7 mili seconds this removes the active class
    setTimeout( function() {
        reset.classList.remove('active');
        resetIcon.classList.remove('active');
    }, 700);
}
