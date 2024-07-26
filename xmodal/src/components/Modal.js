import React, { useState } from 'react'
import "./Modal.css";


function Modal({onClose}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!username) {
      validationErrors.username = 'Username is required.';
    }

    if (!email.includes('@')) {
      validationErrors.email = 'Invalid email. Please check your email address.';
    }

    if (phone.length !== 10 || isNaN(phone)) {
      validationErrors.phone = 'Invalid phone number. Please enter a 10-digit phone number.';
    }

    const today = new Date();
    const selectedDate = new Date(dob);
    if (selectedDate > today) {
      validationErrors.dob = 'Invalid date of birth. Date of birth cannot be in the future.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert('Form submitted successfully.');
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <h2>Fill Details</h2>
          <div>
            <strong><label htmlFor="username">Username:</label></strong>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <span>{errors.username}</span>}
          </div>
          <div>
            <strong><label htmlFor="email">Email:</label></strong>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <strong><label htmlFor="phone">Phone Number:</label></strong>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <span>{errors.phone}</span>}
          </div>
          <div>
            <strong><label htmlFor="dob">Date of Birth:</label></strong>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            {errors.dob && <span>{errors.dob}</span>}
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;