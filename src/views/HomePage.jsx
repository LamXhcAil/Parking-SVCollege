import React, { useContext, useState } from "react";
import AppContext from "../appContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { onSignIn } = useContext(AppContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({ userName: "", password: "" });

  return (
    <div>
      <input
        value={user.userName}
        onInput={(e) => {
          setUser((prevUser) => ({ ...prevUser, userName: e.target.value }));
        }}
        placeholder="USERNAME"
        type="text"
      />
      <input
        value={user.password}
        onInput={(e) => {
          setUser((prevUser) => ({ ...prevUser, password: e.target.value }));
        }}
        placeholder="PASSWORD"
        type="password"
      />
      <button
        onClick={() => {
          onSignIn(user);
        }}
      >
        SignIn
      </button>

      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        SignUp
      </button>
    </div>
  );
};

export default HomePage;
