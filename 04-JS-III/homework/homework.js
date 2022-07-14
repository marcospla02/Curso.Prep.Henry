// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código: 
  return array [0]   // esto es porque el primer elemento siempre se posiciona el el 0

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1] //el ultimo elemento se escribe .length - 1 porque si ponemos solo el 
                                //.length me estaria dando un elemento mas que no existe y me saltaria error.                               
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length // a diferencia del anterior este me pide el largo del array no el elemento, por eso no le puse el -1 

}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // array: [2,3,5,5]
  var newarr=[]                      //definimos una variable para guardar los numero nuevos ahi
  for( let i=0;i<array.length;i++){  // y como tengo que recorrer e incremetarlos por uno uso el for
    newarr[i]= array[i]+1            // pongo el mas uno porque me pide qu elo incremente
  }                                  // le pongo tambien el indice i al newarr para que me guarde todos los nuevos numeros, sino me guardaria solo el ultimo 
   return newarr;

}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento); //.push() agrega algo al final del array
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento); //agrega al principio
  return array;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
   return palabras.join(" ")   // .join() sirve para que me devuelvan palabras, y con las comillas adentro con un espacio
}                              // esas palabras  me las separa y no quedan todas pegadas.


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for ( let i =0; i< array.length; i++){     // aca como no se cuantos elementos hay en el array uso el bucle for para recorre (el array)
    if (array[i]===elemento) return true;    // y pongo . length porque justamente no se cuando termina
    }                                        // depsues digo, si el array[i] (en el indice/posicion[i]) es estrictamente igual a elemento dame true sino false
    return false                             // el triple igual (===) es estrictamente, el doble (==) es mas flexible, y el igual (=) es para asinar.
  }



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var acumulador=0                        // como nos pide que sume los enteros ydevuelva un resultado, pongo un acumulador donde arranca en 0 (para que se vaya sumando)           
  for (let i=0; i<numeros.length; i++){   // lo mismo que antes, uso el for paar recorrer todos los numero que me den en el parametro
        acumulador+=numeros[i];           // el i++ sirve paar que el for vaya avanzando en su bucle hasta terminar con la lista,
  }                                        // si pongo i-- el bucle va a ir para atras.
  return acumulador;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var cant=0;                                // ponemos un acumulador, usamos el bucle for para recorrer los numeros
  var cantFinalDeNumeros=resultadosTest.length        // para calcular el promedio dividimos con el .length por no sabemos cuantos numero tiene la lista/array
  for (let i=0; i<resultadosTest.length;i++){     //cantidadfinal de numero, es la cantidad todal que esta en la lista de resultadosTest
       cant+=resultadosTest[i];                   // defini esa variable para estar mas comodo, sino era lo mismo si ponia promedio= cant/resultadosTest.length;
  }
  var promedio= cant/cantFinalDeNumeros;
   return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // numeros: [1,4,2,6]
  //           i
  var numgrande=0;                       // acumulador, recorremos con el bucle for. 
  for (let i=0; i<numeros.length;i++){   // preguntamos si el numero en la posicion i, es mayor al numerogrande que definimos y si es asi 
        if(numeros[i]>numgrande){        // asignamos el numero que esta en la posicion [i] al numero grande, y va pisando el numero anterior si es que hay uno mas grande mas adelante de la lista
          numgrande=numeros[i];          // y sino retorna el ultimo que quedo
        }
  }
   return numgrande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var producto=1;
  if(arguments.length===0)return 0;              // aca producto sepone en un para que x lo menos sea multiplicado en  1,
  else{                                          //si poneos cero siempre va a dar cero
    for (let i = 0; i < arguments.length; i++) {
      producto*= arguments[i];  
    }
    return producto;
  }

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  // array: [1,43,5,19]
  //            i 
  var catarr=0;
  for( let i=0; i<arreglo.length;i++){    // aca no es que el numero se pone en el array nuevo, cuentas cuantos elementos mayores a 18 tengo
       if(arreglo[i]>18){                 // por eso hacemos el catarr++, para que se vayan sumando ahi mismo y me retorne la cantidad
          catarr++;
       }  
  }
  return catarr;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia>1 && numeroDeDia<7){  
       return "Es dia Laboral";
  } else {
       if (numeroDeDia==1 || numeroDeDia==7){
          return "Es fin de semana";
     }    
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var nStr=n.toString();   // creamos una nueva variable para convertir el numero ene en String.
  if (nStr[0]==="9"){      // nuemor en String que este en la posicion cer si es estrictamente igual a '9' return true..
    return true            // en este caso no uso un for, porque como parametro me dan solo un numero.
  } else{
    return false
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
    for (let i = 0; i < arreglo.length -1 ; i++) {   // ceamos un for, recorre todo el arreglo y pregunta, si el numero en [i]
          if(arreglo[i] != arreglo[i+1]){            // es distinto al numero en [i] return false, sino true          
            return false                             // si no pongo arreglo[i+1] va estar en la misma posicion que el otro, el mas uno es para que avance una posicion.
          }
    } 
    return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  //Escribe tu codigo aqui:
  var nuevoarray=[];                                // basicamente busco los meses y los guardo en el array vacio que cree
  for (let i = 0; i < array.length; i++) {
     if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre"){
         nuevoarray.push(array[i]);
     } 
  }                
  if (nuevoarray.length<3){                       // como dice si alguno de los meses no esta, return no se encontraron, pongo que si
    return "No se encontraron los meses pedidos"  // el nuevo array tiene menos de tres elementos, false.
  }else{
    return nuevoarray;
  }
}
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200.
  // Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var newarray=[];
  for (let i = 0; i < 201; i++) {
       if(array[i]>100 && array[i]<=200)
       newarray.push(array[i]);
  }
  return newarray;
} 




function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  // array: [1,3,5,40]
  var array=[];
  
  for (var i = 0; i < 10; i++) {
      numero = numero + 2;

      if(numero===i) break;
       else{
         array.push(numero);
       }
  }
    if (i < 10) {
      return "Se interrumpió la ejecución"

    } else {
       return array
    }

}
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
  var array=[];
   
  for (var i = 0; i < 10; i++) {      // cuando el numero de iteraciones alcanza el 5 sigue de largo no lo suma no hace nada
    
     if(i===5) continue;
     else{
      numero= numero + 2;
      array.push(numero) 
     }
  }
  return array;
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};


