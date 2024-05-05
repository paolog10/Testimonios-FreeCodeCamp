import React from "react";
import {  } from "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt="Imagen de Emma" 
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-tesimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-tesimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-tesimonio">"{props.testimonio}"
        </p>
      </div>
    </div>
  );  
}

export default Testimonio; //exporta por defecto solo uno