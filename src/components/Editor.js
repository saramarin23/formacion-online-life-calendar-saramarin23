import React from "react";
import { Link } from "react-router-dom";

const Editor = props => {
  return (
    <form className="editor_form">
      <label htmlFor="date" className="editor_date">
        Fecha
        <input
          type="date"
          id="date"
          placeholder="21/04/2018"
          data-field="date"
          onChange={props.getDate}
        />
      </label>
      <label htmlFor="state" className="editor_state">
        Estado
      </label>
      <label htmlFor="happy-button">
        <input id="happy-button" data-field="mood" type="radio" /> :)
      </label>
      <label htmlFor="sad-button">
        <input id="sad-button" data-field="mood" type="radio" /> :(
      </label>
      <label className="editor_message">
        Mensaje{" "}
        <input
          type="text"
          data-field="message"
          placeholder="¿Por qué es un buen día?"
        />
      </label>
      <button className="editor_button-save" type="submit">
        GUARDAR
      </button>
      <Link to="/">
        <button className="editor_button-reset">Cancelar</button>
      </Link>
    </form>
  );
};

export default Editor;
