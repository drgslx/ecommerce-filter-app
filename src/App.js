import { useState } from "react";

import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import products from "./Database/database";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedRecommended, setSelectedRecommended] = useState(null);
  const [query, setQuery] = useState("");
  // ----------- Input Filter -----------
  

const handleInputChange = (event) => {
  console.log("Input value:", event.target.value);
  setQuery(event.target.value);
};

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    console.log("Clicked!:", event.target.value);
    setSelectedCategory(event.target.value);
  };

  const handleChangePrice = (event) => {
    console.log("Clicked!:", event.target.value);
    setSelectedPrice(event.target.value);
  };

  const handleChangeColor = (event) => {
    console.log("Clicked!:", event.target.value);
    setSelectedColor(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    console.log("Clicked!:", event.target.value);
    setSelectedRecommended(event.target.value);
  };

/**
 * Filters the given products based on the selected category, price, color, and query.
 * Returns an array of filtered products.
 *
 * @param {Array} products - The array of products to filter.
 * @param {string} selectedCategory - The selected category filter.
 * @param {string} selectedPrice - The selected price filter.
 * @param {string} selectedColor - The selected color filter.
 * @param {string} query - The search query.
 * @returns {Array} - The array of filtered products.
 */
function filteredData(products, selectedCategory, selectedPrice, selectedColor,selectedRecommended, query) {
  let filteredProducts = products;

  // Filtering Input Items
  if (query) {
    filteredProducts = filteredItems;
  }

  // Applying selected category filter
  if (selectedCategory !== null && selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selectedCategory ||
        color === selectedCategory ||
        company === selectedCategory ||
        newPrice === selectedCategory ||
        title === selectedCategory
    );
  }

  // Applying selected price filter
  if (selectedPrice !== null && selectedPrice !== "all") {
    filteredProducts = filteredProducts.filter(
      ({ newPrice }) => Number(newPrice) === Number(selectedPrice)
    );
  }

  // Applying selected color filter
  if (selectedColor !== null && selectedColor !== "all") {
    filteredProducts = filteredProducts.filter(
      ({ color }) => color === selectedColor
    );
  }

  if (selectedRecommended !== null && selectedRecommended !== "all") {
    filteredProducts = filteredProducts.filter(
      ({ recommended }) => recommended === selectedRecommended
    );
  }

  return filteredProducts.map(
    ({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    )
  );
}

  const result = filteredData(products, selectedCategory, selectedPrice, selectedColor, selectedRecommended, query);

  const handleReset = () => {
    console.log("Clicked!:", "Reset");
    setSelectedCategory(null);
    setSelectedPrice(null);
    setSelectedColor(null);
    setSelectedRecommended(null);
    setQuery("");
  };

  return (
    <>
      <Sidebar handleReset={handleReset} handleChange={handleChange} handleChangePrice={handleChangePrice} handleChangeColor={handleChangeColor}/>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;