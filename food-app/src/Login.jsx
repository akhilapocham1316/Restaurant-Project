import React, { useState } from "react";
import { Box, Button, FormControl, FormHelperText, Typography } from "@mui/material";
import "./styles.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import TextFieldCustom from "./TextFieldCustom";
import * as yup from "yup";
import { FormValidations } from "../src/FormValidations/FormValidations";
import axios from "axios";

const validationSchema = yup.object().shape({
    email: FormValidations.email(),
    password: FormValidations.password(),
});

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});

    // const storedUser = JSON.parse(localStorage.getItem("user"));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const handleClose = () => {
        navigate("/")
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(loginData, { abortEarly: false });
    
            const res = await axios.post("http://localhost:8081/auth/login", {
                email: loginData.email,
                password: loginData.password,
            });
    
            alert("Login successful");
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("isAuthenticated", "true");
            navigate("/");
        } catch (err) {
            if (err.response) {
                alert(err.response.data.message);
            } else if (err.inner) {
                const newErrors = {};
                err.inner.forEach(error => {
                    newErrors[error.path] = error.message;
                });
                setFormErrors(newErrors);
            } else {
                alert("Login failed");
            }
        }
    };
    

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //         await validationSchema.validate(loginData, { abortEarly: false });
    
    //         const response = await fetch("http://localhost:8081/auth/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(loginData)
    //         });
    
    //         const data = await response.json();
    
    //         if (!response.ok) {
    //             alert(data.message || "Login failed");
    //             return;
    //         }
    
    //         localStorage.setItem("user", JSON.stringify(data.user));
    //         localStorage.setItem("isAuthenticated", "true");
    
    //         alert("Login successful");
    //         navigate("/");
    //     } catch (err) {
    //         const newErrors = {};
    //         if (err.inner) {
    //             err.inner.forEach(error => {
    //                 newErrors[error.path] = error.message;
    //             });
    //         }
    //         setFormErrors(newErrors);
    //     }
    // };    

    const handleSignUp = () => {
        navigate("/signup")
    }

    return (
        <Box className="login-background">
            <Box className="login-card">

                <FontAwesomeIcon type="button" className="fa-2xl ms-auto mt-2 me-2 closeButton" icon={faXmark} onClick={handleClose}
                    style={{
                        position: "absolute", top: "13rem", fontSize:"20px",
                        right: "45.5rem"
                    }} />
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", my: 5 }}>
                    <Typography variant="h4" fontWeight="bold">
                        Welcome Back
                    </Typography>
                    <Typography variant="body1">
                        Sign In with your email address and password
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h5">
                        Sign In
                    </Typography>
                </Box>

                <form onSubmit={handleSubmit}>

                    <FormControl fullWidth error={Boolean(formErrors.email)}>
                        <TextFieldCustom
                            label="Email *"
                            name="email"
                            value={loginData.email}
                            method={handleChange}
                            variant="outlined"
                            error={Boolean(formErrors.email)}
                        />
                        <FormHelperText>{formErrors.email}</FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={Boolean(formErrors.password)}>
                        <TextFieldCustom
                            label="Password *"
                            name="password"
                            type="password"
                            value={loginData.password}
                            method={handleChange}
                            variant="outlined"
                            error={Boolean(formErrors.password)}
                        />
                        <FormHelperText>{formErrors.password}</FormHelperText>
                    </FormControl>

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="error"
                        sx={{ mt: 2, fontWeight: "bold", fontSize: "20px" }}
                    >
                        SIGN IN
                    </Button>
                </form>

                <Typography variant="body2" sx={{ mt: 2 }}>
                    New User? <span style={{ color: "#f50057", cursor: "pointer" }} onClick={handleSignUp}>Sign Up Now</span>
                </Typography>
            </Box>
        </Box>
    );
};

export default Login;
