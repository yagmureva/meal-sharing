// App.js
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../client/styles/App.css";
import MealsList from "./components/MealsList";
import ReservationForm from "./components/ReservationForm"; // Import
import ReviewForm from "./components/ReviewForm";

function App() {
  return (
    <div className="app-container">
      {/* Header section */}
      <header className="app-header">
        <h1 className="app-title">Meal Sharing</h1>
        <p className="app-description">
          Discover and enjoy delicious homemade meals shared by our community!
        </p>
      </header>

      {/* Main content section */}
      <main className="app-main">
        <Router>
          <Route path="/meals" component={MealsList} />
         <Route path="/reservation/:id" component={ReservationForm} /> {' '}
          {/* Route for reservations */}
            <Route path="/reviews" component={ReviewForm} />
          <Route exact path="/" component={HomePage} />

        </Router>
      </main>

      {/* Footer section */}
      <footer className="app-footer">
        <p className="app-footer-text">
          © 2024 Meal Sharing by Yagmur Nielsen. All rights reserved.
        </p>
        <nav className="app-footer-nav">
          <ul className="app-footer-nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/meals">Meals</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/reservations/:id">Reservation</a>{" "}
              {/* Link to reservation page */}
            </li>
            <li>
              <a href="/reviews">Reviews</a>{" "}
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

const HomePage = () => {
  return (
    <div className="home-page">
      <h2 className="home-page-title">Welcome to Meal Sharing!</h2>
      <p className="home-page-description">
        Explore homemade meals, make reservations, and join our community.
      </p>
      <p className="home-page-action">Start your culinary adventure now!</p>
    </div>
  );
};

export default App;
