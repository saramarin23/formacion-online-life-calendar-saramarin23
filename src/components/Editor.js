import React from "react";

const Editor = () => {
  return (
    <form className="editor_form">
      <label className="editor_date">
        Fecha
        <input type="date" />
      </label>
      <label className="editor_state">
        Estado
        <label>
          :) <input type="checkbox" />
        </label>
        <label>
          :( <input type="checkbox" />
        </label>
      </label>
      <label className="editor_message">
        Mensaje <input type="text" placeholder="¿Por qué es un buen día?" />
      </label>
      <button className="editor_button-save" type="submit">
        GUARDAR
      </button>
      <button className="editor_button-reset">Cancelar</button>
    </form>
  );
};

export default Editor;
