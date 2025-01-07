import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div class="footer-content">
          <h2>Clever Climb</h2>
          <p>A platform for creating questions by teachers and answering by students.</p>
          <ul class="footer-links">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
          </ul>
      </div>
      <div class="footer-bottom">
          <p>&copy; 2023 Clever Climb. All rights reserved.</p>
      </div>
  </footer>
  );
}
export default Footer;