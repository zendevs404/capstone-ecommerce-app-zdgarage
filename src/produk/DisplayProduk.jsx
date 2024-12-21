import React, { useState } from "react";
import { Link } from "react-router-dom";

const desc =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non fugiat, vero corporis harum amet quidem unde, alias molestias doloremque earum";

const DisplayProduk = ({ item }) => {
  console.log(item);

  const { name, id, price, seller, ratingsCount, quantity, img } = item;
  const [preQuantity, setQuantity] = useState(quantity);

  const handleDecrease = () => {
    if (preQuantity > 1) {
      setQuantity(preQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(preQuantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: preQuantity,
      totalPrice: price * preQuantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += preQuantity;
    } else {
      existingCart.push(product);
    }

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Reset form
    setQuantity(1);
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span> {ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* Quantity */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>

            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybtn"
              id="qtybtn"
              value={preQuantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))
              }
            />

            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* Button */}
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default DisplayProduk;
