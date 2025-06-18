import React, { useState } from "react";

const RealTimeValidationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Email validation regex (basic)
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  // Password validation (min 6 characters)
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Real-time email validation
    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Real-time password validation
    if (!validatePassword(value)) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form on submit
    if (!emailError && !passwordError && email && password) {
      alert("Form submitted successfully!");
      // Handle form submission logic here (e.g., sending data to the backend)
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {emailError && (
            <p style={{ color: "red", fontSize: "0.875rem" }}>{emailError}</p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {passwordError && (
            <p style={{ color: "red", fontSize: "0.875rem" }}>
              {passwordError}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={emailError || passwordError || !email || !password}
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor:
              emailError || passwordError || !email || !password
                ? "#ccc"
                : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor:
              emailError || passwordError || !email || !password
                ? "not-allowed"
                : "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RealTimeValidationForm;
