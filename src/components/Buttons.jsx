import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../appContext";

const Buttons = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AppContext);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        onClick={() => {
          navigate("/allParking");
        }}
      >
        ALL PARKING
      </button>
      <button
        onClick={() => {
          navigate("/chooseParking");
        }}
      >
        PARKING
      </button>
      <button
        onClick={() => {
          navigate("/history");
        }}
      >
        HISTORY
      </button>
      <button
        onClick={() => {
          navigate("/");
          setLoggedInUser(null);
        }}
      >
        EXIT
      </button>
    </div>
  );
};

export default Buttons;
