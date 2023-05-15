



// CRUD :   -----   Metodos HTTP
// Create   -----   POST
// Read     -----   GET
// Update   -----   PUT / PATCH
// Delete   -----   DELETE

//  Abre una conexion con esta url   ------    Esta la recibe y la transforma en formato json y luego tiene acceso a data
const listaClientes = () => fetch ("http://localhost:3000/perfil").then ((respuesta) => respuesta.json());


// Esta función recibira los datos que se ingresan en registro_controller.js y que se encargue de enviárselos a nuestro servidor o a nuestro API.
const crearCLiente = (nombre, email) => {
   // Recibe un parametro que es la url
  return fetch("http://localhost:3000/perfil", {
    // El otro parametro que es un objeto el cual va a ser el metodo POST para crear un nuevo recurso
    method: "POST",
    //dentro de este mismo objeto, vamos a definirle los encabezados. Estos encabezados es solo como para tener un estándar o que el servidor sepa qué tipo de archivo es el que va a recibir. 
    headers:{
      "Content-Type": "application/json"
    },
    // En body este objeto es donde nosotros vamos a poner toda la información que nosotros queremos que se envíe a través del cuerpo de la petición. 
    //La comunicación http trabaja con texto, lo que necesitamos ahora es transformar este objeto en texto.
    // Para eso usamos JSON.stringify
    body:JSON.stringify({nombre, email, id: uuid.v4()})  // vamos a mandar un id, pero este id en lugar de recibirlo, lo vamos a generar con esta librería uuid.
    //y vamos a acceder a través de una URL que se encuentra en registar_cliente.html aparece como script.
  });
};


const eliminarCliente = (id) => {
  // Se pasa el primer parametro que es el link y como segundo parametro el metodo delete ("eliminar")
  // Dentro de la url inyectamos el id
  return fetch (`http://localhost:3000/perfil/${id}`, 
    {method: "DELETE",
  });  
};


export const clientServices = {
  listaClientes,
  crearCLiente,
  eliminarCliente,
};




