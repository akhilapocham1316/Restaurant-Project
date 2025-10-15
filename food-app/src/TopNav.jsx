import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import "./styles.css";

export default function TopNav() {

    const navigate = useNavigate()

    const { cartItems } = useCart();

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
    };

    const handleCartPage = () => {
        navigate("/cart")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: "rgb(195 202 213)" }}>
                <Toolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, color: 'black' }}
                    >
                        <FontAwesomeIcon icon={faUtensils} />
                        <Typography variant="h6" component="div" sx={{ ml: 1, color: 'black' }}>
                            AR Restaurant
                        </Typography>
                    </IconButton>

                    <Box sx={{ flexGrow: 1, display: 'flex', gap: 4 }}>
                        <Typography variant="h6" component={Link} to="/" sx={{ color: 'black', textDecoration: 'none' }}>
                            Home
                        </Typography>
                        <Typography variant="h6" component={Link} to={"/menu"} sx={{ color: 'black', textDecoration: 'none' }}>
                            Menu
                        </Typography>
                        <Typography variant="h6" component={Link} to="/about" sx={{ color: 'black', textDecoration: 'none' }}>
                            About
                        </Typography>
                        <Typography variant="h6" component={Link} to="/contact" sx={{ color: 'black', textDecoration: 'none' }}>
                            Contact
                        </Typography>
                    </Box>

                    {
                        localStorage.getItem("isAuthenticated") &&
                        <IconButton onClick={handleCartPage}>
                            <Badge badgeContent={cartItems?.length} color="error">
                                <FontAwesomeIcon icon={faShoppingCart} className="black-icon" />
                            </Badge>
                        </IconButton>

                    }

                    {localStorage.getItem("isAuthenticated") ? (
                        <>
                            <Box sx={{ mx: 2 }} >
                                <FontAwesomeIcon icon={faUser} className="black-icon" />
                            </Box>
                            <Button onClick={handleLogout} sx={{ color: 'black' }}>Log Out</Button>
                        </>
                    ) : (
                        <>
                            <Button component={Link} to="/login" sx={{ color: 'black' }}>Login</Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
