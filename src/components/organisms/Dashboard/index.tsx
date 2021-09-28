import * as React from "react";
import CommonPageLayout from "../CommonPageLayout";
import MyPetsList from "../MyPetsList";
import ServicesList from "../../molecules/ServicesList";

const Dashboard: React.FC = () => {
  const services = [
    { name: "Servicio de baño", duration: 60, src_img: "" },
    { name: "Servicio de peluquería", duration: 60, src_img: "" },
    { name: "Cita médica", duration: 120, src_img: "" },
  ];
  return (
    <CommonPageLayout>
      <div>
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
          {services &&
            services.map((service, serviceIndex) => {
              return (
                <ServicesList
                  key={serviceIndex}
                  name={service.name}
                  duration={service.duration}
                  src_img={service.src_img}
                />
              );
            })}
        </div>
      </div>
    </CommonPageLayout>
  );
};

export default Dashboard;
