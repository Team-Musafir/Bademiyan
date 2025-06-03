import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
    {/* Contact Form Section */}
        <div className="contact-form-section">
          <h1 className="contact-heading">Contact Us</h1>
          <div className="image">
          image
        </div>
          <div className="content">
            <div className="form-fields">
              <div className="name-email-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" />
                </div>
              </div>
              
              <div className="input-group message-group">
                <label>Message</label>
                <textarea></textarea>
              </div>
              <button className="signup-button">Sign Up</button>
            </div>
            
            <div className="contact-info">
              <div className="info-item">
                <p className="info-label">Phone Number</p>
                <p>+123 456 7890</p>
              </div>
              
              <div className="info-item">
                <p className="info-label">Email Address</p>
                <p>info@nplore.com</p>
              </div>
              
              <div className="info-item">
                <p className="info-label">Address</p>
                <p>123 Wanderer Street, City Name, State Name, Nation</p>
              </div>
            </div>
          </div>
        </div>

      {/* Map Section */}
      <div className="map-section">
        
        <h1 className="main-heading">Find Us on Maps</h1>
        
        <p className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Motel straddle tortor in elit hendrerit ut pulserat libero cursus. Etiam laboris commodo laoreet. Nam maturiam acnce non ne egestas sagittis.
        </p>
        
        <div className="divider"></div>
      </div>

      {/* Combined Content */}
      <div className="combined-content">
        {/* Diagram Section */}
        <div className="diagram-section">
          <h2 className="section-heading">Diagram</h2>
          
          <div className="diagram-container">
            <div className="diagram-column">
              <h3 className="column-title">Dibicenter</h3>
              <ul className="column-list">
                <li>Honor</li>
                <li>Absent Us</li>
                <li>Trip Analyses</li>
                <li>Gallery</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div className="diagram-column">
              <h3 className="column-title">Services</h3>
              <ul className="column-list">
                <li>Trip Inventory</li>
                <li>Trip Propositions</li>
                <li>Booking Form</li>
              </ul>
            </div>
            
            <div className="diagram-column">
              <h3 className="column-title">Packages</h3>
              <ul className="column-list">
                <li>Popular Trip</li>
                <li>Personal Tour</li>
                <li>Group Tour</li>
                <li>Business Tour</li>
                <li>Testimonials</li>
              </ul>
            </div>
            
            <div className="diagram-column">
              <h3 className="column-title">Support</h3>
              <ul className="column-list">
                <li>Customer Service</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Related Policy</li>
                <li>Travel Policy</li>
              </ul>
            </div>
            
            <div className="diagram-column">
              <h3 className="column-title">Contracts</h3>
              <ul className="column-list">
                <li>(403) 469 7890</li>
                <li>(32) Windener Street, City Name, State Name, Nation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="note-section">
        [Note in honor]
      </div>
    </div>
  );
};

export default Contact;