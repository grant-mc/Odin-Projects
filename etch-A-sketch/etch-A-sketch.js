
const grid = document.querySelector(".grid");
var button = document.querySelector("#newGrid");
button.addEventListener('click', function(e){
	reset();
})

setGrid();


function setGrid(){
	var size = prompt("Please Enter a grid size");
	drawGrid(size);
}

function drawGrid(size){
	
	
	for (var i = 1; i < (size * size); i++) {
		var div = document.createElement('div');
		div.classList.add('box');
		div.classList.add(i);
		//div.setAttribute('style', 'background-color: white');
		grid.appendChild(div);
	}
	grid.setAttribute('style','grid-template: repeat(' + size + ', 1fr) / repeat(' + size + ', 1fr)');
	color();
}

function color(){
	var boxes = document.querySelectorAll(".box");
	boxes.forEach((div) =>{
		div.addEventListener('mouseover', function(e){
	  		e.target.style.backgroundColor = '#74f7d4';
		})
	})
}

function reset(){
	var boxes = document.querySelectorAll(".box");
	boxes.forEach((div) =>{
		grid.removeChild(div);
	})
	setGrid();
}