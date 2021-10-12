import React from "react";
import { connect } from "react-redux";

const Convocados = ({ titulares, suplentes }) => {
  return (
    <section className="convocador_container">
      {/* titulares */}
      <h1>Titulares</h1>
      {titulares.length > 0 ? (
        titulares.map((titular) => {
          return (
            <div>
              <button>X</button>
              <img src={titular.foto} alt="asdasda" />
              <p>{titular.nombre}</p>
            </div>
          );
        })
      ) : (
        <h1>Sin titulares asignados</h1>
      )}

      {/* suplentes */}
      <h1>suplentes</h1>
      {suplentes.length > 0 ? (
        suplentes.map((suplente) => {
          return (
            <div>
              <button>X</button>
              <img src={suplente.foto} alt="asdasda" />
              <p>{suplente.nombre}</p>
            </div>
          );
        })
      ) : (
        <h1>Sin suplentes asignados</h1>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    titulares: state.titulares,
    suplentes: state.suplentes,
  };
};

export default connect(mapStateToProps, null)(Convocados);
