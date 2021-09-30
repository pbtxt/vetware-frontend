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
      <div>
        <div>
          <span>Dashboard</span>
        </div>
        <div>
          <span>Mis mascotas</span>
        </div>
      </div>
    );
  }
}
