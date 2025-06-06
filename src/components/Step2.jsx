import { useState } from "react";
import "./Step2.css";
import { FaBuilding } from "react-icons/fa";

const Step2 = ({ formData, setFormData, onNext, onBack }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName) newErrors.companyName = "Company Name is required";
    if (!formData.industry) newErrors.industry = "Industry is required";
    if (!formData.size) newErrors.size = "Company Size is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  return (
    <div className="step2-wrapper">
      <div className="step2-box">
        {/* Progress bar */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "66.6%" }}></div>
        </div>

        {/* Icon below the progress line */}
        <div className="flex justify-center mt-4 mb-2">
          <FaBuilding className="text-white text-4xl" />
        </div>

        <h2>Step 2: Business Info</h2>

        {/* Company Name */}
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            value={formData.companyName || ""}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            placeholder="Enter your company name"
          />
          {errors.companyName && <div className="error">{errors.companyName}</div>}
        </div>

        {/* Industry Dropdown */}
        <div className="form-group">
          <label>Industry</label>
          <select
            value={formData.industry || ""}
            onChange={(e) =>
              setFormData({ ...formData, industry: e.target.value })
            }
          >
            <option value="" disabled>Select industry</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
          {errors.industry && <div className="error">{errors.industry}</div>}
        </div>

        {/* Company Size Dropdown */}
        <div className="form-group">
          <label>Company Size</label>
          <select
            value={formData.size || ""}
            onChange={(e) =>
              setFormData({ ...formData, size: e.target.value })
            }
          >
            <option value="" disabled>Select size</option>
            <option value="1-10">1–10 employees</option>
            <option value="11-50">11–50 employees</option>
            <option value="51-200">51–200 employees</option>
            <option value="201-500">201–500 employees</option>
            <option value="500+">500+ employees</option>
          </select>
          {errors.size && <div className="error">{errors.size}</div>}
        </div>

        {/* Button Row */}
        <div className="button-wrap flex justify-between mt-6">
          <button onClick={onBack} className="back-btn">
            Back
          </button>
          <button onClick={handleNext} className="next-btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
