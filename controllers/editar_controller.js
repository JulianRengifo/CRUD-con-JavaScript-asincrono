
import { clientServices } from "../service/client-service.js";

//obtenemos la informacion del formulario editar donde encontramos el nombre y el email
const formulario = document.querySelector("[data-form]")

const obtenerInformacion = async () => {
    // carga la url cuando le damos al boton editar
    const url = new URL(window.location);
    //Obtenemos el id del cliente seleccionado al dar en el boton editar
    const id = url.searchParams.get("id");
    
    //Si no encuntra un id valido se procede al if
    if(id === null){
        window.location.href = "/screens/error.html";
    }

    //Obtiene la informacion de nombre y email al darle en el boton editar
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");


//try...catch va a funcionar exclusivamente dentro de una función asíncrona.
//La declaración try...catch señala un bloque de instrucciones a intentar (try), y especifica una respuesta si se produce una excepción (catch).
    try{
            /*  el then ya lo maneja aquí adentro el await, entonces la respuesta que obtengas, la vas a asignar a esta constante llamada perfil. 
        Por lo tanto, yo ya puedo obtener esta sintaxis, en la cual voy a hacer una llamada asíncrona a clientServices.detalleCliente,
        voy a esperar que se comunique con el servidor de la respuesta y la respuesta la vamos a obtener en perfil. */
        const perfil = await clientServices.editarCliente(id)

        if(perfil.nombre && perfil.email){
            // Al obtener la informacion le decimos donde debe de llevarla en este caso aparecera en los campos como autocompletado
        //En este caso debemos usar perfil.nombre, perfil.email para que no haga conflicto con las const nombre y email
        nombre.value = perfil.nombre;
        email.value = perfil.email;
        }else{
            throw new Error();
        }
    }catch(error){
        window.location.href = "/screens/error.html";
    } 
};


obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    //Se evita que el formulario haga le peticion para que nosotros con javascript lo hagamos
    evento.preventDefault()

    // carga la url cuando le damos al boton editar
    const url = new URL(window.location);
    //Obtenemos el id del cliente seleccionado al dar en el boton editar
    const id = url.searchParams.get("id");

    //obtiene la informacion de nombre y email que estan en los inputs
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    //Llamamos la funcion que se va a encargar de actualizar
    clientServices.actualizarCliente(nombre, email, id).then(() => {
        //Redirecciona la pagina a otra donde nos informa que el cliente a sido editado exitosamente
        window.location.href = "/screens/edicion_concluida.html";
    });

});