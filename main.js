function percentX(percent) {
	return Math.round((percent / 100) * window.innerWidth)
}
function percentY(percent) {
	return Math.round((percent / 100) * window.innerHeight)
}

const Engine = Matter.Engine,
	Bodies = Matter.Bodies,
	Body = Matter.Body,
	Svg = Matter.Svg,
	Vertices = Matter.Vertices,
	Constraint = Matter.Constraint,
	Composite = Matter.Composite,
	Mouse = Matter.Mouse,
	MouseConstraint = Matter.MouseConstraint,
	Render = Matter.Render,
	Runner = Matter.Runner

// create an engine
const engine = Engine.create(),
	world = engine.world

// create a renderer
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: false,
		showInternalEdges: false,
		width: percentX(100),
		height: percentY(100),
		background: 'transparent',
	},
})

let bodies = [],
	bgColor = '#fff'

// boundaries

var ceiling = Bodies.rectangle(
	percentX(100) / 2,
	percentY(0) - 10,
	percentX(100),
	20,
	{ isStatic: true }
)
var floor = Bodies.rectangle(
	percentX(100) / 2,
	percentY(100) + 10,
	percentX(100),
	20,
	{ isStatic: true }
)
var rightWall = Bodies.rectangle(
	percentX(100) + 10,
	percentY(100) / 2,
	20,
	percentY(100),
	{ isStatic: true }
)
var leftWall = Bodies.rectangle(
	percentX(0) - 10,
	percentY(100) / 2,
	20,
	percentY(100),
	{ isStatic: true }
)
ceiling.render.visible = false
floor.render.visible = false
rightWall.render.visible = false
leftWall.render.visible = false
bodies.push(ceiling)
bodies.push(floor)
bodies.push(rightWall)
bodies.push(leftWall)

// add all bodies (boundaries and circles) to the world
Composite.add(world, bodies)

// SVGs

let vertexSets = [],
	svgOne,
	svgTwo,
	svgThree,
	svgThreeLegOne,
	svgThreeLegTwo,
	svgThreeCounter,
	svgFour,
	svgFourCounter,
	svgF,
	svgR

let cX = percentX(20)
let cY = percentY(20)

let iX = percentX(40)
let iY = percentY(30)

let aX = percentX(60)
let aY = percentY(20)

let aXLegOne = aX - 43
let aYLegOne = aY + 49

let aXLegTwo = aX + 43
let aYLegTwo = aY + 49

let oX = percentX(80)
let oY = percentY(30)

// let letterSize = (window.innerWidth / 1000);

let letterSizeHorizontal = 0.8,
	letterSizeVertical = 0.8

// Strawberry SVG

let shapeStrawberry = document
	.getElementById('svg-strawberry')
	.querySelectorAll('path')

shapeStrawberry.forEach((path) => {
	svgStrawberry = Bodies.fromVertices(
		cX,
		cY,
		Vertices.scale(Svg.pathToVertices(path, 3), 2, 2),
		{
			render: {
				fillStyle: '#F50100',
				strokeStyle: '#F50100',
				lineWidth: 2,
			},
		},
		true
	)

	vertexSets.push(svgStrawberry)
})

// Banana

let shapeBanana = document.getElementById('svg-banana').querySelectorAll('path')

shapeBanana.forEach((path) => {
	svgBanana = Bodies.fromVertices(
		cX,
		cY,
		Vertices.scale(Svg.pathToVertices(path, 3), 2, 2),
		{
			render: {
				fillStyle: '#FFC227',
				strokeStyle: '#FFC227',
				lineWidth: 2,
			},
		},
		true
	)

	vertexSets.push(svgBanana)
})

// Peach

let shapePeach = document.getElementById('svg-peach').querySelectorAll('path')

