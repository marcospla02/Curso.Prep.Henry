// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  var newArray = []
  for ( var clave in objeto){                 // uso for in, recorre el objeto y con .push lo agrego al array.
    newArray.push([clave, objeto[clave]])    //pongo.push([]) con corchetes porque va a convertisrse en el array sino sigue quedando en objeto
  }                                          // y como todo array adentro hay una coma, si pongo el mas me esta sumando las dos cosa y me lo pone todo junto. por eso le ponemos la coma
     return newArray;
  } 
  
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var caracter= {};                               // el caracter esat vacio porque se va completando ahi 
  for (let i=0; i< string.length; i++) {         // el ! va porque nuestro cracter esta vacio y esa letra nunca la encontramos, entonces decimos si la letra en la string no esta en nuestro caracter, por lo tanto es la primera vez que aparece 
      if(!caracter[string[i]]){                  // e iniciamos un conteo, el conteo lo inicio en cero y se va a ir sumando de a uno por cada vez que se repita esa letra 
          caracter[string[i]]=0                  // pregunta:¿ porque se pone con cero la priemra vez?
      }
      caracter[string[i]]+=1
    }
    return caracter
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  // holaCAPO           // pregunta, porque no se pone nada adentro del .toUpperCase('aca adentro')
  
  var may= '';                               //  nuestra variable va vacia porque se va llenadno con las letras para formar a palabra
  var min='';
  for (let i = 0; i < s.length; i++) {  
    if(s[i] === s[i].toUpperCase() ){      // .toUpperCase() --> convierte la letra en mayuscula
      may+= s[i]                          // lo sumamos para que la string se una y forme una palabra.
    } else 
    min+= s[i]                            // si esa letra no es igual a esa letra en mayuscula sumalo con las ltras minuscula.
  }
    return (may + min)                    // sumo las mayusculas primero porque me pide eso el ejercicio, y se suman para que se forme la palabra.        
  
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  // recibo una frase -> la devuelvo con las letras dadas vuelta
  // hago un for que arranque por el ultimo elemento porque tengo que  ir para atras.
  //pregunta, porque mayor o igual a cero? obs: va de menos uno porque tiene que ir para atras.
 
 // hola como estas --> satse omoc aloh      [[satse], [omoc], [aloh]]     [[aloh], [omoc], [sarse]]   aloh omoc satse     
 //                      con for                  con .split(' ')               con .reverse()             con .join(' ')
  var espejo='';

    for (let i = str.length-1; i>=0; i--) {
          espejo += str[i]                        // sumo el array y va ir dado vuelta, que eso es lo que me da el for
  }                                               // le hago un .split(' ') porque nos devuelve un array con cada parte que dividimos, para que pongamos para que nos divida le ponemos 'con un espacio' 
    return espejo.split(' ').reverse().join(' '); // con .reverse() doy vuelta las palabras.
                                                  // con .join(' ') saco las palabras del array(porque lo que hace join es juntar/concatenar todo) y las separo con 'conUnEspacio'
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

