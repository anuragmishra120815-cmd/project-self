import React from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css";

function Cart({ cart, setCart }) {

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderId = "MS" + Math.floor(10000 + Math.random() * 90000);

    const orderTime = new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    alert(
      `🎉 Order Placed Successfully!

Order ID : ${orderId}

Date & Time :
${orderTime}

Total Amount : ₹${totalPrice}

Thank you for shopping with us ❤️`
    );

    setCart([]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart-page">

      <h1 className="cart-title">SHOPPING CART</h1>

      <div className="cart-card">

        {cart.length === 0 ? (
          <>
            <div className="cart-icon">🛒</div>

            <h2>Your Cart is Empty</h2>

            <p>Looks like you haven't added any perfumes yet.</p>

            <Link to="/collection" className="shop-btn">
              Continue Shopping
            </Link>
          </>
        ) : (
          <>
            <h2 className="heading">Cart Items</h2>

            {cart.map((item, index) => (
              <div className="cart-item" key={index}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>

              </div>
            ))}

            <h2 className="total">
              Total : ₹{totalPrice}
            </h2>

            <div className="cart-buttons">

              <Link to="/collection" className="shop-btn">
                Continue Shopping
              </Link>

              <button
                className="order-btn"
                onClick={placeOrder}
              >
                Place Order
              </button>

            </div>

          </>
        )}

      </div>

    </div>
  );
}

export default Cart;