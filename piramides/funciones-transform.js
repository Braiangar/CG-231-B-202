/**
 * Geometria: Crea un objeto THREE.Geometry y lo retorna
 * Entradas: vx= Arreglo de vertices (arreglo de arreglos de enteros)
 * Salidas: 
 */
function Geometria(vx){
    geom = new THREE.Geometry();
    for (let i = 0; i < vx.length; ++i) {
        x = vx[i][0];
        y = vx[i][1];
        z = vx[i][2];
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
    }
    return geom;
}

/**
 * Traslation: crea la matriz de traslacion a partir del vector vt
 * Entradas: vt= Vector de traslacion (arreglo de tres enteros)
 * Salida: matriz= Matriz de traslacion
 */
function Traslation(vt) {
var matriz = new THREE.Matrix4();
matriz.set( 1, 0, 0, vt[0],
            0, 1, 0, vt[1],
            0, 0, 1, vt[2],
            0, 0, 0, 1);
return matriz;
}

/**
 * Traslation: crea la matriz de traslacion a partir del vector vt
 * Entradas: vt= Vector de traslacion (arreglo de tres enteros)
 * Salida: matriz= Matriz de traslacion
 */
function escalado(vs) {
    var matriz = new THREE.Matrix4();
    matriz.set( vs[0], 0, 0, 0,
                0, vs[1], 0, 0,
                0, 0, vs[2], 0,
                0, 0, 0, 1);
    return matriz;
    }
/**
 * Escalado real:
 * Entrada: OBJETO: Objeto tipo THREE.line a ser ecalado, vs(Vectores escalado),vp(posicion inicial)
 * Salida: obj actualizado
 */
function EscaladoReal(obj,vp,vs){
    vt=[-vp[0],-vp[1],-vp[2]];//Traslacion al punto de origen
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(escalado(vs)); // Escalado del objeto
    obj.applyMatrix(Traslation(vp));
}

/**
 * Rotacion x: crea la matriz de rotacion a partir del agulo ang
 * Entradas: ang= angulo a rotar 
 * Salida: matriz= Matriz de rotacion en x
 */
function rotacionX(ang) {
    var beta = ang;
    var cosx = Math.cos(beta);
    var sinx = Math.sin(beta);
    var matriz = new THREE.Matrix4();
    matriz.set( 1, 0, 0, 0,
                0, cosx, -sinx, 0,
                0, sinx, cosx, 0,
                0, 0, 0, 1);
    return matriz;
    }

    /**
 * Rotacion y: crea la matriz de rotacion a partir del agulo ang
 * Entradas: ang= angulo a rotar 
 * Salida: matriz= Matriz de rotacion en y
 */
function rotacionY(ang) {
    var beta = ang;
    var cos = Math.cos(beta);
    var sin = Math.sin(beta);
    var matriz = new THREE.Matrix4();
    matriz.set( cos, 0,sin, 0,
                0, 1, 0, 0,
                -sin, 0, cos, 0,
                0, 0, 0, 1);
    return matriz;
    }

    /**
 * Rotacion z: crea la matriz de rotacion a partir del agulo ang
 * Entradas: ang= angulo a rotar 
 * Salida: matriz= Matriz de rotacion en z
 */
function rotacionZ(ang) {
    var beta = ang;
    var cos = Math.cos(beta);
    var sin = Math.sin(beta);
    var matriz = new THREE.Matrix4();
    matriz.set( cos, -sin, 0, 0,
                sin, cos, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 1);
    return matriz;
    }
/**
 * Rotacion real:
 * Entrada: OBJETO: Objeto tipo THREE.line a ser ecalado,vp(posicion inicial),ang(angulo a rotar)
 * Salida: obj actualizado
 */
function rotacionRealx(obj,vp,ang){
    vt=[-vp[0],-vp[1],-vp[2]];//Traslacion al punto de origen
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(rotacionX(ang)); // Rotacion del objeto
    obj.applyMatrix(Traslation(vp));
}
/**
 * Rotacion real:
 * Entrada: OBJETO: Objeto tipo THREE.line a ser ecalado,vp(posicion inicial),ang(angulo a rotar)
 * Salida: obj actualizado
 */
function rotacionRealy(obj,vp,ang){
    vt=[-vp[0],-vp[1],-vp[2]];//Traslacion al punto de origen
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(rotacionY(ang)); // Rotacion del objeto
    obj.applyMatrix(Traslation(vp));
}
/**
 * Rotacion real:
 * Entrada: OBJETO: Objeto tipo THREE.line a ser ecalado,vp(posicion inicial),ang(angulo a rotar)
 * Salida: obj actualizado
 */
function rotacionRealz(obj,vp,ang){
    vt=[-vp[0],-vp[1],-vp[2]];//Traslacion al punto de origen
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(rotacionZ(ang)); // Rotacion del objeto
    obj.applyMatrix(Traslation(vp));
}
