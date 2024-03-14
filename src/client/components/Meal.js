import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import mealImage from "../images/mealImage.png"; // Import the image from your local folder
import "../styles/Meal.css";

const Meal = ({ meal }) => {
  const mealCardStyle = {
    backgroundImage: `url(${mealImage})`, // Use the imported image as background
  };

  return (
    <div className="meal-card" style={mealCardStyle}>
      <div className="meal-image">
        {/* Image with class */}
        <img src={mealImage} alt={meal.title} className="meal-img" />
      </div>
      <div className="meal-details">
        <h3 className="meal-title">{meal.title}</h3>
        <p className="meal-description">{meal.description}</p>
        <p className="meal-price">Price: {meal.price}</p>
        {/* Use Link component to navigate to reservation page */}
        <Link to={`/reservation/${meal.id}`} className="btn">See Details</Link>
      </div>
    </div>
  );
};

export default Meal;
