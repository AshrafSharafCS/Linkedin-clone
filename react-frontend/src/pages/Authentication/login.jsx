import React from "react";
import Header from "../../header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });



  return (
    <div>
      <Header />

      <div className="flex center">
        <div className="flex column center form">
          <h3>Login</h3>
          <label>Email</label>
          <input className="inputs" type="text" placeholder="Email" 
          onChange={(e) => {
                setCredentials({
                  ...credentials,
                  email: e.target.value,
                });
              }}/>

            <label>Password</label>
          <input className="inputs" type="password" placeholder="Password" 
          onChange={(e) => {
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                });
              }}/>

<button className="loginBtn"
  onClick={async () => {
    try {
      const { email, password } = credentials;

      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await axios.post(
        "http://localhost/linkedin/back-end/login.php",
        formData
      );

      if (response.data['status'] === "success") {
        navigate("/home");
        localStorage.setItem("UserId", response.data['id']);
      }
    } catch (error) {
      console.error(error);
    }
  }}
>
  Login
</button>

<a href="./signup">

  Signup here
</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
