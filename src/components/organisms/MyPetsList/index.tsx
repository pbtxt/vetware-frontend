import * as React from "react";
import NewPetCard from "../../molecules/NewPetCard";
import MyPetsCard from "../../molecules/MyPetsCard";
import { getPets } from "../../../utils/db";

interface Props {}

type State = {
  pets_list: { name: string; species: string; date_birth: string }[];
};

export default class MyPetsList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pets_list: [],
    };
  }
  componentDidMount = () => {
    getPets("6154d65179f1d977b8832977").then((data) => {
      this.setState({ pets_list: data });
    });
  };

  render() {
    const { pets_list } = this.state;

    return (
      <div className="category-container">
        <div>
          <h1 className="category-title">Mis mascotas</h1>
        </div>
        <div className="category-dasboard-container">
          {pets_list &&
            pets_list.map((pet) => {
              return (
                <MyPetsCard
                  name={pet.name}
                  species={pet.species}
                  date_birth={pet.date_birth}
                />
              );
            })}
          <NewPetCard />
        </div>
      </div>
    );
  }
}
