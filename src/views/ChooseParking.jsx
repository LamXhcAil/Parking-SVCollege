import React, { useContext } from "react";
import AppContext from "../appContext";

const ChooseParking = () => {
  const { cities, loggedInUser, selectedCity, setSelectedCity, onParking } =
    useContext(AppContext);

  return (
    <div>
      <select
        onChange={(e) => {
          const selectedCityName = e.target.value;
          const selectedCityObject = cities.find(
            (city) => city.cityName === selectedCityName
          );
          setSelectedCity(selectedCityObject);
        }}
      >
        {cities.map((city) => (
          <option key={city.cityName} value={city.cityName}>
            {city.cityName}
          </option>
        ))}
      </select>

      <p>{loggedInUser.carNumber}</p>

      <button
        onClick={() => {
          onParking(selectedCity);
        }}
      >
        START PARKING
      </button>
    </div>
  );
};

export default ChooseParking;
