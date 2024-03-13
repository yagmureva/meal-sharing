import React, { useState, useEffect } from "react";
import "/Users/hyf/Desktop/meal-sharing/src/client/styles/ReviewForm.css"; // Import CSS for styling

const ReviewForm = ({ mealId }) => {
  const [reviewData, setReviewData] = useState({
    title: "",
    description: "",
    stars: "",
  });
  const [error, setError] = useState("");
  const [reviews, setReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [showMoreButton, setShowMoreButton] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/reviews");
      if (!response.ok) {
        throw new Error("Failed to fetch reviews.");
      }
      const data = await response.json();
      setReviews(data);
      setVisibleReviews(data.slice(0, 5)); // Initially show first 5 reviews
      setShowMoreButton(data.length > 5); // Show more button if there are more than 5 reviews
    } catch (error) {
      setError(error.message || "Failed to fetch reviews.");
    }
  };

  const handleLoadMore = () => {
    const nextVisibleReviews = reviews.slice(
      visibleReviews.length,
      visibleReviews.length + 5
    );
    setVisibleReviews([...visibleReviews, ...nextVisibleReviews]);
    setShowMoreButton(reviews.length > visibleReviews.length + 5);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meal_id: mealId,
          title: reviewData.title,
          description: reviewData.description,
          stars: reviewData.stars,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review. Please try again.");
      }

      // Reset the form fields
      setReviewData({
        title: "",
        description: "",
        stars: "",
      });
      setError("");

      // Alert user about successful submission
      window.alert("Review submitted successfully!");

      // Fetch updated list of reviews
      fetchReviews();
    } catch (error) {
      // Handle any errors
      setError(error.message || "Failed to submit review. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="form-title">Reviews</h2>
      <ul>
        {visibleReviews.map((review, index) => (
          <li key={index}>
            <p>Title: {review.title}</p>
            <p>Description: {review.description}</p>
            <p>Stars: {review.stars}</p>
          </li>
        ))}
      </ul>
      {showMoreButton && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More Reviews
        </button>
      )}
      <form className="review-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Leave a Review</h2>
        {error && <p className="error-message">{error}</p>}
        <label className="form-label">
          Title:
          <input
            className="form-input"
            type="text"
            name="title"
            value={reviewData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-label">
          Description:
          <textarea
            className="form-textarea"
            name="description"
            value={reviewData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-label">
          Stars:
          <input
            className="form-input"
            type="number"
            name="stars"
            value={reviewData.stars}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </label>
        <button className="submit-button" type="submit">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
