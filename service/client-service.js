



// CRUD :   -----   Metodos HTTP
// Create   -----   POST
// Read     -----   GET
// Update   -----   PUT / PATCH
// Delete   -----   DELETE

//  Abre una conexion con esta url   ------    Esta la recibe y la transforma en formato json y luego tiene acceso a data
const listaClientes = () => fetch ("http://localhost:3000/perfil").then ((respuesta) => respuesta.json());


export const clientServices = {
  listaClientes,
};




