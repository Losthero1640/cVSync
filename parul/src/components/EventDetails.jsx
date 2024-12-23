import React from "react";
import "../styles/EventsDetails.css"
import jetplaneImage from "../assets/jetplane.svg";
const EventsDetails = () => {
  return (
    <section className="events-details">
      <h2>EVENTS DETAILS</h2>
      <div className="event-card">
        <div className="event-info">
          <h3>Smart Cities: Future Tech Expo</h3>
          <p>
            14 Jan 2025, 7:55 pm – 9:55 pm<br />
            Smart City Expo Center, Innovation Way, Massachusetts, USA
          </p>
          <button className="register-btn">Register Now</button>
        </div>
        <div className="event-image">
          <img
            src={jetplaneImage} // Replace with actual image link
            alt="Smart Cities Expo"
          />
        </div>
      </div>
    </section>
  );
};

export default EventsDetails;