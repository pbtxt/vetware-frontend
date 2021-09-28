import * as React from "react";
import NewPetCard from "../../molecules/NewPetCard";

const MyPetsList: React.FC = () => {
  return (
    <div className="category-container">
      <div>
        <h1 className="category-title">Mis mascotas</h1>
      </div>
      <NewPetCard />
    </div>
  );
};

export default MyPetsList;
