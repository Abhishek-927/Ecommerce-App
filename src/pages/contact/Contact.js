import React from "react";
import "./contact.css";
import Layout from "../../components/layout/Layout";

const Contect = () => {
  return (
    <Layout>
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns, please don't hesitate to
          contact us.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button className="btn btn-dark" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contect;
