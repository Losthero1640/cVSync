import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "cVSync's platform has transformed how we address urban challenges, providing real-time insights and fostering collaboration.",
    icon: "🟰", // Placeholder for the icon
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Working with cVSync has been a game-changer for our city. Their data analytics and problem-solving approach have significantly boosted our efficiency.",
    icon: "◴", // Placeholder for the icon
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    feedback: "Thanks to cVSync, we have been able to streamline our waste management processes and engage more effectively with our residents.",
    icon: "➕", // Placeholder for the icon
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="title">TESTIMONIALS</h2>
      <p className="description">
        Discover what our partners have to say about our impactful solutions and commitment to urban improvement.
      </p>
      <div className="testimonial-list">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-item">
            <div className="testimonial-icon">{item.icon}</div>
            <div className="testimonial-content">
              <h3 className="testimonial-name">{item.name}</h3>
              <p className="testimonial-feedback">{item.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
