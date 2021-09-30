import React, { Component } from "react";
import { createNewAppoinment, getServices, getPets } from "../../../utils/db";
import Select from "react-select";

interface Props {
  show: () => void;
  owner_email: string;
  service_id?: string;
  service_name?: string;
  pet_id?: string;
  pet_name?: string;
}
type State = {
  pet: string;
  service: string;
  date: string;
  services_list: { value: string; lable: string }[];
  pets_list: { value: string; lable: string }[];
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default class AppoinmentModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pet: this.props.pet_id ? this.props.pet_name : "",
      service: this.props.service_id ? this.props.service_name : "",
      date: "",
      services_list: [],
      pets_list: [],
    };
  }

  componentDidMount = () => {
    if (this.props.service_id && this.props.service_name) {
      let helperService = [
        { value: this.props.service_id, lable: this.props.service_name },
      ];
      this.setState({ services_list: helperService });
    } else if (!this.props.service_id) {
      console.log("no tiene servicio seleccionado");
      getServices().then((data) => {
        console.log(data);
        let dataHelper = [];
        if (data) {
          data.map((item) => {
            item = { value: item._id, label: item.name };
            dataHelper.push(item);
          });
          this.setState({ services_list: dataHelper });
        }
      });
    }
    if (this.props.pet_id && this.props.pet_name) {
      let helperPets = [
        { value: this.props.pet_id, lable: this.props.pet_name },
      ];
      this.setState({ services_list: helperPets });
    } else if (!this.props.pet_id) {
      console.log("no tiene mascota seleccionada");
      getPets("6154d65179f1d977b8832977").then((data) => {
        console.log(data);
        let dataPetsHelper = [];
        if (data) {
          data.map((item) => {
            item = { value: item._id, label: item.name };
            dataPetsHelper.push(item);
          });
          this.setState({ pets_list: dataPetsHelper });
        }
      });
    }
  };

  onChange = (event: React.ChangeEvent) => {
    const { id, value } = event.target as HTMLInputElement;
    switch (id) {
      case "pet":
        this.setState({ pet: value });
        break;
      case "date":
        this.setState({ date: value });
        return;
    }
  };

  handleNewAppoinment = () => {
    createNewAppoinment("", "", "", "").then(() => {
      this.props.show();
    });
  };

  setServiceValues = (list) => {};

  closeModal = () => {
    this.props.show();
  };
  render() {
    const { pet, service, date, services_list, pets_list } = this.state;
    return (
      <div className="modal-container">
        <h1>Crear una nueva cita</h1>
        <div className="modal-items-container">
          <label htmlFor="name">Fecha para la cita</label>
          <input type="date" id="date" value={date} onChange={this.onChange} />
        </div>
        <div className="modal-items-container">
          <label htmlFor="species">Mascota</label>
          {pets_list && <Select options={pets_list} />}
        </div>
        <div className="modal-items-container">
          <label htmlFor="species">Servicio</label>
          {services_list && <Select options={services_list} />}
        </div>
        <div className="modal-button-container">
          <button className="modal-button" onClick={this.handleNewAppoinment}>
            Guardar y crear
          </button>
          <button className="modal-button" onClick={this.closeModal}>
            Cancelar
          </button>
        </div>
      </div>
    );
  }
}
