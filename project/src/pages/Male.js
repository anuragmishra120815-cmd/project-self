import React from "react";
import "../styles/Male.css";

function Male({ cart, setCart }) {

const addToCart = (product) => {
  setCart((prevCart) => {
    const newCart = [...prevCart, product];
    console.log("Updated Cart:", newCart);
    return newCart;
  });

  alert(product.name + " added to cart!");
};
  return (
    <div className="male-page">

      <h1 className="title">MALE PERFUMES</h1>

      <div className="perfume-grid">

        {/* Card 1 */}
        <div className="card">
          <img
            src="https://images-cdn.ubuy.co.in/67758c40128be7531f7eb7d9-ard-al-zaafaran-midnight-oud-eau-de.jpg"
            alt="Midnight Oud"
          />
          <h2>Midnight Oud</h2>
          <div className="price">
            ₹799 <span>₹1199</span>
          </div>

          <button
            onClick={() =>
              addToCart({
                name: "Midnight Oud",
                price: 799,
                image:
                  "https://images-cdn.ubuy.co.in/67758c40128be7531f7eb7d9-ard-al-zaafaran-midnight-oud-eau-de.jpg",
              })
            }
          >
            Add to Cart
          </button>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHtlqVkwQ0Qz4tads3swm90Z_dW3CJ71kdA&s"
            alt="Royal Leather"
          />
          <h2>Royal Leather</h2>
          <div className="price">
            ₹799 <span>₹1199</span>
          </div>

          <button
            onClick={() =>
              addToCart({
                name: "Royal Leather",
                price: 799,
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHtlqVkwQ0Qz4tads3swm90Z_dW3CJ71kdA&s",
              })
            }
          >
            Add to Cart
          </button>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71U89H+YhNL._AC_UF350,350_QL80_.jpg"
            alt="Smoked Vanilla"
          />
          <h2>Smoked Vanilla</h2>
          <div className="price">
            ₹799 <span>₹1199</span>
          </div>

          <button
            onClick={() =>
              addToCart({
                name: "Smoked Vanilla",
                price: 799,
                image:
                  "https://m.media-amazon.com/images/I/71U89H+YhNL._AC_UF350,350_QL80_.jpg",
              })
            }
          >
            Add to Cart
          </button>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img
            src="https://www.jcperfumes.com/cdn/shop/files/amber-night-4.jpg?v=1728286775"
            alt="Amber Night"
          />
          <h2>Amber Night</h2>
          <div className="price">
            ₹799 <span>₹1199</span>
          </div>

          <button
            onClick={() =>
              addToCart({
                name: "Amber Night",
                price: 799,
                image:
                  "https://www.jcperfumes.com/cdn/shop/files/amber-night-4.jpg?v=1728286775",
              })
            }
          >
            Add to Cart
          </button>
        </div>

      </div>

      <footer className="footer">
        © 2025 Thanks for Visiting
      </footer>

    </div>
  );
}

export default Male;