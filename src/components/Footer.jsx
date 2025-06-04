import React from 'react'
import './Footer.css'


function Footer() {
   return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} F1 Central. All rights reserved.</p>
        <p>Built by Cameron Morgan</p>
      </div>
    </footer>
  );
}

export default Footer
