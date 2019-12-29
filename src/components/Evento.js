import React from "react";
import { EventosConsumer } from "../context/EventosContext";
const Evento = ({ evento }) => {
  let { text } = evento.description;
  if (text) {
    if (text.lenght > 250) {
      text = text.substr(0, 250);
    }
  } else {
    text = null;
  }
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {evento.log ? <img src={evento.logo.url} alt={evento.name} /> : null}
        </div>

        <div className="ukcard-body">
          <h3 className="uk-card-tittle">{evento.name.text}</h3>
          {text}
        </div>
        <div className="uk-card-footer">
          <a
            href={evento.url}
            className="uk-button uk-button-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Mas informacion
          </a>
        </div>
      </div>
    </div>
  );
};

export default Evento;
