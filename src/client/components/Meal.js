// Meal.js

import React from "react";
import mealImage from "/Users/hyf/Desktop/meal-sharing/src/client/images/mealImage.png"; // Import the image from your local folder
import "../styles/Meal.css";

const Meal = ({ meal }) => {
  const handleClick = () => {
    // Handle click event for meal card
    console.log(`Clicked on meal: ${meal.title}`);
  };

  const mealCardStyle = {
    backgroundImage: `url(${mealImage})`, // Use the imported image as background
  };

  return (
    <div className="meal-card" style={mealCardStyle} onClick={handleClick}>
      <div className="meal-image">
        {/* Image with class */}
        <img src={mealImage} alt={meal.title} className="meal-img" />
      </div>
      <div className="meal-details">
        <h3 className="meal-title">{meal.title}</h3>
        <p className="meal-description">{meal.description}</p>
        <p className="meal-price">Price: {meal.price}</p>
        <button className="btn">See Details</button>
      </div>
    </div>
  );
};

export default Meal;
