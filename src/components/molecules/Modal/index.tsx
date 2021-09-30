import React, { Component } from "react";
import { createNewPet } from "../../../utils/db";

interface Props {
  show: () => void;
}
type State = {
  owner_email: string;
  name: string;
  species: string;
  breed: string;
};

export default class Modal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      owner_email: "",
      name: "",
      species: "",
      breed: "",
    };
  }

  onChange = (event: React.ChangeEvent) => {
    const { id, value } = event.target as HTMLInputElement;
    switch (id) {
      case "owner_email":
        this.setState({ owner_email: value });
        break;
      case "name":
        this.setState({ name: value });
        break;
      case "species":
        this.setState({ species: value });
        break;
      case "breed":
        this.setState({ breed: value });
        return;
    }
  };

  handleNewPet = () => {
    createNewPet(
      "correo@mail.com",
      this.state.name,
      this.state.species,
      this.state.breed
    ).then(() => {
      this.props.show();
    });
  };

  hideModal = () => {
    this.props.show();
  };

  render() {
    const { owner_email, name, species, breed } = this.state;
    return (
      <div className="modal-container">
        <h1>Crear una nueva mascota</h1>
        <div className="modal-items-container">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" value={name} onChange={this.onChange} />
        </div>
        {/* <div className="modal-items-container">
          <label htmlFor="name">Fecha de nacimiento</label>
          <input
            type="date"
            id="fecha_nacimiento"
            value={""}
            onChange={this.onChange}
          />
        </div> */}
        <div className="modal-items-container">
          <label htmlFor="species">Especie</label>
          <input
            type="text"
            id="species"
            value={species}
            onChange={this.onChange}
          />
        </div>
        <div className="modal-items-container">
          <label htmlFor="name">Raza</label>
          <input
            type="text"
            id="breed"
            value={breed}
            onChange={this.onChange}
          />
        </div>
        <div className="modal-button-container">
          <button className="modal-button" onClick={this.handleNewPet}>
            Guardar y crear
          </button>
          <button className="modal-button" onClick={this.hideModal}>
            Cancelar
          </button>
        </div>
      </div>
    );
  }
}
