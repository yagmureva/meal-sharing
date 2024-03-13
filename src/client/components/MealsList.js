// MealsList.js

import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import "../styles/MealsList.css";

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fetch meals data from API
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="meals-list-container">
      <h2 className="meals-list-title">Meals List</h2>
      <div className="meals-grid">
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MealsList;
