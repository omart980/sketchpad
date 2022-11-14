// Function  that creates a container and X amount of divs.

const infoContainer = document.querySelector("#info-container");
// https://www.youtube.com/watch?v=3oOKAJTD2F8
// S: let's you find/return html elements, spec.
const sketchContainer = document.createElement("section");
// S: create new html elements, UI's, update page quick and APPEND
// https://www.youtube.com/watch?v=VW8kNAous88

// anonymous function/ no name func
// https://www.youtube.com/watch?v=h33Srr5J9nY
// passing a function to another function

const createSketchContainer = () => { //Arrow func.
    sketchContainer.setAttribute("id", "sketch-container");
    // setting the value and a name
    infoContainer.appendChild(sketchContainer);
}

const createDivs = (num, dimensions) => {
    for (let i = 0; i < num * num; i++) {
        const divs = document.createElement("div");
        divs.classList.add("grid-divs"); //assume you can create this
        divs.style.width = `${dimensions}px`; 
        divs.style.height = `${dimensions}px`;
        sketchContainer.appendChild(divs);
        // app. div to new sketchC.
    }
}


createSketchContainer();
createDivs(16, 31); //these affect each other

// Divs will change color when hovered
const gridDivs = document.querySelectorAll(".grid-divs");

const colorChange = () => {
    const randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    if (randomNumber === 1) {
        const colorBlue = "blue";
        return colorBlue;
    } else if (randomNumber === 2) {
        const colorYellow = "yellow";
        return colorYellow;
    } else if (randomNumber === 3) {
        const colorRed = "red";
        return colorRed;
    } else if (randomNumber === 4) {
        const colorGreen = "green";
        return colorGreen;
    } else if (randomNumber === 5) {
        const colorPurple = "Purple";
        return colorPurple;
    }
}

for (let i = 0; i < gridDivs.length; i++) {
    gridDivs[i].addEventListener("mouseover", () => gridDivs[i].style.background = colorChange());
    // event listener 1. add action,
    // Question: e or ()
}


// Size Seletion: 16 x 16 size

const grid16 = document.querySelector("#grid_16");

grid16.addEventListener("click", () => {
    while (sketchContainer.firstChild) { //a boolean?
        sketchContainer.removeChild(sketchContainer.firstChild);
    } // assume this erases
    // without this, old one stays
    
    //infoContainer.removeChild(sketchContainer);
    // the purpose of this??, maybe extra clearing
    createSketchContainer();
    createDivs(16, 31);
    
    const gridDivs = document.querySelectorAll(".grid-divs");
    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].addEventListener("mouseover", () => gridDivs[i].style.background = colorChange());
    }
});

// Size Seletion: 32 x 32 size

const grid32 = document.querySelector("#grid_32");

grid32.addEventListener("click", () => {
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
    //infoContainer.removeChild(sketchContainer);
    createSketchContainer();
    createDivs(32, 15.625);
    const gridDivs = document.querySelectorAll(".grid-divs");
    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].addEventListener("mouseover", () => gridDivs[i].style.background = colorChange());
    }
});

// Size Seletion: 64 x 64 size

const grid64 = document.querySelector("#grid_64");

grid64.addEventListener("click", () => {
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
    //infoContainer.removeChild(sketchContainer);
    createSketchContainer();
    createDivs(64, 7.8125);
    const gridDivs = document.querySelectorAll(".grid-divs");
    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].addEventListener("mouseover", () => gridDivs[i].style.background = colorChange());
    }
});

// Reset(white) function 
const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    const gridDivs = document.querySelectorAll(".grid-divs");
    for (let i = 0; i < gridDivs.length; i++) {
    gridDivs[i].style.background = "white";
}});