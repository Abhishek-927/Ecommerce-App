import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Card = () => {
  //design when build backend

  return (
    <Layout>
      <div className="container cart-container">
        <div className="cart-design">
          <h2>Your cart is empty</h2>
          <Link to="/login" className="btn btn-warning">
            Login to your account
          </Link>
          <Link to="/signup" className=" ms-3 btn btn-secondary">
            Sign up now
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Card;
