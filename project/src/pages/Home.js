import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <header>
     <h1 className="logo">MILESTONE</h1>

        <nav>
          <a href="#home">HOME</a>
          <a href="#products">PRODUCTS</a>
          <a href="#services">SERVICES</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-text">
          <h2>EVERY DROP SMELLS</h2>

          <p>Premium Perfumes · Long Lasting · Elegant Fragrance</p>

        <Link to="/collection" className="btn">
  Explore Collection
</Link>
        </div>
      </section>

      <section id="products" className="products">
        <h2>Our Perfume Collection</h2>

      <div className="collection-container">

  <div className="collection-box">
    <h3>Male Perfumes</h3>

    <div className="item">
      <span>Midnight Oud</span>
      <span>₹799</span>
    </div>

    <div className="item">
      <span>Royal Leather</span>
      <span>₹799</span>
    </div>

    <div className="item">
      <span>Smoked Vanilla</span>
      <span>₹799</span>
    </div>

    <div className="item">
      <span>Amber Night</span>
      <span>₹799</span>
    </div>

  </div>

  <div className="collection-box">
    <h3>Female Perfumes</h3>

    <div className="item">
      <span>Rose Velvet</span>
      <span>₹799</span>
    </div>

    <div className="item">
      <span>Floral Musk</span>
      <span>₹799</span>
    </div>

    <div className="item">
      <span>Golden Jasmine</span>
      <span>₹799</span>
    </div>

    <div className="item">
      <span>White Amber</span>
      <span>₹799</span>
    </div>

  </div>

</div>
      </section>
<Link to="/collection" className="btn">
  Explore Collection
</Link>

      <footer id="contact">
        <p>
          © 2025 <span>thanks for visiting</span>
          <br />
          Anurag Mishra 2025b01011318
        </p>
      </footer>
    </>
  );
}

export default Home;