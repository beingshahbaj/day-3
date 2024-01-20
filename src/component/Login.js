import React from "react";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: { usernameState },
        password: { passwordState },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          
          localStorage.setItem("user", JSON.stringify(data));
        
          window.location.href = "/profile";
        } else {
         
          alert(data.message);
        }
      });
  };
  return (
    <div className="back">
      <div className="back-layer"></div>

      <form onSubmit={handleSubmit}>
        <div>
          <h4>Welcome back! 👋</h4>
          <h1>Sign in to your account</h1>
        </div>
        <lable className="lable">
          your email
          <br />
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </lable>
        <lable className="lable">
          password
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </lable>
        <button type="submit">login</button>
        <h4>forget your pasword</h4>
        <div className="sign">Don’t have an account? Sign up</div>
      </form>
    </div>
  );
}

export default Login;
