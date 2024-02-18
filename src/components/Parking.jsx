import React, { useContext, useState } from "react";
import AppContext from "../appContext";

const Parking = () => {
  const { selectedCity, loggedInUser, onPay } = useContext(AppContext);

  const [smallWindow, setSmallWindow] = useState(true);

  return (
    <div>
      <div
        onClick={() => {
          setSmallWindow(true);
        }}
        style={{ border: "3px solid black" }}
      >
        <p>CAR: {loggedInUser.carType}</p>
        <p>NUMBER: {loggedInUser.carNumber}</p>
        <p>CITY: {selectedCity.cityName}</p>
      </div>
      {smallWindow ? (
        <div style={{ border: "3px solid black" }}>
          <p>Cost: {selectedCity.parkingPrice}</p>
          <button
            onClick={() => {
              onPay(selectedCity, loggedInUser);
            }}
          >
            PAY
          </button>
          <button
            onClick={() => {
              setSmallWindow(false);
            }}
          >
            CLOSE
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Parking;
