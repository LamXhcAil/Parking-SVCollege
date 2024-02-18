import React, { useContext, useState } from "react";
import AppContext from "../appContext";

const SignUp = () => {
  const {
    onRegister,
    userNameError,
    carNumberError,
    carTypeError,
    passwordError,
  } = useContext(AppContext);
  const [newUser, setNewUser] = useState({
    userName: "",
    carNumber: "",
    carType: "",
    password: "",
  });

  return (
    <div>
      <input
        value={newUser.userName}
        onInput={(e) => {
          setNewUser((prevUser) => ({ ...prevUser, userName: e.target.value }));
        }}
        placeholder="USERNAME"
        type="text"
      />
      {userNameError ? (
        <p style={{ color: "red" }}>
          Username should only include lowercase letters.
        </p>
      ) : null}

      <input
        value={newUser.carNumber}
        onInput={(e) => {
          setNewUser((prevUser) => ({
            ...prevUser,
            carNumber: e.target.value,
          }));
        }}
        placeholder="CAR NUMBER"
        type="text"
      />
      {carNumberError ? (
        <p style={{ color: "red" }}>
          Car number should be 8 digits long and only contain numbers.
        </p>
      ) : null}

      <input
        value={newUser.carType}
        onInput={(e) => {
          setNewUser((prevUser) => ({ ...prevUser, carType: e.target.value }));
        }}
        placeholder="CAR TYPE"
        type="text"
      />
      {carTypeError ? (
        <p style={{ color: "red" }}>Car type must be inserted.</p>
      ) : null}

      <input
        value={newUser.password}
        onInput={(e) => {
          setNewUser((prevUser) => ({ ...prevUser, password: e.target.value }));
        }}
        placeholder="PASSWORD"
        type="password"
      />
      {passwordError ? (
        <p style={{ color: "red" }}>
          Password should be 4-8 characters long and contain at least one
          special character or uppercase letter.
        </p>
      ) : null}

      <button
        onClick={() => {
          onRegister(newUser);
        }}
      >
        REGISTER
      </button>
    </div>
  );
};

export default SignUp;
