import React,{ useState } from "react";
import './BloodCareForm.css';
const BloodCareForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    address: "",
    bloodType: "",
    diseases: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or API call here
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="form-container" style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", background: "#1e1e2f", color: "#fff", borderRadius: "8px" }}>
      <h2>BloodCare</h2>
      <p>Connecting donors and recipients, saving lives.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name*</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Second Name*</label>
          <input type="text" name="secondName" value={formData.secondName} onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Birth*</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number*</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Email*</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label>Blood Type*</label>
          <select name="bloodType" value={formData.bloodType} onChange={handleChange} required>
            <option value="">Select an option</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div>
          <label>Diseases</label>
          <input type="text" name="diseases" value={formData.diseases} onChange={handleChange} />
        </div>
        <div>
          <label>Password*</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Confirm Password*</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ background: "#e63946", color: "#fff", padding: "10px", border: "none", borderRadius: "4px" }}>
          Sign up
        </button>
      </form>
      <p>By signing up I accept the Company's Terms of Use and Privacy Policy</p>
      <p>
        Already have an account? <a href="/login" style={{ color: "#4db6ac" }}>Log in</a>
      </p>
    </div>
  );
};

export default BloodCareForm;
