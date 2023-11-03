import React from "react";
import "./pageNotFound.css";
import Layout from "../../components/layout/Layout";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
