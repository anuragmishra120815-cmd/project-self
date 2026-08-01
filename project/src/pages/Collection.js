import React, { useState } from "react";
import "../styles/Collection.css";
import { Link } from "react-router-dom";

function Collection() {

  const [search, setSearch] = useState("");

  const perfumes = [
    { name: "Midnight Oud", page: "/male" },
    { name: "Royal Leather", page: "/male" },
    { name: "Smoked Vanilla", page: "/male" },
    { name: "Amber Night", page: "/male" },

    { name: "Rose Velvet", page: "/female" },
    { name: "Floral Musk", page: "/female" },
    { name: "Golden Jasmine", page: "/female" },
    { name: "White Amber", page: "/female" },
  ];

  const filteredPerfumes = perfumes.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="collection-page">

      <h1>MILESTONE</h1>

      <hr />

      <center>

        <nav className="navbar">

          <input
            type="text"
            placeholder="Search Perfume..."
            className="search-box"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Link to="/">Home</Link>

          <Link to="/cart">🛒 Cart</Link>

        </nav>

        {search && (
          <div className="search-results">

            {filteredPerfumes.length > 0 ? (
              filteredPerfumes.map((item, index) => (
                <Link
                  key={index}
                  to={item.page}
                  className="search-item"
                >
                  {item.name}
                </Link>
              ))
            ) : (
              <p className="no-result">
                No perfume found
              </p>
            )}

          </div>
        )}

      </center>

      <br />
      <br />

      <h2>Perfume Collection</h2>

      <div className="table-container">

        {/* Male */}

        <div className="table-box">

          <table border="3">

            <tbody>

              <tr>
                <th colSpan="2">MALE PERFUMES</th>
              </tr>

              <tr>

                <td>
                  <img
                    src="https://images-cdn.ubuy.co.in/67758c40128be7531f7eb7d9-ard-al-zaafaran-midnight-oud-eau-de.jpg"
                    alt="Midnight Oud"
                  />
                </td>

                <td>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHtlqVkwQ0Qz4tads3swm90Z_dW3CJ71kdA&s"
                    alt="Royal Leather"
                  />
                </td>

              </tr>

              <tr>

                <td>
                  <img
                    src="https://m.media-amazon.com/images/I/71U89H+YhNL._AC_UF350,350_QL80_.jpg"
                    alt="Smoked Vanilla"
                  />
                </td>

                <td>
                  <img
                    src="https://www.jcperfumes.com/cdn/shop/files/amber-night-4.jpg?v=1728286775"
                    alt="Amber Night"
                  />
                </td>

              </tr>

            </tbody>

          </table>

          <Link to="/male" className="explore-btn">
            Explore Collection
          </Link>

        </div>

        {/* Female */}

        <div className="table-box">

          <table border="3">

            <tbody>

              <tr>
                <th colSpan="2">FEMALE PERFUMES</th>
              </tr>

              <tr>

                <td>
                  <img
                    src="https://www.naazperfumes.com/uploads/products/1652368099.627d22e39dd46.JPG"
                    alt="Rose Velvet"
                  />
                </td>

                <td>
                  <img
                    src="https://www.myperfumeshop.co.nz/cdn/shop/files/Untitled_design_13_c8062bdc-468d-41ee-8b27-a84c0f48d37e.png?v=1705422275&width=1080"
                    alt="Floral Musk"
                  />
                </td>

              </tr>

              <tr>

                <td>
                  <img
                    src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494586807/ZlBjeFK9-wI-000000000494586807_6.jpg"
                    alt="Golden Jasmine"
                  />
                </td>

                <td>
                  <img
                    src="https://fimgs.net/mdimg/perfume-thumbs/375x500.42221.jpg"
                    alt="White Amber"
                  />
                </td>

              </tr>

            </tbody>

          </table>

          <Link to="/female" className="explore-btn">
            Explore Collection
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Collection;