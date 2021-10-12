// action={
//     type:"set_suplentes",
//     payload:data
// }
export const SET_TITULARES = "SET_TITULARES";
export const SET_SUPLENTES = "SET_SUPLENTES";

export const addTitular = (jugador) => {
  return {
    type: SET_TITULARES,
    payload: jugador,
  };
};

export const addSuplente = (jugador) => {
  return {
    type: SET_SUPLENTES,
    payload: jugador,
  };
};

// gestionar la accion para vovler a seccion jugadores
