import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { ActionButton } from "../../../assets/styles/CommonComponents/styles";

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
      <Row>
        <Col sm="4">
          <Card body>
            <CardTitle tag="h5">Añadir una nueva mascota</CardTitle>
            <CardText>
              Agrega una nueva mascota para poder agendar citas para
              tratamientos y para nuestra clínica veterinaria
            </CardText>
            <ActionButton>Crear</ActionButton>
          </Card>
        </Col>
      </Row>
    );
  }
}
