import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./home.css";
import Layout from "../../components/layout/Layout";
import { useProduct } from "../../context/productContext";

const Home = () => {
  const { products, prices } = useProduct();
  const [checked, setChecked] = useState([]);
  const [product, setProducts] = useState([]);
  const [radio, setRadio] = useState([]);
  const [page, setPage] = useState(1);
  const categoryFilter = [
    "Tech gadgets",
    "Mobile",
    "Clock",
    "Electronics",
    "Men",
    "Women",
  ];

  const getAllProducts = async () => {
    setProducts(products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // const getAllCategory = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(
  //       `${base}/api/v1/category/get-categories`
  //     );
  //     setCategories(data.allCategories);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //   }
  // };

  // const addToCard = (pro) => {
  //   temp = { ...pro };
  //   delete temp.photo;
  //   setCard([...card, temp]);
  //   toast.success("Item added");
  //   localStorage.setItem("card", JSON.stringify([...card, temp]));
  // };

  // useEffect(() => {
  //   getAllCategory();
  //   getTotal();
  // }, []);

  //handle filter for checkbox/category
  const handleFilter = (value, cetagory) => {
    let all = [...checked];
    console.log(all);
    if (value) {
      all.push(cetagory);
    } else {
      all = all.filter((c) => c !== cetagory);
    }
    setChecked(all);
  };

  //get filter product from backend
  const filterProduct = async () => {
    let clicked = false;
    let filterProducts = [];

    if (checked.length > 0) {
      clicked = true;
      for (let i = 0; i < checked.length; i++) {
        const element = checked[i];
        const arr = products.filter((pro) => pro.category === element);
        filterProducts.push(...arr);
      }
      setProducts(filterProducts);
    }

    if (radio?.length > 0) {
      let x = radio.split(",");
      const arr = [];

      if (clicked) {
        for (let i = 0; i < filterProducts.length; i++) {
          const element = filterProducts[i];
          if (element.price >= x[0] && element.price <= x[1]) {
            arr.push(element);
          }
        }
      } else {
        for (let i = 0; i < products.length; i++) {
          const element = products[i];
          if (element.price >= x[0] && element.price <= x[1]) {
            arr.push(element);
          }
        }
      }
      setProducts(arr);
    }
  };

  useEffect(() => {
    filterProduct();
  }, [checked, radio]);

  return (
    <Layout>
      <div className="home-page">
        <h1 className="home-heading">Welcome to Our E-commerce Store</h1>
        <div className="row mt-3">
          <div className="col-md-2">
            <h6 className="text-center">Filter By Category</h6>
            <div className="d-flex flex-column">
              {categoryFilter.map((v, i) => {
                return (
                  <div key={i}>
                    <label className="home-filter">
                      <input
                        type="checkbox"
                        name="categoryFilter"
                        id="cf"
                        onChange={(e) => handleFilter(e.target.checked, v)}
                      />
                      <div>{v}</div>
                    </label>
                  </div>
                );
              })}
            </div>
            <hr />
            <h6 className="text-center mt-4">Filter By Prices</h6>
            <div className="d-flex flex-column text-align-start">
              {prices.map((v, i) => {
                return (
                  <div key={i} onClick={(e) => setRadio(e.target.value)}>
                    <label className="home-filter">
                      <input type="radio" name="test" value={v.array} />
                      <div>{v.name}</div>
                    </label>
                  </div>
                );
              })}
            </div>
            <hr style={{ marginBottom: "10px" }} />
            <div className="d-flex flex-column">
              <button
                className="btn btn-danger"
                onClick={() => window.location.reload()}
              >
                RESET FILTERS
              </button>
            </div>
          </div>
          <div className="col-md-10">
            <div className="d-flex flex-wrap gap-25px">
              {product.slice((page - 1) * 9, page * 9).map((pro) => {
                return (
                  <div key={pro._id}>
                    <div className="card card-header">
                      <Link to={`product/${pro._id}`} className="card-img">
                        <img
                          src={require(`../../assets/${pro.photo}`)}
                          className="card-img-top card-img"
                          alt="product photo"
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">
                          {pro.name?.length < 30
                            ? pro.name
                            : `${pro.name.slice(0, 30)}...`}
                        </h5>
                        <p className="card-text">Price - ₹ {pro.price}</p>
                        <p className="card-text">
                          {pro.description.slice(0, 62)}...
                        </p>
                        <Link
                          to={`product/${pro._id}`}
                          className="btn btn-primary"
                          onClick={() => {
                            console.log("clickd");
                          }}
                        >
                          More Details
                        </Link>
                        <Link to={"/login"} className="btn btn-secondary ms-2">
                          Add to Card
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {product.length === 0 ? (
              <h4 className="text-center">Not Found Any Product</h4>
            ) : (
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mt-4">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => setPage(page - 1)}
                      disabled={page <= Math.ceil(product.length / 9)}
                    >
                      Previous
                    </button>
                  </li>
                  {(() => {
                    const rows = [];
                    for (let i = 0; i < product.length / 9; i++) {
                      rows.push(
                        <li className="page-item" key={i}>
                          <button
                            className="page-link"
                            onClick={() => setPage(i + 1)}
                          >
                            {i + 1}
                          </button>
                        </li>
                      );
                    }
                    return rows;
                  })()}
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => setPage(page + 1)}
                      disabled={page > product.length / 9}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
