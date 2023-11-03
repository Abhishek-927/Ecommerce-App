// check before send

import React, { useState } from "react";
import Layout from "../../components/layout/Layout";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // todo work on it when create db
  };

  return (
    <Layout>
      <div className="signup-form">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={handleChangeInput}
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              value={formData.password}
              onChange={handleChangeInput}
              name="password"
              placeholder="Enter Password"
              required
              minLength={6}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
