import React, { useState } from "react";

const DistanceCalculator = () => {
  const [latitude1, setLatitude1] = useState("");
  const [longitude1, setLongitude1] = useState("");
  const [latitude2, setLatitude2] = useState("");
  const [longitude2, setLongitude2] = useState("");
  const [distance, setDistance] = useState(null);

  // Fonction pour convertir les degrés en radians
  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  // Fonction pour calculer la distance en utilisant la formule de Haversine
  const calculateDistance = () => {
    const lat1 = toRadians(parseFloat(latitude1));
    const lon1 = toRadians(parseFloat(longitude1));
    const lat2 = toRadians(parseFloat(latitude2));
    const lon2 = toRadians(parseFloat(longitude2));

    const earthRadius = 6371; // Rayon moyen de la Terre en kilomètres

    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;
    setDistance(distance);
  };

  // Gérer les changements des coordonnées géographiques
  const handleLatitude1Change = (e) => {
    setLatitude1(e.target.value);
  };

  const handleLongitude1Change = (e) => {
    setLongitude1(e.target.value);
  };

  const handleLatitude2Change = (e) => {
    setLatitude2(e.target.value);
  };

  const handleLongitude2Change = (e) => {
    setLongitude2(e.target.value);
  };

  // Gérer la soumission du formulaire pour calculer la distance
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateDistance();
  };

  return (
    <div>
      <h2>Calculateur de distance entre deux zones géographiques</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Latitude 1 :
          <input type="text" value={latitude1} onChange={handleLatitude1Change} />
        </label>
        <label>
          Longitude 1 :
          <input type="text" value={longitude1} onChange={handleLongitude1Change} />
        </label>
        <label>
          Latitude 2 :
          <input type="text" value={latitude2} onChange={handleLatitude2Change} />
        </label>
        <label>
          Longitude 2 :
          <input type="text" value={longitude2} onChange={handleLongitude2Change} />
        </label>
        <button type="submit">Calculer la distance</button>
      </form>
      {distance && <div>Distance : {distance.toFixed(2)} km</div>}
    </div>
  );
};

export default DistanceCalculator;
