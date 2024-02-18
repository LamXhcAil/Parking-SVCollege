import React, { useContext, useState, useEffect } from "react";
import AppContext from "../appContext";
import { useNavigate } from "react-router-dom";

const History = () => {
  const { parkingHistory } = useContext(AppContext);
  const navigate = useNavigate();

  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [sortedHistory, setSortedHistory] = useState([...parkingHistory]);

  // Sort parkingHistory whenever sortOrder changes
  useEffect(() => {
    const sorted = [...parkingHistory].sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.billedCity.parkingPrice - b.billedCity.parkingPrice;
      } else {
        return b.billedCity.parkingPrice - a.billedCity.parkingPrice;
      }
    });
    setSortedHistory(sorted);
  }, [sortOrder, parkingHistory]);

  return (
    <div>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
      {sortedHistory.map((history, index) => (
        <div key={index} style={{ border: "3px black solid" }}>
          <div>CAR: {history.billedUser.carType}</div>
          <div>NUMBER: {history.billedUser.carNumber}</div>
          <div>COST: {history.billedCity.parkingPrice}</div>
          <button
            onClick={() => {
              navigate("/allParking");
            }}
          >
            restore
          </button>
        </div>
      ))}
    </div>
  );
};

export default History;
