// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  
  return nombre[0].toUpperCase() + nombre.slice(1); // nombre lo pongo con el indicce 0 porque necesito la cambiar la priimer letra
}                                                    // .slice(1) lo que hace es que me corta la palabra y lo devuleve, se pone en 1 porque quiero que me devuelva desde la posicion 1 en adelante.(porque la primera la transforme en mayuscula)

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb(cb);        
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  
  return cb(n1,n2)

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //tambien lo puedo hacer con for

  var sumo = numeros.reduce( function(acumulador, elemento){   
    return acumulador + elemento
  },0);
    return cb(sumo); 
 }

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  
  array.forEach(function (elemento){
         cb(elemento)
  });

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  var newArray = array.map(function(elemento) { 
         return cb(elemento)         
         
  });
  return newArray

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

var newArray = array.filter(function(palabra){
    return palabra[0] ==='a'                    // este la letra en la primer posicion
})                                              // por eso pongo subindice 0 y que sea estrictamente igual
  return newArray;
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
