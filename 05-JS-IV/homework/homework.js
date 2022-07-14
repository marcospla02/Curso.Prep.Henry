// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var objeto= {         // lo del objeto litera. declaramos la variable y hacemor , clave-valor
      nombre: nombre,   // ponemos la propiedad con el valor. despues hacemos el metodo llamado meow 
      edad: edad,
      meow:function() {
        return "Meow!";
      } 
  } 
     return objeto;
}
function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  
  objeto[property] = null;    // uso bracket notation porue le quiero agregar una propiedad nueva a property
  return objeto;              // si le pongo comillas doy por echo quw se llama property, es por eso que no las pongo.

}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:

  objeto[metodo]()    // para invocar pongo ()
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
   
  return objetoMisterioso.numeroMisterioso *5;   // como ya sabemos la propiedad que tiene lo escribimos con dot notation
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  delete objeto[unaPropiedad];
   return objeto;

}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
                              
  var nuevoUsuario= {        //creo el objeto literal.
    nombre: nombre,
    email: email,
    password: password,
  }
    return nuevoUsuario;
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

  if (usuario["email"]){      // si usuario tiene email, devuelvo true 
    return true
  } else {
    return false
  }

}
function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  if (objeto[propiedad]) {       // preguntar lo del key, me hizo confundir --> falta saber
    return true                  // como es una variable que nos pasan por paramatro no le pongo las comillas, si le pongo las comillas es lo mismo que escrbir objeto.propiedad
  } else {                       // que es lo mismo que decirle que propiedad se llama porpiedad, y no es asi
    return false
  }

}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:                             // ver video 11/7 para saber cuando le pongo comillas
                                              // y cuando no, por la hora y pico, explicado arriba
      // esta es la propiedad, esta es la contraseña enviada
      if (usuario["password"]===password){    // lo que hacemos es, como la propiedad password se escribe password, le pongo los corchtes
        return true                           // y ademas me esta diciendo si password es igual a la propiedad password. 
      } else {                                // resumen: si la contraseña escrita por parametro es igual a la propiedad del objeto contraseña.
        return false
      }
  }


function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  
  usuario.password = nuevaPassword;   //porque si pongo usuario[password] no me lo toma?
  return usuario;                     // porque si o si le tengo que poner las comillas, sino no melo toma con el bracket notation
                                      // respondo: porque la variable no me la pasaron por parametro, pero si existe porque nos da a enteder eso, ya qe nos piden hacer nueva password
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:

  usuario.amigos.push(nuevoAmigo)    //el return se hace en otra linea para que retorne con la modificacion hecha
  return usuario;                    //si pongo return en esa linea no va a retornar la modificacion 
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  
  for (let i = 0; i < usuarios.length; i++) {
        usuarios[i].esPremium=true;
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  // posts [{post.likes}]

  var suma=0
  for (let i = 0; i < usuario.posts.length; i++) {   // si pongo console.log("suma", suma) en el test me muestra como se esta ejecutando 
       suma+=usuario.posts[i].likes                  // y sirve para ver si hice un error.
  }           
      return suma; 
                                                    // usuario es un objeto que la propiedad es post, que es un array
}                                                   // al posts lo pongo en [i], para que me busque esa publicaion con esa cantidad de likes y lo sume
                                                    

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  
  // producto: precio,
  // porcentajeDeDescuento: descuento  
                                      // aca producto ya esta definido, por eso no pongo producto.precio y defino var preciofinal....
  var preciofinal=0;
  producto.calcularPrecioDescuento = function() {
      producto.precio;                        //<--  estos dos no hace falta ponerlo, los puse para orientarme mas
      producto.porcentajeDeDescuento;         //<--
      preciofinal = producto.precio - (producto.precio * producto.porcentajeDeDescuento);
      return preciofinal;
    }
   
        return producto;
}
    

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
