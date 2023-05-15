
import { clientServices } from "../service/client-service.js";


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