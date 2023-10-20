import React, { useState } from 'react';
import './NewNavbar.css';



const NewNavbar = () => {

  const [email,setEmail] = useState("")
  const subscribe = async () => {
    try {
      const response = await fetch('http://localhost:5000/subscribe', { // Use the appropriate URL for your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`,
      });
  
      if (response.status === 200) {
        alert('Email sent successfully');
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };
  


  return (
    <div className="new-navbar">
      <div className="new-left-content">
        <span className="new-username">SIGN UP FOR UPDATES</span>
      </div>
      <div className="new-center-content">
        <input 
        type="text" placeholder="Your email address" 
        className="new-search-bar" 
        value = {email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="new-right-content">
        <span className="new-nav-item" onClick={subscribe}>JOIN NOW</span>
      </div>
    </div>
  );
};

export default NewNavbar;