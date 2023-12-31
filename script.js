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
const background = document.querySelectorAll('.row')
console.log(background)
// first the mouse button is clicked over gridbox, it calls the handleMousedown function
background.forEach( row => {
    row.addEventListener('mousedown', handleMousedown);
})

// handleMousedown function handles two events, mousemove for mouse dragging and mouseup when the mouse button is released
// also calls their respective callbacks to handle these events
function handleMousedown() {
    background.forEach( row => {
        row.addEventListener('mousemove', handleMousemove);
        row.addEventListener('mouseup', handleMouseup);
    })
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
    background.forEach( row => {
        row.removeEventListener('mousemove', handleMousemove);
        row.removeEventListener('mouseup', handleMouseup);
    })
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
rainbowMode.addEventListener('click', function() {
    rainbowMode.classList.toggle('active');
    rainbowIcon.classList.toggle('active');
});



//------------- Edit options: Eraser


//------------- Edit options: Display Grid
const displayGrid = document.querySelector('.grid_on');
const columns = document.querySelectorAll('.col');
const gridIcon = document.querySelector('.gridIcon');
const gridMode = document.querySelector('.grid_on');

displayGrid.addEventListener('click', function() {
    gridMode.classList.toggle('active');
    gridIcon.classList.toggle('active');
    gridContainer.classList.toggle('gridBorder');
    columns.forEach( c => {
        c.classList.toggle('colBorder');
    })
});