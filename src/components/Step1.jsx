import { useState } from 'react';
import './Step1.css';
import { FaUser } from 'react-icons/fa'; // React Icon

const Step1 = ({ formData, setFormData, onNext }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = 'Name is required';
    if (!formData.email) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  return (
    <div className="step1-wrapper">
      <div className="step1-box">
        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '33.33%' }}></div>
        </div>

        {/* Icon below progress line */}
        <div className="icon-container">
          <FaUser className="personal-icon" />
        </div>

        <h2>Step 1: Personal Info</h2>

        {/* Name Field */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name || ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email || ''}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Next Button */}
        <div className="button-wrap">
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
