import React, { useState } from "react";
import "/Users/hyf/Desktop/meal-sharing/src/client/styles/ReservationForm.css"; // Import ReservationForm.css

const ReservationForm = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Perform form validation
      if (!name || !email || !date || !time) {
        throw new Error("Please fill out all fields.");
      }
      // Add your reservation submission logic here
      console.log("Reservation submitted:", { name, email, date, time });
      // Reset form fields
      setName("");
      setEmail("");
      setDate("");
      setTime("");
      // Display success message
      setSuccess(true);
      setError("");
    } catch (error) {
      // Handle form submission errors
      setError(error.message || "Failed to submit reservation.");
      setSuccess(false);
    }
  };

  return (
    <div className="reservation-form-container">
      <h2>Make a Reservation</h2>
      {error && <p className="error-message">{error}</p>}
      {success && (
        <p className="success-message">Reservation submitted successfully!</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date: </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time: </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;
