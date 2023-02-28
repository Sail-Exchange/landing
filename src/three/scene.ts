import * as THREE from 'three';

import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let camera: THREE.PerspectiveCamera,
	controls: OrbitControls,
	scene: THREE.Scene,
	renderer: THREE.WebGLRenderer,
	effect: AsciiEffect;

let sphere: THREE.Mesh;

const start = Date.now();

const loader = new GLTFLoader();

function init(div: HTMLDivElement, text = 'Gavin') {
	camera = new THREE.PerspectiveCamera(70, 1, 1, 1000);
	camera.position.y = 150;
	camera.position.z = 500;

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0, 0, 0);

	const pointLight1 = new THREE.PointLight(0xffffff);
	pointLight1.position.set(500, 500, 500);
	scene.add(pointLight1);

	const pointLight2 = new THREE.PointLight(0xffffff, 0.25);
	pointLight2.position.set(-500, -500, -500);
	scene.add(pointLight2);

	const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.1);
	scene.add(hemisphereLight);

	sphere = new THREE.Mesh(
		new THREE.SphereGeometry(200, 200, 200),
		new THREE.MeshPhongMaterial({ flatShading: true })
	);
	scene.add(sphere);

	renderer = new THREE.WebGLRenderer({
		antialias: false,
		alpha: true
	});

	renderer.setSize(500, 500);

	const asciiChars = ` .:-+*=%@#${text}`;

	effect = new AsciiEffect(renderer, asciiChars, { invert: true, alpha: true });
	effect.setSize(500, 500);
	effect.domElement.style.color = 'white';

	div.appendChild(effect.domElement);

	// Special case: append effect.domElement, instead of renderer.domElement.
	// AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

	controls = new OrbitControls(camera, renderer.domElement);

	if (window) {
		window.addEventListener('onMouseDown', () => {
			console.log('Clicked!');
		});

		window.addEventListener('resize', onWindowResize);
		window.addEventListener('mousedown', () => {
			console.log('Clicked!');
		});
	}
}

export function createScene(div: HTMLDivElement, text?: string) {
	init(div, text);
	animate();
}

function onWindowResize() {
	console.log('RESIZE');
	camera.aspect = 1 / 1;
	camera.updateProjectionMatrix();

	renderer.setSize(500, 500);
	effect.setSize(500, 500);
}

function animate() {
	requestAnimationFrame(animate);

	render();
}

function render() {
	const timer = Date.now() - start;

	sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 75;
	sphere.rotation.x = (1 / 4) * Math.sin(timer * 0.0005);
	sphere.rotation.y = timer * 0.0002;
	// sphere.rotation.z = timer * 0.0002;

	controls.update();

	effect.render(scene, camera);
}