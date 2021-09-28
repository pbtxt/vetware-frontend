import * as React from "react";
import CommonPageLayout from "../CommonPageLayout";
import MyPetsList from "../MyPetsList";

const Dashboard: React.FC = () => {
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
      </div>
    </CommonPageLayout>
  );
};

export default Dashboard;
