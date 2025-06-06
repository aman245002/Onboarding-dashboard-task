import { useState } from 'react';
import './Step3.css';
import { FaCog } from 'react-icons/fa'; // ✅ Import icon

const Step3 = ({ formData, setFormData, onBack, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.theme) newErrors.theme = "Theme is required";
    if (!formData.layout) newErrors.layout = "Dashboard layout is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onSubmit();
  };

  return (
    <div className="step3-wrapper">
      <div className="step3-box">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "100%" }}></div>
        </div>

        <h2>Step 3: Preferences</h2>
        <div className="icon-container">
          <FaCog size={36} color="white" />
        </div>

        <div className="form-group">
          <label>Theme</label>
          <select
            value={formData.theme || ''}
            onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
          >
            <option value="" disabled>Select theme</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          {errors.theme && <div className="error">{errors.theme}</div>}
        </div>

        <div className="form-group">
          <label>Default Dashboard Layout</label>
          <select
            value={formData.layout || ''}
            onChange={(e) => setFormData({ ...formData, layout: e.target.value })}
          >
            <option value="" disabled>Select layout</option>
            <option value="grid">Grid</option>
            <option value="list">List</option>
          </select>
          {errors.layout && <div className="error">{errors.layout}</div>}
        </div>

        <div className="button-wrap">
          <button onClick={onBack} className="back-btn">Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
