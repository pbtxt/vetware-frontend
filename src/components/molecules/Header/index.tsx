import React, { Component } from "react";
import {
  NavbarBrand,
  Collapse,
  NavItem,
  Nav,
  NavbarToggler,
  NavLink,
} from "reactstrap";
import { NavbarStyled } from "./styles";
import icons from "../../../assets/Icon";

export interface Props {}

type State = {
  isOpen: boolean;
};

const toggle = () => {
  console.log("toggle");
};

export default class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <NavbarStyled color="light" light expand="md">
        <NavbarBrand href="/">VetWare</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Mis mascotas</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </NavbarStyled>
    );
  }
}
