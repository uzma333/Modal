import React, { useState } from 'react'
import "./Modal.css";


function Modal({onClose}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      alert('Username is required.');
      return;
    }

    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const today = new Date();
    const selectedDate = new Date(dob);
    if (selectedDate > today) {
      alert('Invalid date of birth. Please select a valid date.');
      return;
    }

    alert('Form submitted successfully.');
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
     
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <h2>Fill Details</h2>
            </div>
           <strong><label htmlFor="username">Username:</label></strong>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <strong><label htmlFor="email">Email:</label></strong>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
          <strong><label htmlFor="phone">Phone Number:</label></strong>
         
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
           
          </div>
          <div>
         <strong><label htmlFor="dob">Date of Birth:</label></strong>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );


}
export default Modal;