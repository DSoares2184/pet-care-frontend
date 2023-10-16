import React from "react";

function PetCard({ pet, onPetDetails, onDelete }) {
  const handleClick = () => {
    onPetDetails(pet.petId);
  };

  const handleDeleteClick = () => {
    onDelete(pet.petId);
  };

  return (
    <li className="card mb-4">
      <div className="card-body">
        <h3 className="card-title">{pet.name}</h3>
        <p className="card-text">Breed: {pet.breed}</p>
        <button onClick={handleClick} className="btn btn-primary">See Details</button>
        <button onClick={handleDeleteClick} className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
}

export default PetCard;
