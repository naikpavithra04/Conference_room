import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO */}
      <section
  className="home-hero"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
        <div className="home-overlay">
          <div className="hero-content">
            <h1>Conference Room Booking</h1>
            <p>Smart, seamless, and modern way to reserve meeting spaces</p>

            <div className="hero-buttons">
              <button onClick={() => navigate("/rooms")}>
                Explore Rooms
              </button>
              <button
                className="secondary"
                onClick={() => navigate("/login/user")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose Our Platform</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <span>📅</span>
            <h3>Instant Booking</h3>
            <p>Book rooms in seconds with real-time availability.</p>
          </div>

          <div className="feature-card">
            <span>🏢</span>
            <h3>Multiple Spaces</h3>
            <p>Conference rooms, training halls & meeting rooms.</p>
          </div>

          <div className="feature-card">
            <span>⚡</span>
            <h3>Fast & Reliable</h3>
            <p>Optimized system for quick and smooth booking.</p>
          </div>

          <div className="feature-card">
            <span>🔐</span>
            <h3>Secure Access</h3>
            <p>Protected login and safe reservation system.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps">
        <h2>How It Works</h2>

        <div className="steps-grid">
          <div className="step-card">
            <h3>1</h3>
            <p>Login or Register</p>
          </div>

          <div className="step-card">
            <h3>2</h3>
            <p>Select Room</p>
          </div>

          <div className="step-card">
            <h3>3</h3>
            <p>Choose Date & Time</p>
          </div>

          <div className="step-card">
            <h3>4</h3>
            <p>Confirm Booking</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Book Your Space?</h2>
        <button onClick={() => navigate("/rooms")}>
          Get Started Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Conference Room Booking</p>
      </footer>

    </div>
  );
};

export default Home;