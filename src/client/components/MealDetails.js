// MealDetails.js

import React, { useState, useEffect } from "react";

const MealDetails = ({ mealId }) => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`/api/meals/${mealId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch meal details");
        }
        const data = await response.json();
        setMeal(data);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  return (
    <div>
      <h2>Meal Details</h2>
      {meal ? (
        <div>
          <h3>{meal.title}</h3>
          <p>Description: {meal.description}</p>
          <p>Price: {meal.price}</p>
          {/* Render other meal details here */}
        </div>
      ) : (
        <p>Loading meal details...</p>
      )}
    </div>
  );
};

export default MealDetails;
