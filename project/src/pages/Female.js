import React from "react";
import "../styles/Female.css";

function Female({ cart, setCart }) {

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(product.name + " added to cart!");
  };

  return (
    <div className="female-page">

      <h1>FEMALE PERFUMES</h1>

      <div className="perfume-grid">

        {/* Card 1 */}
        <div className="card">
          <img
            src="https://www.naazperfumes.com/uploads/products/1652368099.627d22e39dd46.JPG"
            alt="Rose Velvet"
          />
          <h2>Rose Velvet</h2>
          <div className="price">
            ₹799 <span>₹1199</span>
          </div>

          <button
            onClick={() =>
              addToCart({
                name: "Rose Velvet",
                price: 799,
                image:
                  "https://www.naazperfumes.com/uploads/products/1652368099.627d22e39dd46.JPG",
              })
            }
          >
            Add to Cart
          </button>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="https://www.myperfumeshop.co.nz/cdn/shop/files/Untitled_design_13_c8062bdc-468d-41ee-8b27-a84c0f48d37e.png?v=1705422275&width=1080"
            alt="Floral Musk"
          />
          <h2>Floral Musk</h2>
          <div className="price">
            ₹799 <span>₹1199</span>
          </div>

          <button
            onClick={() =>
              addToCart({
                name: "Floral Musk",
                price: 799,
                image:
                  "https://www.myperfumeshop.co.nz/cdn/shop/files/Untitled_design_13_c8062bdc-468d-41ee-8b27-a84c0f48d37e.png?v=1705422275&width=1080",
              })
            }
          >
            Add to Cart
          </button>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img
            src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494586807/ZlBjeFK9-wI-000000000494586807_6.jpg"
            alt="Golden Jasmine"
          />
          <h2>Golden Jasmine</h2>
          <div className="price">
            ₹799 <span>₹1199</span>
          </div>

          <button
            onClick={() =>
              addToCart({
                name: "Golden Jasmine",
                price: 799,
                image:
                  "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494586807/ZlBjeFK9-wI-000000000494586807_6.jpg",
              })
            }
          >
            Add to Cart
          </button>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img
            src="https://fimgs.net/mdimg/perfume-thumbs/375x500.42221.jpg"
            alt="White Amber"
          />
          <h2>White Amber</h2>
          <div className="price">
            ₹799 <span>₹1199</span>
          </div>

          <button
            onClick={() =>
              addToCart({
                name: "White Amber",
                price: 799,
                image:
                  "https://fimgs.net/mdimg/perfume-thumbs/375x500.42221.jpg",
              })
            }
          >
            Add to Cart
          </button>
        </div>

      </div>

      <footer>
        © 2025 <span>thanks for visiting</span>. All Rights Reserved.
        <br />
        Anurag Mishra 2025b01011318
      </footer>

    </div>
  );
}

export default Female;