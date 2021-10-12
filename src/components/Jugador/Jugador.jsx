import React from "react";
import { addTitular, addSuplente } from "../actions/index";
import { connect } from "react-redux";

const Jugador = ({ nombre, foto, jugador, addTitular, addSuplente }) => {
  const handleTitulares = () => {
    addTitular(jugador);
  };
  const handleSuplentes = () => {
    addSuplente(jugador);
  };
  return (
    <div>
      <img src={foto} alt="foto_jugador" />
      <p>{nombre}</p>
      <button onClick={handleTitulares}>Titular</button>
      <button onClick={handleSuplentes}>Suplente</button>
    </div>
  );
};

// const mapDisptachToProps = (dispatch) => {
//   return {
//     addTitular: function (jugador) {
//       dispatch(addTitular(jugador));
//     },
//   };
// };
export default connect(null, { addTitular, addSuplente })(Jugador);
