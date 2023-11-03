import React from "react";
import "./about.css";
import Layout from "../../components/layout/Layout";
import { useProduct } from "../../context/productContext";

const About = () => {
  const { products } = useProduct();
  return (
    <Layout>
      <div className="about-head">
        <header className="about-header">
          <h1>About Us</h1>
        </header>
        <main>
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Welcome to our e-commerce website. We are dedicated to providing
              high-quality products to our customers...
            </p>
          </section>
          <section className="team-section">
            <h2>Our Team</h2>
            <ul>
              <li>Abhishek Sahu - Founder</li>
              <li>Abhishek Sahu - CEO</li>
              <li>Abhishek Sahu - CTO</li>
              <li>Abhishek Sahu - COO</li>
            </ul>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default About;
