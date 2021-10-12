import React from "react";
import { connect } from "react-redux";
import Jugador from "../Jugador/Jugador";

const Jugadores = ({ jugadores }) => {
  return (
    <div>
      <h1>Jugadores</h1>
      {jugadores.length > 0 ? (
        jugadores.map((jugador) => {
          return (
            <Jugador
              nombre={jugador.nombre}
              foto={jugador.foto}
              jugador={jugador}
            />
          );
        })
      ) : (
        <h1>Sin jugadores</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jugadores: state.jugadores,
  };
};

export default connect(mapStateToProps, null)(Jugadores);
