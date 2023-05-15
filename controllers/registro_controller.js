
import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")

//Agrega un escuchador  -- recibe dos parametros -- el primer evento es el que se va a escuchar -- El segundo evento es una funcion
// Entonces los formularios tienen un comportamiento ya definido dentro de JavaScript o dentro del navegador.
// Para prevenir esto      recibiremos nuestro evento
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();  // Dentro del evento esta propiedad preventDefault lo que hace es que el formulario actue como ya esta definido

    const nombre = document.querySelector("[data-nombre]").value // Con los data attributes vamos a obtener la informacion de los inputs
    const email = document.querySelector("[data-email]").value


    // Al ser esto una promesa se puede trabajar con then
    // Crear cliente nombre , email
    clientServices.crearCLiente(nombre, email).then( () => {  
        //Vamos entonces a decir window, que es un método que está disponible que es justamente toda la ventana o toda la pantalla. Window.location, que es la localización.
        // .href. Lo que vamos a hacer aquí es decirle cuál es la ruta que nosotros queremos seguir o el archivo que queremos llamar. 
        // Esto para redireccionar la pagina cuando se cree un registro nuevo aparezca registro completado
        window.location.href = "/screens/registro_completado.html"
    }).catch(error => console.log(error))  // En caso de que exista algún error.
});