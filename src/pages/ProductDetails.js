import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useProduct } from "../context/productContext";

const ProductDetails = () => {
  const { products } = useProduct();
  const params = useParams();
  const id = params.slug;
  const [product, setProduct] = useState({});
  // const [related, setRelated] = useState([]);

  const getSingleProduct = async () => {
    const data = await products.find((p) => p._id === id);
    setProduct(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <Layout>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4  d-flex justify-content-center">
            {product.photo && (
              <img
                src={require(`../assets/${product.photo}`)}
                className="card-img-top card-img"
                alt="product photo"
              />
            )}
          </div>
          {product?.name && (
            <div className="col-md-8">
              <h2 className="text-center mb-3">Product Details</h2>
              <p className="big-p">
                <span className="title">Name :</span> {product?.name}
              </p>
              <p className="big-p">
                <span className="title">Price : </span> ₹ {product?.price}
              </p>
              <p className="big-p">
                <span className="title">Description :</span>
                {product?.description}
              </p>
              <p className="big-p">
                <span className="title">Category :</span> {product?.category}
              </p>
              <div>
                <Link to={"/login"} className="btn btn-primary my-3 mx-100">
                  ADD TO CART
                </Link>
              </div>
              <div>
                <Link to={"/login"} className="btn btn-warning mx-100">
                  BUY
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
