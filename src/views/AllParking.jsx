import React, { useContext, useState } from "react";
import AppContext from "../appContext";
import Parking from "../components/Parking";

const AllParking = () => {
  const {} = useContext(AppContext);
  return (
    <div>
      <Parking />
    </div>
  );
};

export default AllParking;