shapePeach.forEach((path) => {
	svgPeach = Bodies.fromVertices(
		cX,
		cY,
		Vertices.scale(Svg.pathToVertices(path, 3), 2, 2),
		{
			render: {
				fillStyle: '#FFA28D',
				strokeStyle: '#FFA28D',
				lineWidth: 2,
			},
		},
		true
	)

	vertexSets.push(svgPeach)
})

// Orange

let shapeOrange = document.getElementById('svg-orange').querySelectorAll('path')

shapeOrange.forEach((path) => {
	svgOrange = Bodies.fromVertices(
		cX,
		cY,
		Vertices.scale(Svg.pathToVertices(path, 3), 2, 2),
		{
			render: {
				fillStyle: '#FF9000',
				strokeStyle: '#FF9000',
				lineWidth: 2,
			},
		},
		true
	)

	vertexSets.push(svgOrange)
})

// Pear

let shapePear = document.getElementById('svg-pear').querySelectorAll('path')

shapePear.forEach((path) => {
	svgPear = Bodies.fromVertices(
		cX,
		cY,
		Vertices.scale(Svg.pathToVertices(path, 3), 2, 2),
		{
			render: {
				fillStyle: '#B6EF01',
				strokeStyle: '#B6EF01',
				lineWidth: 2,
			},
		},
		true
	)

	vertexSets.push(svgPear)
})

// // I

// $('#svg-2')
// 	.find('path')
// 	.each(function (i, path) {
// 		let randomColor = Math.floor(Math.random() * 16777215).toString(16)

// 		svgTwo = Bodies.fromVertices(
// 			iX,
// 			iY,
// 			Vertices.scale(
// 				Svg.pathToVertices(path, 10),
// 				letterSizeHorizontal,
// 				letterSizeVertical
// 			),
// 			{
// 				render: {
// 					fillStyle: '#' + randomColor,
// 					strokeStyle: '#' + randomColor,
// 					lineWidth: 2,
// 				},
// 			},
// 			true
// 		)

// 		vertexSets.push(svgTwo)
// 	})

// $('#svg-f')
// 	.find('path')
// 	.each(function (i, path) {
// 		let randomColor = Math.floor(Math.random() * 16777215).toString(16)

// 		svgF = Bodies.fromVertices(
// 			iX,
// 			iY,
// 			Vertices.scale(
// 				Svg.pathToVertices(path, 10),
// 				letterSizeHorizontal,
// 				letterSizeVertical
// 			),
// 			{
// 				render: {
// 					fillStyle: '#' + randomColor,
// 					strokeStyle: '#' + randomColor,
// 					lineWidth: 2,
// 				},
// 			},
// 			true
// 		)

// 		vertexSets.push(svgF)
// 	})

// A

$('#svg-3')
	.find('path')
	.each(function (i, path) {
		svgThree = Bodies.fromVertices(
			aX,
			aY,
			Vertices.scale(
				Svg.pathToVertices(path, 10),
				letterSizeHorizontal,
				letterSizeVertical
			),
			{
				render: {
					fillStyle: '#000',
					strokeStyle: '#000',
					lineWidth: 2,
				},
			},
			true
		)

		vertexSets.push(svgThree)
	})

$('#svg-3-leg-1')
	.find('path')
	.each(function (i, path) {
		svgThreeLegOne = Bodies.fromVertices(
			aXLegOne,
			aYLegOne,
			Vertices.scale(
				Svg.pathToVertices(path, 10),
				letterSizeHorizontal,
				letterSizeVertical
			),
			{
				render: {
					fillStyle: '#000',
					strokeStyle: '#000',
					lineWidth: 2,
					isStatic: true,
				},
			},
			true
		)

		vertexSets.push(svgThreeLegOne)
	})

$('#svg-3-leg-2')
	.find('path')
	.each(function (i, path) {
		svgThreeLegTwo = Bodies.fromVertices(
			aXLegTwo,
			aYLegTwo,
			Vertices.scale(
				Svg.pathToVertices(path, 10),
				letterSizeHorizontal,
				letterSizeVertical
			),
			{
				render: {
					fillStyle: '#000',
					strokeStyle: '#000',
					lineWidth: 2,
					isStatic: true,
				},
			},
			true
		)

		vertexSets.push(svgThreeLegTwo)
	})

