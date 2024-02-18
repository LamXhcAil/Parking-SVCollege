import "./App.css";
import AppContext from "./appContext";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./views/HomePage";
import SignUp from "./views/SignUp";
import ChooseParking from "./views/ChooseParking";
import AllParking from "./views/AllParking";
import History from "./views/History";
import Buttons from "./components/Buttons";

function App() {
  const [users, setUsers] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState(null);

  const [cities, setCities] = useState([
    { cityName: "CHOOSE CITY", parkingPrice: 0 },
    { cityName: "Tel Aviv", parkingPrice: 150 },
    { cityName: "Natanya", parkingPrice: 100 },
    { cityName: "Rehovot", parkingPrice: 50 },
  ]);

  const [parkingHistory, setParkingHistory] = useState([]);

  const [userNameError, setUserNameError] = useState(false);
  const [carNumberError, setCarNumberError] = useState(false);
  const [carTypeError, setCarTypeError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);

  const navigate = useNavigate();

  const onSignIn = (userToSignIn) => {
    const existingUser = users.find(
      (user) =>
        user.userName === userToSignIn.userName &&
        user.password === userToSignIn.password
    );
    if (existingUser) {
      const userIndex = users.findIndex(
        (user) => user.userName === existingUser.userName
      );
      const loginUserCopy = structuredClone(existingUser);

      setLoggedInUser(loginUserCopy);
      users.splice(userIndex, 1, loginUserCopy);
      navigate("/chooseParking");
      return;
    } else {
      alert("User not found");
    }
  };

  const onRegister = (newUser) => {
    if (!/^[a-z]+$/.test(newUser.userName)) {
      setUserNameError(true);
      return;
    } else {
      setUserNameError(false);
    }
    if (newUser.carNumber.length !== 8 || isNaN(Number(newUser.carNumber))) {
      setCarNumberError(true);
      return;
    } else {
      setCarNumberError(false);
    }
    if (newUser.carType === "") {
      setCarTypeError(true);
      return;
    } else {
      setCarTypeError(false);
    }
    if (
      newUser.password.length < 4 ||
      newUser.password.length > 8 ||
      !/[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(newUser.password)
    ) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    setUsers((prevUsers) => [...prevUsers, newUser]);
    navigate("/");
  };

  const onParking = (selectedCity) => {
    if (!selectedCity || selectedCity.cityName === "CHOOSE CITY") {
      alert("Must choose city!");
      return;
    }
    navigate("/allParking");
  };

  const onPay = (billedCity, billedUser) => {
    setParkingHistory((prevState) => [
      ...prevState,
      { billedCity, billedUser },
    ]);
    navigate("/history");
  };

  const contextValue = {
    parkingHistory,
    onPay,
    userNameError,
    carNumberError,
    carTypeError,
    passwordError,
    onParking,
    loggedInUser,
    onSignIn,
    onRegister,
    cities,
    selectedCity,
    setSelectedCity,
    setLoggedInUser,
  };
  return (
    <AppContext.Provider value={contextValue}>
      <>
        <h1 id="mainTitle" style={{ textDecoration: "underline" }}>
          SV PARKING
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {loggedInUser ? <Buttons /> : <></>}
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chooseParking" element={<ChooseParking />} />
          <Route path="/allParking" element={<AllParking />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </>
    </AppContext.Provider>
  );
}

export default App;
