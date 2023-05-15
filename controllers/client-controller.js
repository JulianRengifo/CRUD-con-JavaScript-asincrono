
import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (nombre, email, id) => {
    
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
                    href="../screens/editar_cliente.html?id=${id}" 
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                    id = "${id}"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          `;

          /* En la linea href="../screens/editar_cliente.html ? id=${id}"  a través de este identificador es que vamos 
          a poder consultar a nuestro Json server, para que nos regrese la información solamente de ese cliente.  */

            linea.innerHTML = contenido;

            //Boton eliminar usando la propiedad id
            const btn = linea.querySelector("button");
            btn.addEventListener("click", () => {
              const id = btn.id;
              //Pasamos el identificador que queremos eliminar en este caso usamos id
              clientServices.eliminarCliente(id).then(respuesta =>{
                console.log(respuesta);
              }).catch((err) => alert ("Ocurrio un error"))
            });
            return linea
};

//La informacion anterior se guardara en data-table
//Entonces lo que va a hacer esto es recorrer todo el árbol del DOM y obtener este elemento de aquí.
const table = document.querySelector("[data-table]")


clientServices.listaClientes(). then((data) => {
    // tenemos data, que es un arreglo, y los arreglos, como sabes, tienen métodos. El que nosotros vamos a utilizar es .forEach.
    data.forEach(({nombre, email, id}) => {
      //Y lo que quiero entonces es: créame entonces aquí una nueva línea, despues de crearlo lo agregamos
      const nuevaLinea = crearNuevaLinea(nombre, email, id);
      // Para agregarlo usamos es table.appendChild(nuevaLinea).
      table.appendChild(nuevaLinea);
  });
})
.catch((error) => alert("Ocurrio un error"));  //Por si existe un error

