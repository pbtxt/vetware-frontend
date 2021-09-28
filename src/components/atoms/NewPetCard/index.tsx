import React, { Component } from "react";

export interface Props {}

type State = {};

export default class NewPetCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <div className="pet-card-container">
        <h1 className="pet-card-title">Añadir una nueva mascota</h1>
        <span className="pet-card-desc">
          Agrega una nueva mascota para poder agendar citas para tratamientos y
          para nuestra clínica veterinaria
        </span>
        <button className="actionButton">Crear</button>
      </div>
    );
  }
}
