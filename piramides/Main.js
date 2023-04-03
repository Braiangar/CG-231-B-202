
function init() {

// Escena
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    
renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 1.0);
renderer.setSize(window.innerWidth, window.innerHeight);

var size = 700;
var arrowSize = 40;
var divisions = 20;
var origin = new THREE.Vector3( 0, 0, 0 );
var x = new THREE.Vector3( 1, 0, 0 );
var y = new THREE.Vector3( 0, 1, 0 );
var z = new THREE.Vector3( 0, 0, 1 );
var color2 = new THREE.Color( 0x333333 );  /// 0x333333
var colorR = new THREE.Color( 0xAA0000 );
var colorG = new THREE.Color( 0x00AA00 );
var colorB = new THREE.Color( 0x0000AA );

//Crear la Grilla
var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

//Flechas
var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );

//Cámara
camera.position.x = 500;
camera.position.y = 500;
camera.position.z = 500;
camera.lookAt(scene.position);

// Colores
color =[{color:0xFF0000},{color:0x00ff00},{color:0x0000FF}];

//geometria para las piramides
lado= 30;
h=30;
[v1,v2,v3,v4,v5]=[[0,0,0],[lado,0,0],[lado,0,lado],[0,0,lado],[lado/2,h,lado/2]];
vertices=[v1,v2,v3,v4,v5,v1,v4,v3,v5,v2];
geom=Geometria(vertices);

//materiales para las piramides
material = [];
for(i=0; i<2; i++)
  material.push(new THREE.ParticleBasicMaterial(color[i]));

//figuras para las piramides (Arreglo fig)
fig = [];
vt=[lado*2,lado*2,0]
for(i=0; i<2; i++){
 fig.push(new THREE.Line(geom, material [i]));
 fig[i].applyMatrix(Traslation(vt));
}
//Rotar una piramide sobre x
//fig[1].applyMatrix(Traslation(vt));
EscaladoReal(fig[1],vt,[1.5,1.5,1.5]);
rotacionRealx(fig[1],vt,Math.PI/4);
rotacionRealy(fig[1],vt,Math.PI/4);     // No funciona al llamar mas de una transformacion seguidas
rotacionRealz(fig[1],vt,Math.PI/3);

//rotacionRealz(fig[0],vt,Math.PI);
//rotacionRealz(fig[1],vt,Math.PI/2);
// En el documento HTML
document.body.appendChild(renderer.domElement);

// Agregar elementos al escenario
scene.add(gridHelperXZ);
scene.add(arrowX);	
scene.add(arrowY);	
scene.add(arrowZ);
for (let i = 0; i < 2; i++) {
   scene.add(fig[i]);
    
}

renderer.render(scene, camera);
}
init();  // otra forma: window.onload = init;


