import { SET_TITULARES, SET_SUPLENTES } from "../actions/index";
const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Paulo Dybala",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQm63IJGIQg6fkR64KB4vuT6dT3YH8SpkQrw&usqp=CAU",
    },
    {
      id: 2,
      nombre: "Neymar Jr.",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqPDlXEXWHSb39Wsp-_ey_QNPqC_kQT43UmUVNrzXsWKrHctuAWO1sB0c3jSs3rXYsQA&usqp=CAU",
    },
    {
      id: 3,
      nombre: "Gareth Bale",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDl1Ukzlih3QcesCHtNuKKkUgi3uI1NWHwOA&usqp=CAU",
    },
  ],

  titulares: [],
  suplentes: [],
};

// action={
//     type:"set_suplentes",
//     payload:data
// }

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITULARES:
      return {
        ...state,
        titulares: [...state.titulares, action.payload],
        jugadores: state.jugadores.filter(
          (jugador) => jugador.id !== action.payload.id
        ),
      };
    case SET_SUPLENTES:
      return {
        ...state,
        suplentes: [...state.suplentes, action.payload],
        jugadores: state.jugadores.filter(
          (jugador) => jugador.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
