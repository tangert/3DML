// draft of a 3d templating markup language for rapid 3d modeling and interface creation.

// let's say you want to make a rubiks cube.
// we have a few primitves; let's start with the box
// let's create a row by multiplying the number of boxes.


row(num):
	num * box

layer(num):
	num * row(3)

// declaritive
rubiks_cube(layers):
	layers * layer(layers) 

// imperitive
rubiks_cube(layers):
	for layers:
		layer(layers)

rubiks_cube(3)

row
	box
	box
	box