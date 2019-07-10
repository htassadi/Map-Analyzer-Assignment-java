// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on
let row, column;

// Solution Functions...
function level1Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 4) {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Water"; 
	}
}

function level2Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 2) {
		document.getElementById("currentTile").innerHTML = "Hills";
	} else if (column >=8) {
		document.getElementById("currentTile").innerHTML = "Water"; 
	} else {
	}
}

function level3Solution() {
	// USE BINARY IF STATEMENT
	if (column >=3 && column <=7) {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Hills"; 
	}
}

function level4Solution() {
	// USE BINARY IF STATEMENT
	if (row >=3) {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Hills"; 
	}
}

function level5Solution() {
	// USE CHAINED IF STATEMENT
	if (row >=6) {
		document.getElementById("currentTile").innerHTML = "Water"; 
	} else if (row <=2) {
		document.getElementById("currentTile").innerHTML = "Hills"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	}
}

function level6Solution() {
	// USE BINARY IF STATEMENT
	if (row >=2 && row <=5) {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Water"; 
	}
}

function level7Solution() {
	// USE BINARY IF STATEMENT
	if (row ==4 && column ==7) {
		document.getElementById("currentTile").innerHTML = "Water"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	}
}

function level8Solution() {
	// USE BINARY IF STATEMENT
	if (row ==5 || column ==2) {
		document.getElementById("currentTile").innerHTML = "tree"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	}
}

function level9Solution() {
	// USE BINARY IF STATEMENT
	if (row <=5 && column <=5) {
		document.getElementById("currentTile").innerHTML = "Water"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	}
}

function level10Solution() {
	// USE CHAINED IF STATEMENT
	if (column <=1) {
		document.getElementById("currentTile").innerHTML = "Hills"; 
	} else if (column >=8) {
		document.getElementById("currentTile").innerHTML = "Water"; 
	} else if (column >=4 && column <=7) {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Tree"; 
	}
}

function level11Solution() {
	// USE CHAINED IF STATEMENT
	if (row <=3 && column <=5) {
		document.getElementById("currentTile").innerHTML = "Water"; 
	} else if (row <=3 && column >=6) {
		document.getElementById("currentTile").innerHTML = "Hills"; 
	} else if (row >=4 && column <=6){
		document.getElementById("currentTile").innerHTML = "Sand"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Trees"; 
	}
}

function level12Solution() {
	// USE BINARY IF STATEMENT
	if (row <=4 && column <=5 || row >=5 && column >=6) {
		document.getElementById("currentTile").innerHTML = "Water"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	}
	
}

function level13Solution() {
	// USE BINARY IF STATEMENT
	if (row >=2 && column >=4 && row <=5 && column <=9) {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Trees"; 
	}
}

function level14Solution() {
	// USE CHAINED IF STATEMENT
	if (row >=1 && column >=2 && row <=5 && column <=4) {
		document.getElementById("currentTile").innerHTML = "Trees"; 
	} else if (row >=3 && column >=7 && row <=5 && column <=10 ) {
		document.getElementById("currentTile").innerHTML = "Water"; 
	} else {
		document.getElementById("currentTile").innerHTML = "Sand"; 
	}
}
