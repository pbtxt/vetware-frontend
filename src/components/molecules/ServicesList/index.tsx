import React, { Component } from "react";
import { getServices } from "../../../utils/db";
import AppoinmentModal from "../AppointmentModal/index";

export interface Props {
  name: string;
  duration: number;
  src_img: string;
}

type State = {
  showModal: boolean;
};

export default class ServicesList extends Component<Props, State> {
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
    const { name, duration, src_img } = this.props;

    return (
      <div className="service-card-container">
        <img src={src_img} alt="" />
        <h1 className="service-card-title">{name}</h1>
        <div className="service-info-container">
          <label htmlFor="">Duración</label>
          <span className="service-card-desc">{duration} minutos</span>
        </div>
        <div className="service-info-container">
          <label htmlFor="">Precio</label>
          <span className="service-card-desc">60 mil pesos</span>
        </div>
        <div className="service-buttons-container">
          <button className="service-date-button" onClick={this.handleModal}>
            Agendar
          </button>
          <button className="service-info-button">Ver información</button>
        </div>
        {showModal && (
          <AppoinmentModal
            show={this.handleModal}
            service_id=""
            owner_email=""
          />
        )}
      </div>
    );
  }
}
