import * as React from "react";
import CommonPageLayout from "../CommonPageLayout";
import MyPetsList from "../MyPetsList";
import ServicesList from "../../molecules/ServicesList";
import { getServices } from "../../../utils/db";

interface Props {}

type State = {
  services_list: {
    name: string;
    duration: number;
    image_url: string;
    id: string;
  }[];
};

export default class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      services_list: [],
    };
  }

  componentDidMount = () => {
    getServices().then((data) => {
      this.setState({ services_list: data });
    });
  };

  render() {
    const { services_list } = this.state;

    return (
      <CommonPageLayout>
        <div className="welcome-user">
          <h1>Hola, Paola Natasha</h1>
        </div>
        <div>
          <MyPetsList />
        </div>
        <div className="category-container">
          <h1 className="category-title">
            Servicios disponibles para tus mascotas
          </h1>
          <div className="services-list-container">
            {services_list &&
              services_list.map((service, serviceIndex) => {
                return (
                  <ServicesList
                    key={serviceIndex}
                    name={service.name}
                    duration={service.duration}
                    src_img={service.image_url}
                  />
                );
              })}
          </div>
        </div>
      </CommonPageLayout>
    );
  }
}
