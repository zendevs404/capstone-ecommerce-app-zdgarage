import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from API
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // calcul price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // handle quantity inc
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    // update local with new cart
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // handle quantity dec
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      // update local with new cart
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  //   handle item remove
  const handleRemoveItem = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCart);

    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // cart total
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  //   order total
  const orderTotal = cartSubtotal;

  return (
    <div>
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-product">Price</th>
                    <th className="cat-product">Quantity</th>
                    <th className="cat-product">Total</th>
                  </tr>
                </thead>

                {/* tb */}
                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/produk">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/produk">{item.name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybtn"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        $ {calculateTotalPrice(item)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* bottom */}
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckOutPage />
                  </div>
                </form>
              </div>
              
              <div className="shipping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">$ {cartSubtotal}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
