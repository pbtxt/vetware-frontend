import * as React from "react";
import CommonPageLayout from "../CommonPageLayout";
import MyPetsList from "../../molecules/MyPetsList";

const Dashboard: React.FC = () => {
  return (
    <CommonPageLayout>
      <div>
        <h1>Hola, Paola Natasha</h1>
      </div>
      <div>
        <MyPetsList />
      </div>
      <div>
        <span>Lista de servicios disponibles</span>
      </div>
    </CommonPageLayout>
  );
};

export default Dashboard;
