import React, { Component } from "react";

export interface Props {}

type State = {};

export default class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-item">
          <span>Dashboard</span>
        </div>
        <div className="header-item">
          <span>Mis mascotas</span>
        </div>
        <div className="header-item">
          <span>Nueva cita</span>
        </div>
      </div>
    );
  }
}
