import React, { Component } from "react";

export interface Props {
  name: string;
  species: string;
  date_birth: string;
}

type State = {};

export default class MyPetsCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    const { name, species, date_birth } = this.props;

    return (
      <div className="pet-card-container">
        <h1 className="pet-card-title">{name}</h1>
        <span className="pet-card-desc">{date_birth}</span>
        <span className="pet-card-desc">{species}</span>
        <div>
          <button className="actionButton">Agendar cita</button>
          <button className="actionButton">Historia</button>
        </div>
      </div>
    );
  }
}
