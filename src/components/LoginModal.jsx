import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const LoginModal = ({ show, handleClose, handleSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Email validation
  const isValidEmail = email.trim().length > 0 && email.includes("@");

  // ✅ Password validation (at least 6 characters)
  const isValidPassword = password.length >= 6;

  // ✅ Handle Login submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail && isValidPassword) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        console.log("Login Successful with:", { email, password });
        setIsSubmitting(false);
        handleClose(); // Close modal after submission
      }, 1000);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* ✅ Email Input */}
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          {/* ✅ Password Input */}
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          {/* ✅ Forgot Password Link */}
          <p
            className="text-end mt-1"
            style={{ color: "#9c1c1c", cursor: "pointer", fontSize: "0.9rem" }}
          >
            Forgot Password?
          </p>

          {/* ✅ Login Button */}
          <Button
            type="submit"
            className="w-100 mt-2"
            style={{
              backgroundColor: "#9c1c1c",
              borderColor: "#9c1c1c",
              color: "#fff",
              cursor: isValidEmail && isValidPassword ? "pointer" : "not-allowed",
              opacity: isValidEmail && isValidPassword ? 1 : 0.7,
            }}
            disabled={!isValidEmail || !isValidPassword || isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </Form>

        {/* ✅ Sign Up Button (Linked to SignUpModal) */}
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <span
            style={{ color: "#9c1c1c", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => {
              handleClose(); // Close LoginModal
              handleSignUp(); // Open SignUpModal
            }}
          >
            Sign Up
          </span>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
