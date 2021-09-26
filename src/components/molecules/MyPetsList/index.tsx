import * as React from "react";
import NewPetCard from "../../atoms/NewPetCard";

const MyPetsList: React.FC = () => {
  return (
    <div>
      <div>
        <span>Lista de mascotas</span>
      </div>
      <NewPetCard />
    </div>
  );
};

export default MyPetsList;
