const sideContainer = document.querySelector("#side_container");
// query selector let's you find/return html elements, spec.
const gridContainer = document.createElement("section");
// creates new html element types, UI's, update page quick and APPEND

const CREATE_GRID_CONTAINER = () => { 
    gridContainer.setAttribute("id", "grid_container");
    // setting the value and a name 
    sideContainer.appendChild(gridContainer);
    // HTML section appends to new section
}

const CREATE_GRID_BOXES = (num, dimensions) => {
    for (let i = 0; i < num * num; i++) {
        const boxes = document.createElement("div");
        boxes.classList.add("grid_boxes"); //assume you can create this; becomes classes
        // creates boxes with given w x h
        boxes.style.width = `${dimensions}px`; 
        boxes.style.height = `${dimensions}px`;
        gridContainer.appendChild(boxes);
    }
}

// basically HTML
CREATE_GRID_CONTAINER();
CREATE_GRID_BOXES(16, 31); 

const GRID_COLOR_CHANGE = () => {
    const randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    if (randomNumber === 1) {
        const lighter_blue = "#9999ff";
        return lighter_blue;
    } else if (randomNumber === 2) {
        const light_blue = "#6666ff";
        return light_blue;
    } else if (randomNumber === 3) {
        const blue = "#1a1aff";
        return blue;
    } else if (randomNumber === 4) {
        const darker_blue = "#0000cc";
        return darker_blue;
    } else if (randomNumber === 5) {
        const darkest_blue = "#000080";
        return darkest_blue;
    }
}

// For initialization only 
const allGridBoxes = document.querySelectorAll(".grid_boxes");

for (let i = 0; i < allGridBoxes.length; i++) {
    allGridBoxes[i].addEventListener("mouseover", () => 
        allGridBoxes[i].style.background = GRID_COLOR_CHANGE());
}

const grid16 = document.querySelector("#grid_16");

grid16.addEventListener("click", () => {
    // Clears grid upon selection
    while (gridContainer.firstChild) { 
        gridContainer.removeChild(gridContainer.firstChild);
    } 
    CREATE_GRID_CONTAINER();
    CREATE_GRID_BOXES(16, 31);
    
    const allGridBoxes = document.querySelectorAll(".grid_boxes");
    for (let i = 0; i < allGridBoxes.length; i++) {
        allGridBoxes[i].addEventListener("mouseover", () => 
            allGridBoxes[i].style.background = GRID_COLOR_CHANGE());
    }
});

const grid32 = document.querySelector("#grid_32");

grid32.addEventListener("click", () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    CREATE_GRID_CONTAINER();
    CREATE_GRID_BOXES(32, 15.625);

    const allGridBoxes = document.querySelectorAll(".grid_boxes");
    for (let i = 0; i < allGridBoxes.length; i++) {
        allGridBoxes[i].addEventListener("mouseover", () => 
            allGridBoxes[i].style.background = GRID_COLOR_CHANGE());
    }
});

const grid64 = document.querySelector("#grid_64");

grid64.addEventListener("click", () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    CREATE_GRID_CONTAINER();
    CREATE_GRID_BOXES(64, 7.8125);

    const allGridBoxes = document.querySelectorAll(".grid_boxes");
    for (let i = 0; i < allGridBoxes.length; i++) {
        allGridBoxes[i].addEventListener("mouseover", () => 
            allGridBoxes[i].style.background = GRID_COLOR_CHANGE());
    }
});

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    const allGridBoxes = document.querySelectorAll(".grid_boxes");
    for (let i = 0; i < allGridBoxes.length; i++) {
        allGridBoxes[i].style.background = "white";
}});