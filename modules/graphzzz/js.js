// zdog-demo.js

function animate() {
	illo.updateRenderGraph();
	requestAnimationFrame(animate);
}

// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  rotate: { x : Zdog.TAU / 8, y : Zdog.TAU / 8 },
  dragRotate: true,
});

const capital = new Zdog.Shape({
	addTo: illo,
	stroke: 10,
	path: [
		{x:0},
		{x:-100},
		{x:100},
	],
	color: '#f00',
})

const work = capital.copy({
	path: [
		{z:0},
		{z:100},
		{z:-100},
	],
	color: '#00f',
})

const time = work.copy({
	path: [
		{y:0},
		{y:-100},
		{y:100}
	],
	color: '#0f0',
})

animate();