$('#svg-3-counter')
	.find('path')
	.each(function (i, path) {
		svgThreeCounter = Bodies.fromVertices(
			aX,
			aY,
			Vertices.scale(
				Svg.pathToVertices(path, 10),
				letterSizeHorizontal,
				letterSizeVertical
			),
			{
				render: {
					fillStyle: bgColor,
					strokeStyle: bgColor,
					lineWidth: 2,
				},
			},
			true
		)

		vertexSets.push(svgThreeCounter)
	})

// create compound body for letter "A"
var compoundBodyA = Body.create({
	parts: [svgThree, svgThreeLegOne, svgThreeLegTwo, svgThreeCounter],
})

// // O

// $('#svg-4')
// 	.find('path')
// 	.each(function (i, path) {
// 		let randomColor = Math.floor(Math.random() * 16777215).toString(16)

// 		svgFour = Bodies.fromVertices(
// 			oX,
// 			oY,
// 			Vertices.scale(
// 				Svg.pathToVertices(path, 10),
// 				letterSizeHorizontal,
// 				letterSizeVertical
// 			),
// 			{
// 				render: {
// 					fillStyle: '#' + randomColor,
// 					strokeStyle: '#' + randomColor,
// 					lineWidth: 1,
// 				},
// 			},
// 			true
// 		)

// 		vertexSets.push(svgFour)
// 	})

// $('#svg-4-counter')
// 	.find('path')
// 	.each(function (i, path) {
// 		svgFourCounter = Bodies.fromVertices(
// 			oX,
// 			oY,
// 			Vertices.scale(
// 				Svg.pathToVertices(path, 10),
// 				letterSizeHorizontal,
// 				letterSizeVertical
// 			),
// 			{
// 				render: {
// 					fillStyle: bgColor,
// 					strokeStyle: bgColor,
// 					lineWidth: 1,
// 				},
// 			},
// 			true
// 		)

// 		vertexSets.push(svgFourCounter)
// 	})

// create compound body for letter "O"
// var compoundBodyO = Body.create({
// 	parts: [svgFour, svgFourCounter],
// })

// add A and O compound bodies to the world
// Composite.add(world, [compoundBodyA, compoundBodyO])

Composite.add(world, compoundBodyA)

// add all SVGs to the world
Composite.add(world, vertexSets)

// run the renderer
Render.run(render)

// create runner
const runner = Runner.create()

// run the engine
Runner.run(runner, engine)

// gravity

let intervalID

function changeGravity() {
	if (!intervalID) {
		intervalID = setInterval(setGravity, 3000)
	}
}

let intervalNumber = 1
function setGravity() {
	if (intervalNumber === 1) {
		// console.log("interval " + intervalNumber + ", down");
		world.gravity.y = 0.5
		world.gravity.x = 0
		intervalNumber += 1
	} else if (intervalNumber === 2) {
		// console.log("interval " + intervalNumber + ", up");
		world.gravity.y = -0.5
		world.gravity.x = 0
		intervalNumber += 1
	} else if (intervalNumber === 3) {
		// console.log("interval " + intervalNumber + ", right");
		world.gravity.x = 0.5
		world.gravity.y = 0
		intervalNumber += 1
	} else {
		// console.log("interval " + intervalNumber + ", left");
		world.gravity.x = -0.5
		world.gravity.y = 0
		intervalNumber = 1
	}
}

// hold in place for testing
// world.gravity.y = 0;
// world.gravity.x = 0;

changeGravity()

// mouse control

let mouse = Mouse.create(render.canvas),
	mouseConstraint = MouseConstraint.create(engine, {
		mouse: mouse,
		constraint: {
			stiffness: 0.2,
			render: {
				visible: false,
			},
		},
	})

Composite.add(world, mouseConstraint)
