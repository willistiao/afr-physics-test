function percentX(percent) {
	return Math.round((percent / 100) * window.innerWidth)
}
function percentY(percent) {
	return Math.round((percent / 100) * window.innerHeight)
}

const colorBlack = '#000'

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

// HTML Elements

let linkLookbook = document.getElementById('link-lookbook')

let linkBodyWidth = linkLookbook.offsetWidth
let linkBodyHeight = linkLookbook.offsetHeight

let linkSoundcloud = document.getElementById('link-soundcloud')

let linkSoundcloudBodyWidth = linkSoundcloud.offsetWidth
let linkSoundcloudBodyHeight = linkSoundcloud.offsetHeight

let linkShop = document.getElementById('link-shop')

let linkShopBodyWidth = linkShop.offsetWidth
let linkShopBodyHeight = linkShop.offsetHeight

let linkYoutube = document.getElementById('link-youtube')

let linkYoutubeBodyWidth = linkYoutube.offsetWidth
let linkYoutubeBodyHeight = linkYoutube.offsetHeight

var linkLookbookBody = Bodies.rectangle(
	100,
	100,
	linkBodyWidth,
	linkBodyHeight,
	{
		isStatic: false,
		element: linkLookbook,
		chamfer: { radius: 60 },
		render: {
			visible: false,
		},
	}
)

var linkSoundcloudBody = Bodies.rectangle(
	300,
	100,
	linkSoundcloudBodyWidth,
	linkSoundcloudBodyHeight,
	{
		isStatic: false,
		element: linkSoundcloud,
		chamfer: { radius: 60 },
		render: {
			visible: false,
		},
	}
)

var linkShopBody = Bodies.rectangle(
	500,
	100,
	linkShopBodyWidth,
	linkShopBodyHeight,
	{
		isStatic: false,
		element: linkShop,
		chamfer: { radius: 60 },
		render: {
			visible: false,
		},
	}
)

var linkYoutubeBody = Bodies.rectangle(
	800,
	100,
	linkYoutubeBodyWidth,
	linkYoutubeBodyHeight,
	{
		isStatic: false,
		element: linkYoutube,
		chamfer: { radius: 60 },
		render: {
			visible: false,
		},
	}
)

Composite.add(world, [
	linkLookbookBody,
	linkSoundcloudBody,
	linkShopBody,
	linkYoutubeBody,
])

// Update Position
Matter.Events.on(engine, 'beforeUpdate', function (event) {
	// Update the position of the div element based on the Matter.js body
	linkLookbook.style.left =
		linkLookbookBody.position.x - linkBodyWidth / 2 + 'px'
	linkLookbook.style.top =
		linkLookbookBody.position.y - linkBodyHeight / 2 + 'px'

	var angleRadians = linkLookbookBody.angle
	var angleDegrees = (angleRadians * 180) / Math.PI

	linkLookbook.style.transform = 'rotate(' + angleDegrees + 'deg)'

	// link Soundcloud update
	linkSoundcloud.style.left =
		linkSoundcloudBody.position.x - linkSoundcloudBodyWidth / 2 + 'px'
	linkSoundcloud.style.top =
		linkSoundcloudBody.position.y - linkSoundcloudBodyHeight / 2 + 'px'

	var angleRadianslinkSoundcloud = linkSoundcloudBody.angle
	var angleDegreeslinkSoundcloud = (angleRadianslinkSoundcloud * 180) / Math.PI

	linkSoundcloud.style.transform =
		'rotate(' + angleDegreeslinkSoundcloud + 'deg)'

	// link Shop update
	linkShop.style.left = linkShopBody.position.x - linkShopBodyWidth / 2 + 'px'
	linkShop.style.top = linkShopBody.position.y - linkShopBodyHeight / 2 + 'px'

	var angleRadianslinkShop = linkShopBody.angle
	var angleDegreeslinkShop = (angleRadianslinkShop * 180) / Math.PI

	linkShop.style.transform = 'rotate(' + angleDegreeslinkShop + 'deg)'

	// link Youtube update
	linkYoutube.style.left =
		linkYoutubeBody.position.x - linkYoutubeBodyWidth / 2 + 'px'
	linkYoutube.style.top =
		linkYoutubeBody.position.y - linkYoutubeBodyHeight / 2 + 'px'

	var angleRadianslinkYoutube = linkYoutubeBody.angle
	var angleDegreeslinkYoutube = (angleRadianslinkYoutube * 180) / Math.PI

	linkYoutube.style.transform = 'rotate(' + angleDegreeslinkYoutube + 'deg)'
})

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
	svgR,
	svgStrawberry,
	svgBanana,
	svgOrange,
	svgPeach,
	svgPear

// letter coordinate position
let cX = percentX(30)
let cY = percentY(20)

let iX = percentX(40)
let iY = percentY(30)

let aX = percentX(10)
let aY = percentY(20)

let aXLegOne = aX - 43 * 2.49
let aYLegOne = aY + 49 * 2.47

let aXLegTwo = aX + 43 * 2.47
let aYLegTwo = aY + 49 * 2.47

let oX = percentX(80)
let oY = percentY(30)

// fruit scale
let fruitScaleXY = 4

// let letterSize = window.innerWidth / 1000

let letterSizeHorizontal = 2,
	letterSizeVertical = 2

// Strawberry SVG

let shapeStrawberry = document
	.getElementById('svg-strawberry')
	.querySelectorAll('path')

shapeStrawberry.forEach((path) => {
	svgStrawberry = Bodies.fromVertices(
		cX,
		cY,
		Vertices.scale(Svg.pathToVertices(path, 3), fruitScaleXY, fruitScaleXY),
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
		Vertices.scale(Svg.pathToVertices(path, 3), fruitScaleXY, fruitScaleXY),
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
		Vertices.scale(Svg.pathToVertices(path, 3), fruitScaleXY, fruitScaleXY),
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
		Vertices.scale(Svg.pathToVertices(path, 3), fruitScaleXY, fruitScaleXY),
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
		Vertices.scale(Svg.pathToVertices(path, 3), fruitScaleXY, fruitScaleXY),
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
					fillStyle: colorBlack,
					strokeStyle: colorBlack,
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
					fillStyle: colorBlack,
					strokeStyle: colorBlack,
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
					fillStyle: colorBlack,
					strokeStyle: colorBlack,
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

// letter "F"
let shapeF = document.getElementById('svg-f').querySelectorAll('path')

shapeF.forEach((path) => {
	svgF = Bodies.fromVertices(
		300,
		100,
		Vertices.scale(Svg.pathToVertices(path, 3), 4.7, 4.7),
		{
			render: {
				fillStyle: colorBlack,
				strokeStyle: colorBlack,
				lineWidth: 2,
			},
		},
		true
	)

	vertexSets.push(svgF)
})

// letter "R"
let shapeR = document.getElementById('svg-r').querySelectorAll('path')

shapeR.forEach((path) => {
	svgR = Bodies.fromVertices(
		900,
		100,
		Vertices.scale(Svg.pathToVertices(path, 3), 4.7, 4.7),
		{
			render: {
				fillStyle: colorBlack,
				strokeStyle: colorBlack,
				lineWidth: 2,
			},
		},
		true
	)

	vertexSets.push(svgR)
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
