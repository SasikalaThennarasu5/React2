import React from "react";
import useGeolocation from "../hooks/useGeolocation";

const Task14 = () => {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div>
      <h2>Task14 - useGeolocation</h2>
      {error && <p>Error: {error}</p>}
      {latitude && longitude ? (
        <p>
          Latitude: {latitude} <br /> Longitude: {longitude}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default Task14;
