
import { clientServices } from "../service/client-service.js";

//obtenemos la informacion del formulario editar donde encontramos el nombre y el email
const formulario = document.querySelector("[data-form]")

const obtenerInformacion = () => {
    // carga la url cuando le damos al boton editar
    const url = new URL(window.location);
    //Obtenemos el id del cliente seleccionado al dar en el boton editar
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href = "/screens/error.html";
    }

    //Obtiene la informacion de nombre y email al darle en el boton editar
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    // Al obtener la informacion le decimos donde debe de llevarla en este caso aparecera en los campos como autocompletado
    //En este caso debemos usar perfil.nombre, perfil.email para que no haga conflicto con las const nombre y email
    clientServices.editarCliente(id).then((perfil) => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    });
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