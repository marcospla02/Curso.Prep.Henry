// No cambies los nombres de las funciones.

const { eliminarPropiedad } = require("../../05-JS-IV/homework/homework");

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
  var caracter= {};                         // el caracter esat vacio porque se va completando ahi 
  for (let i=0; i< string.length; i++) {    // el ! va porque nuestro cracter esta vacio y esa letra nunca la encontramos, entonces decimos si la letra en la string no esta en nuestro caracter, por lo tanto es la primera vez que aparece 
      if(!caracter[string[i]]){            // e iniciamos un conteo, el conteo lo inicio en cero y se va a ir sumando de a uno por cada vez que se repita esa letra 
          caracter[string[i]]=0           // pregunta:¿ porque se pone con cero la priemra vez? --> se pone igual cero porque primero se agrega la letra y despues abajo se empieza a contar y quedaria a:1
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
                        // respuesta: porque cambia la letra del objeto s[i] (en el indice i).
  var may= '';                               //  nuestra variable va vacia porque se va llenadno con las letras para formar a palabra
  var min='';
  for (let i = 0; i < s.length; i++) {  
    if(s[i] === s[i].toUpperCase() ){      // .toUpperCase() --> convierte la letra en mayuscula
      may+= s[i]                          // lo sumamos para que la string se una y forme una palabra.
    } else 
    min+= s[i]  // agrega la 's' + 'o' +'y'  // si esa letra no es igual a esa letra en mayuscula sumalo con las ltras minuscula.
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
  //La misma debe retornar: "Es capicua" si el número se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  // 1 1 1 1
  // 0 1 2 3 --> [i]                         obs: tiene que ser i igual al largo del numero que me pasan -1 para que pueda arrancar del ultimo numero que tiene esa string
  var numeroAlReves=''                      // es mayor o igual a cero para que se corte ahi, sino seguiria hasta el final, y es -- para que vaya retrocediendo
  var numero1= numero.toString()                //¿porque tiene que ser afuera el if?--> El if está fuera para que compare con el número una vez se formó numeroAlReves y no cada vez que hace un ciclo. Si lo hiciera dentro del for, llegaría al if, no se cumpliría la condición y retornaría 'no es capicua' para cualquier valor que reciba la función.
  for (let i = numero1.length-1; i>=0; i--) {   // ¿numero1 no tendria que ser [i-1]? --> (para poner numero1[i-1] no deberia poner el for el .length - 1. y tambien deberia cambiar la condicion de finalizacion porque cortria en cero y evaluaria la posicion de cero -1 que esa posicion no esxiste, quedaria i>0. y asi si funcionaria) Recordá que la propiedad .length representa la longitud de una cadena string, pero si la vemos como un arreglo, el primer índice es 0 y el último .length-1. Cuando le asigna a i el valor numero1.length-1 le esta dando la ultima posición de la string, si se le restara 1 a i, estaría representando la ultima posición - 1a posición(es decir, la ante ultima posicion) y estaríamos dejando atrás valores a tratar
      numeroAlReves+= numero1[i]                //¿porque la tengo que pasar a string?->El número se pasa a string para que te permita evaluar cada carácter que tenga. Recordá que un string se puede ver como un arreglo de caracteres.
    }                                           // Ej: numero = 349; 
    if(numero1 === numeroAlReves){              // numero.toString() -> '349' -> ['3']['4']['9']                 
      return 'Es capicua'                       //Esto te permite iterar sobre cada carácter y lograr darle la vuelta al número.
    } else{
      return 'No es capicua'
    }                                                 
  
  }


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  // ejemplo 'marcos' -->mros
 var canueva= '';
 for ( var i=0; i <cadena.length; i++){
    if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {  // si yo pongo que sea estictamente igual, lo que hace es sumarlo y recibir abc, sin borrarlo
      canueva+= cadena[i]                                              // que explique esto y porque no usa el delete. yo lo habi pensado con todo estricta// igual.
    }                                                 //usamos el and, porque cadena tiene que ser distinta a todas('a','b','c'). ponemos que sea distinta porque nos va a sumar todas las letras de cadena, menos las que dijimos.
}                                                     // para formar la nueva cadena, si se encunetra con 'a' y 'b' y 'c', no las suma. por eso es que no hace falta poner delete, porque como no me suma esas letras en la nueva cadena no va a aparecer.
return canueva;                                       // recumen, si no es difrente de esa letra es igual, entonces la condicion del if no se cumple, para que se cumpla los tres tienen que ser veraderos

}
function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a,b){  // el sort ordena, en este caso le estamos pidiendo que nos ordene de menor longitud a mayor longitud
    return a.length - b.length    // entonces le hago length(longitud) de un elemento del array menos el otro. el sort por dentro recorre todo el array.
  })                              // el - es para comparar  

}
function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var array= [];                                  // no hace falta aclarar retotnar un arreglo vacio, porque nosotros cuando lo definimos esta vacio y si no cumple con la condicion de if, me lo retorna vacio
  for (let i = 0; i < arreglo1.length; i++) {     // hacemos dos for, porque hay que recorrer dos arreglos distintos. el push lo uso para que me agregue todo en el array que definimos (a todo me refiero, los mismos numero)
    for (let e = 0; e < arreglo2.length; e++) {   // los que estoy diciendo al final es que agregue en el array definido el numero que es estrictamente igual al otro arreglo, no impota que arreglo ponga ahi, porque me pide los mismos numero.
      if(arreglo1[i] === arreglo2[e]) {
        array.push(arreglo2[e])
      }
    }  
  }

  return array;
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

