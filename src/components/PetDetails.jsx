import React from "react";

function PetDetails({ pet, onClose }) {
    return (
    <div>
        <h2>Pet Details</h2>
        <p>Pet Name{pet.name}</p>
        <p>Breed: {pet.breed}</p>
        <p>Date of Birth: {pet.dateOfBirth}</p>
        <button onClick={onClose} className="btn btn-primary">Back to List</button>
    </div>
  );
}

export default PetDetails;