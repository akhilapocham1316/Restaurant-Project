import React, { useState } from "react";
import {
  Box, Typography, Button,
  FormHelperText,
  FormControl
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import TextFieldCustom from "./TextFieldCustom";
import { FormValidations } from "./FormValidations/FormValidations";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: FormValidations.email(),
  password: FormValidations.password(),
  confirmPassword: FormValidations.confirmPassword()
});

const Signup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const handleClose = () => {
    navigate("/")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      const response = await fetch("http://localhost:8081/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        }),
        
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      const newErrors = {};
      if (err.inner) {
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
      }
      setFormErrors(newErrors);
    }
  };

  const handleSignIn = () => {
    navigate("/login")
  }

  return (
    <Box className="login-background">
      <Box className="login-card">

        <FontAwesomeIcon
          type="button"
          className="fa-2xl closeButton"
          icon={faXmark}
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "12rem",
            right: "46rem",
            cursor: "pointer",
            color: "white",
            fontSize: "20px",
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", my: 5 }}>
          <Typography variant="h4" fontWeight="bold">
            Create Account
          </Typography>
          <Typography variant="body1">
            Sign up with your email address and password
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          {/* <FormControl fullWidth error={Boolean(formErrors.name)}>
            <TextFieldCustom
              label="Name *"
              name="name"
              type="text"
              value={formData.name}
              method={handleChange}
              error={Boolean(formErrors.name)}
            />
            <FormHelperText>{formErrors.name}</FormHelperText>
          </FormControl> */}

          <FormControl fullWidth error={Boolean(formErrors.email)}>
            <TextFieldCustom
              label="Email *"
              name="email"
              type="email"
              value={formData.email}
              method={handleChange}
              error={Boolean(formErrors.email)}
            />
            <FormHelperText>{formErrors.email}</FormHelperText>
          </FormControl>

          <FormControl fullWidth error={Boolean(formErrors.password)}>
            <TextFieldCustom
              label="Password *"
              name="password"
              type="password"
              value={formData.password}
              method={handleChange}
              error={Boolean(formErrors.password)}
            />
            <FormHelperText>{formErrors.password}</FormHelperText>
          </FormControl>

          <FormControl fullWidth error={Boolean(formErrors.confirmPassword)}>
            <TextFieldCustom
              label="Confirm Password *"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              method={handleChange}
              error={Boolean(formErrors.confirmPassword)}
            />
            <FormHelperText>{formErrors.confirmPassword}</FormHelperText>
          </FormControl>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="error"
            sx={{ mt: 2, fontWeight: "bold", fontSize: "20px" }}
          >
            SIGN UP
          </Button>
        </form>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already Registered? <span style={{ color: "#f50057", cursor: "pointer" }} onClick={handleSignIn}> Sign In Now</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
