var test = 0;

var Cube = (function(){
	var cube;
	
	var Cube = function(){
		var geometry = new THREE.CubeGeometry(1,1,1);
		var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		cube = new THREE.Mesh( geometry, material );
		scene.add( cube );
		camera.position.z = 5;
	}
	
	var p = Cube.prototype;
	
	p.render = function(){
		cube.rotation.x += 0.1;
		//cube.rotation.x += test;
		cube.rotation.y += 0.1;
	}
	
	return Cube;
})();