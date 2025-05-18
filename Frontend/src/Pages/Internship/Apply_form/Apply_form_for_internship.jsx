import React, { useState } from "react";
import "./Apply_form_for_internship.css";

const ApplyForm = () => {
  const [captcha, setCaptcha] = useState("W6 8HP");
  const [inputCaptcha, setInputCaptcha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCaptcha !== captcha) {
      alert("Captcha incorrect!");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="apply-form-container">
      <h2 className="form-title">Internship Application Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name & Gender */}
        <div className="form-group row">
          <label>Full Name :</label>
          <div className="name-fields">
            <input type="text" placeholder="First" required />
            <input type="text" placeholder="Middle" />
            <input type="text" placeholder="Last" required />
          </div>
          <label>Gender :</label>
          <select required>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Email & Birth Date */}
        <div className="form-group row">
          <label>Email :</label>
          <input type="email" required />
          <label>Birth Date :</label>
          <input type="date" required />
        </div>

        {/* Address */}
        <div className="form-group">
          <label>Address :</label>
          <input type="text" required />
        </div>

        {/* File Uploads */}
        <div className="file-upload-group">
          {["SSC Marksheet", "HSC Marksheet", "Graduation Certificate", "Identity Card", "Photo", "Resume"].map(
            (label, index) => (
              <div className="file-upload" key={index}>
                <label>{label} :</label>
                <input type="file" />
              </div>
            )
          )}
        </div>

        {/* Captcha */}
        <div className="captcha-container">
          <div className="captcha-code">{captcha}</div>
          <button type="button" className="refresh-captcha">↻</button>
          <input
            type="text"
            placeholder="Enter Captcha Code"
            value={inputCaptcha}
            onChange={(e) => setInputCaptcha(e.target.value)}
            required
          />
        </div>

        {/* Save & Submit */}
        <div className="button-group">
          <button type="button" className="save-btn">Save</button>
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
