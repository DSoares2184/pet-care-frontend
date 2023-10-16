import React, { useEffect, useState } from "react";
import { getAllPets, deletePet } from "../services/main/pets";
import PetCard from "./PetCard";
import PetSearch from "./PetSearch";

function PetsList() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      try {
        const petsData = await getAllPets();
        setPets(petsData);
        setFilteredPets(petsData);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    }

    fetchPets();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = pets.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPets(filtered);
  };

  const handleDelete = async (petId) => {
    try {
      await deletePet(petId);
      const updatedPets = pets.filter((pet) => pet.petId !== petId);
      setPets(updatedPets);
      setFilteredPets(updatedPets);
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Pets List</h2>
      <PetSearch onSearch={handleSearch} />
      <ul className="list-unstyled">
        {filteredPets.map((pet) => (
          <PetCard key={pet.petId} pet={pet} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default PetsList;
