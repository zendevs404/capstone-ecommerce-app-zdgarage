import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const CardProduk = ({ GridList, products }) => {
  return (
    <div className={`shop-product-wrap row justify-content-center`}>
      {products.map((product, i) => (
        <div key={i} className="col-lg-4 col-md-5 col-12">
          <div className="product-item">
            {/* img */}
            <div className="product-thumb">
                <div className="pro-thumb">
                <img
                  src={product.img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                </div>
                {/* action link */}
                <div className="product-action-link">
                    <Link to={`/produk/${product.id}`}> <i className="icofont-eye"></i></Link>
                    <Link to="/login"> <i className="icofont-cart-alt"></i></Link>
                </div>
            </div>

            {/* content */}
            <div className="product-content">
                <Link to={`/produk/${product.id}`}>
                    {product.name}
                </Link>
                <p className="productRating">
                  <Rating />
                </p>
                <h6>
                  {product.price}
                </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduk;
