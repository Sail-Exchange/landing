import * as THREE from 'three';

const boat = (): void => {
	const renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('three-scene') as HTMLCanvasElement,
		alpha: true,
	});

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(
		75,
		renderer.domElement.width / renderer.domElement.height,
		0.1,
		1000
	);

	renderer.setSize(renderer.domElement.width, renderer.domElement.height);

	document.body.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 5;

	function animate() {
		requestAnimationFrame(animate);

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		renderer.render(scene, camera);
	}

	function onWindowResize() {
		camera.aspect = renderer.domElement.width / renderer.domElement.height;
		camera.updateProjectionMatrix();

		renderer.setSize(renderer.domElement.width, renderer.domElement.height);
	}

	window.addEventListener('resize', onWindowResize, false);

	animate();
};

boat();
