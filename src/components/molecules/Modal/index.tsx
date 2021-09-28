import React, { Component } from "react";

interface Props {}

export default class Modal extends Component<Props> {
  static defaultProps = { className: "" };

  render() {
    return (
      <div className="modal-container">
        <h1>Crear una nueva mascota</h1>
        <div className="modal-items-container">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" />
        </div>
        <div className="modal-items-container">
          <label htmlFor="name">Fecha de nacimiento</label>
          <input type="date" name="fecha_nacimiento" />
        </div>
        <div className="modal-items-container">
          <label htmlFor="name">Raza</label>
          <input type="text" name="breed" />
        </div>
        <div className="modal-button-container">
          <button className="modal-button">Guardar y crear</button>
        </div>
      </div>
    );
  }
}
