import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyNjRkMzBmY2ZiZmIzMGMwMjIwNWVlIn0sImlhdCI6MTc0NzM0MDU5Mn0.GfNmuapquxssvVHkHs5wMWtNRWLBQWwRUfLQWEsN-ho",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSignup}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="emails">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              required
              minLength={5}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              className="form-control"
              id="cpassword"
              placeholder="Password"
              onChange={handleChange}
              required
              minLength={5}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group"></div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
