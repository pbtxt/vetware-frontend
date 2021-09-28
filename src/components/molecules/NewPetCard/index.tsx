import React, { Component } from "react";
import { createNewPet } from "../../../utils/db";
import Modal from "../Modal";

export interface Props {}

type State = {
  showModal: boolean;
};

export default class NewPetCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="pet-card-container">
        <h1 className="pet-card-title">Añadir una nueva mascota</h1>
        <span className="pet-card-desc">
          Agrega una nueva mascota para poder agendar citas para tratamientos y
          para nuestra clínica veterinaria
        </span>
        <button className="actionButton" onClick={this.handleModal}>
          Crear
        </button>
        {showModal && <Modal show={this.handleModal} />}
      </div>
    );
  }
}
