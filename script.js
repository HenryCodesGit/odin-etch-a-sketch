console.log('hello world!');

const GRID_SIZE = 16;
const CONTAINER = document.querySelector('.container');
const GRID_COUNT_BUTTON = document.querySelector('#grid-count');
GRID_COUNT_BUTTON.addEventListener("click", () => makeNewGrid());

makeRows(GRID_SIZE);

function makeRows(size){
    for(i = 0; i<size; i++){

        let currRow = document.createElement('div');
        currRow.classList.add('row');
        for(j = 0; j<size; j++){
            let currCell = document.createElement('div');
            currCell.classList.add('cell');
            currRow.appendChild(currCell);
    
            currCell.addEventListener("mouseenter", ()=>{darkenCell(currCell);});

            currCell.addEventListener("mousedown", (e) => {
                e.preventDefault();
            })
            currCell.addEventListener("mousemove", (e) => {
                e.preventDefault();
            })

            currCell.addEventListener("touchstart", (e) => {
                e.preventDefault();
            })

            currCell.addEventListener("touchmove", (e) => {
                e.preventDefault();
            })
        }
    
        CONTAINER.appendChild(currRow);
    }
}

function darkenCell(element){
    element.style.backgroundColor = '#000000';
}

function makeNewGrid(){
    let count = prompt('New Grid Size:');
    
    for(i = CONTAINER.childNodes.length -1; i>=0; i--){
        CONTAINER.removeChild(CONTAINER.childNodes[i]);
    }

    makeRows(count);
}