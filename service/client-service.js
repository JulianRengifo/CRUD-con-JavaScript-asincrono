
const crearNuevaLinea = (nombre, email) => {
    
    //Bueno, en este caso yo lo que quiero es generar el tr, el puro tr. Lo voy a crear, ya puedo eliminarlo 
    const linea = document.createElement("tr")
    //Lo que necesitamos es poder combinar código HTML con JavaScript, y eso lo vamos a lograr con los backticks, es decir estas comillas al revés
    const contenido = `
            <td class="td" data-td>
            ${nombre}
            </td>
            <td> ${email} </td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          `;

            linea.innerHTML = contenido;
            return linea
};

//La informacion anterior se guardara en data-table
//Entonces lo que va a hacer esto es recorrer todo el árbol del DOM y obtener este elemento de aquí.
const table = document.querySelector("[data-table]")


// CRUD :   -----   Metodos HTTP
// Create   -----   POST
// Read     -----   GET
// Update   -----   PUT / PATCH
// Delete   -----   DELETE

//  Abre una conexion con esta url   ------    Esta la recibe y la transforma en formato json y luego tiene acceso a data
const listaClientes = () => fetch ("http://localhost:3000/perfil").then ((respuesta) => respuesta.json());


//En la parte del response, es decir la respuesta que tenemos, una vez que sale de lo que viene siendo nuestra promesa, se va a convertir en data.

listaClientes(). then((data) => {
    // tenemos data, que es un arreglo, y los arreglos, como sabes, tienen métodos. El que nosotros vamos a utilizar es .forEach.
    data.forEach(perfil => {
      //Y lo que quiero entonces es: créame entonces aquí una nueva línea, despues de crearlo lo agregamos
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
      // Para agregarlo usamos es table.appendChild(nuevaLinea).
      table.appendChild(nuevaLinea);
  });
})
.catch((error) => alert("Ocurrio un error"));  //Por si existe un error




