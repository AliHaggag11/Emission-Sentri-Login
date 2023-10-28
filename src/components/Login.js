import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Logo from "../Assets/sentri-logo.png"; 

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggle = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="main-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-heading">
          <img src={Logo} className="logo" alt="Logo" />
        </div>

        <div className="form-container">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-container">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <label htmlFor="reset" className="reset">
            <a href="/">Reset password</a>
          </label>
          <div className="password">
            <input
              type={formData.showPassword ? "text" : "password"}
              className={`form-input ${!formData.password && "form-input-error"}`}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={{
                fontFamily: 'IBM Plex Mono', 
                fontSize: '16px',
                lineHeight: '22px'
              }}
            />
            <span className="password-span" onClick={handleToggle}>
              {formData.showPassword ? <BsEyeSlash /> : <BsEye />}
            </span>
          </div>
        </div>

        <button className="btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
