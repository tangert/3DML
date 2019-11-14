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

// idea:
// link up this syntax to A-frame / webgl / threejs and create an autolayout algorithm that converts this lightweight markup into absolute coordinates.

// also include utlities for easy styling, physics, lighting, etc