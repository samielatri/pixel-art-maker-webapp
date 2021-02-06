// designs.js

// DOM's elements selections

// Select color input

// from form 

// colorPicker selection 
let gridColor = window.document.getElementById('colorPicker');
console.log("gridColor = " + gridColor);

// Select size input

// inputHeight selection
let gridHeight = window.document.getElementById('inputHeight');
console.log("gridHeight = " + gridHeight);

// inputWidth selection
let gridWidth = window.document.getElementById('inputWidth');
console.log("gridWidth = " + gridWidth);

// submitBtn selection
let submitButton = window.document.getElementById("submitBtn");
console.log("submitButton = " + submitButton);

// from form ends

// pixelCanvas selection
let grid = window.document.getElementById('pixelCanvas');
console.log("grid = " + grid);

// end of DOM's elements selections

// makeGrid function
function makeGrid(x) {
	for( let i = 0; i < gridHeight.value; i++ ) {
		let row = grid.insertRow (0);
		for( let j = 0; j < gridWidth.value; j++) {
			row.insertCell (0);
		}
	}
}

// eventListeners

// When size is submitted by the user, call makeGrid()
	// onClick event listener on submitButton
	submitButton.addEventListener('click' , function(x){
		console.log("The current user clicked on the submit button");
		// remove the old grid
		grid.innerHTML = " "; // space string
		console.log("old grid removed");
		// prevent default behaviouur to keep previous changes that has been made 
		x.preventDefault();
		console.log("calling makeGrid function...")
		// call makeGrid function
		makeGrid();
	});

	// onClick event listener on grid
	grid.addEventListener('click' , function(x) {
		console.log("the user clicked on the grid");
		if( x.target.nodeName === 'TD' ) { // check specific area to color
			console.log("coloring the selected area...");
			x.target.style.backgroundColor = gridColor.value; // set the bg color
			console.log("selected area colored...");
		} else {
			console.log("no action was taken on click of the grid");
		}
	});

// end of eventListeners

// end of designs.js