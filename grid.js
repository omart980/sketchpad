// Function  that creates a container and X amount of divs.

const mainContainer = document.querySelector("#info-container");
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
    mainContainer.appendChild(sketchContainer);
}

const createDivs = (num, dimensions) => {
    for (let i = 0; i < num * num; i++) {
    const divs = document.createElement("div");
    divs.classList.add("grid-divs");
    divs.style.width = `${dimensions}px`; 
    divs.style.height = `${dimensions}px`;
    sketchContainer.appendChild(divs);
    }
}

/*
createSketchContainer();
createDivs(16, 31.25);

// Make the divs permanently change color when hovered.

const gridDivs = document.querySelectorAll(".grid-divs");

const colors = () => {
    const randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    if (randomNumber === 1) {
        const colorRed = "red";
        return colorRed;
    } else if (randomNumber === 2) {
        const colorBlue = "blue";
        return colorBlue;
    } else if (randomNumber === 3) {
        const colorYellow = "yellow";
        return colorYellow;
    } else if (randomNumber === 4) {
        const colorGreen = "green";
        return colorGreen;
    } else if (randomNumber === 5) {
        const colorBrown = "brown";
        return colorBrown;
    }
}

for (let i = 0; i < gridDivs.length; i++) {
    gridDivs[i].addEventListener("mouseover", () => gridDivs[i].style.background = colors());
}


// Choose grid size button

// 16 * 16 sketch size

const grid16 = document.querySelector("#grid-16");

grid16.addEventListener("click", () => {
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
    mainContainer.removeChild(sketchContainer);
    createSketchContainer();
    createDivs(16, 31.25);
    const gridDivs = document.querySelectorAll(".grid-divs");
    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].addEventListener("mouseover", () => gridDivs[i].style.background = colors());
    }
});

// 32 * 32 sketch size

const grid32 = document.querySelector("#grid-32");

grid32.addEventListener("click", () => {
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
    mainContainer.removeChild(sketchContainer);
    createSketchContainer();
    createDivs(32, 15.625);
    const gridDivs = document.querySelectorAll(".grid-divs");
    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].addEventListener("mouseover", () => gridDivs[i].style.background = colors());
    }
});

// 64 * 64 sketch size

const grid64 = document.querySelector("#grid-64");

grid64.addEventListener("click", () => {
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
    mainContainer.removeChild(sketchContainer);
    createSketchContainer();
    createDivs(64, 7.8125);
    const gridDivs = document.querySelectorAll(".grid-divs");
    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].addEventListener("mouseover", () => gridDivs[i].style.background = colors());
    }
});

// Reset button - turn all grids white

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
    const gridDivs = document.querySelectorAll(".grid-divs");
    for (let i = 0; i < gridDivs.length; i++) {
    gridDivs[i].style.background = "white";
}});*/