import React, { useState } from 'react';
import {
    Typography,
    Grid,
    Button,
    Paper,
    Divider,
    Box,
    List,
    ListItem,
    ListItemText,
    Alert,
    FormControl,
    FormHelperText,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import TextFieldCustom from './TextFieldCustom';
import { FormValidations } from './FormValidations/FormValidations';
import * as yup from "yup";

const validationSchema = yup.object().shape({
    name: FormValidations.name(),
    cardNumber: FormValidations.cardNumber(),
    expiry: FormValidations.expiry(),
    cvv: FormValidations.cvv(),
});

const PaymentPage = () => {
    
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
    });

    const [paymentMethod, setPaymentMethod] = useState('card');
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const getTotalPrice = () => {
        const itemTotal = cartItems?.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const deliveryFee = 99;
        const codFee = paymentMethod === 'cod' ? 10 : 0;
        return itemTotal + deliveryFee + codFee;
    };

    const handlePayment = async () => {
        try {
            if (paymentMethod === 'card') {
                await validationSchema.validate(formData, { abortEarly: false });
            }

            setFormErrors({});
            setPaymentSuccess(true);
            clearCart();
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (err) {
            if (err.inner) {
                const errorObj = {};
                err.inner.forEach((e) => {
                    errorObj[e.path] = e.message;
                });
                setFormErrors(errorObj);
            }
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                px: 2,
                py: 5,
                backgroundColor: '#f9f9f9',
            }}
        >
            <Box maxWidth="md" width="100%">
                <Typography
                    variant="h4"
                    align="center"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ mb: 4, marginTop: "5rem" }}
                >
                    Payment Page
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h6" textAlign="center">
                                Order Summary
                            </Typography>
                            <List>
                                {cartItems?.map((item) => (
                                    <ListItem key={item.id} sx={{ justifyContent: 'space-between', gap: "5rem" }}>
                                        <ListItemText primary={`${item.title} x ${item.quantity}`} />
                                        <strong>{`Rs. ${item.price * item.quantity}/-`}</strong>
                                    </ListItem>
                                ))}
                                <Divider />
                                <ListItem sx={{ justifyContent: 'space-between' }}>
                                    <ListItemText primary={<strong>Delivery Fee</strong>} />
                                    <strong>Rs. 99/-</strong>
                                </ListItem>
                                {paymentMethod === 'cod' && (
                                    <ListItem sx={{ justifyContent: 'space-between' }}>
                                        <ListItemText primary={<strong>COD Fee</strong>} />
                                        <strong>Rs. 10/-</strong>
                                    </ListItem>
                                )}
                                <ListItem sx={{ justifyContent: 'space-between' }}>
                                    <ListItemText primary={<strong>Total</strong>} />
                                    <strong>{`Rs. ${getTotalPrice()}/-`}</strong>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{
                            p: 3,
                            backgroundColor: '#1e1e1e',
                            color: '#fff',
                            borderRadius: 2,
                        }}>
                            <Typography variant="h6" textAlign="center">
                                Payment Details
                            </Typography>

                            <FormControl fullWidth sx={{ mt: 2 }} >
                                <RadioGroup
                                    row
                                    value={paymentMethod}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setPaymentMethod(e.target.value);
                                    }}
                                >
                                    <FormControlLabel value="card" control={<Radio />} label="Card Payment" />
                                    <FormControlLabel value="cod" control={<Radio />} label="COD" />
                                </RadioGroup>
                            </FormControl>

                            <Box>
                                {paymentMethod === 'card' ? (
                                    <form>
                                        <FormControl fullWidth error={Boolean(formErrors.name)}>
                                            <TextFieldCustom
                                                label="Name on Card"
                                                name="name"
                                                type="text"
                                                value={formData.name}
                                                method={handleChange}
                                                error={Boolean(formErrors.name)}
                                            />
                                            <FormHelperText>{formErrors.name}</FormHelperText>
                                        </FormControl>

                                        <FormControl fullWidth error={Boolean(formErrors.cardNumber)}>
                                            <TextFieldCustom
                                                label="Card Number"
                                                name="cardNumber"
                                                type="number"
                                                value={formData.cardNumber}
                                                method={handleChange}
                                                error={Boolean(formErrors.cardNumber)}
                                            />
                                            <FormHelperText>{formErrors.cardNumber}</FormHelperText>
                                        </FormControl>

                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth error={Boolean(formErrors.expiry)}>
                                                    <TextFieldCustom
                                                        label="Expiry"
                                                        name="expiry"
                                                        type="text"
                                                        value={formData.expiry}
                                                        method={handleChange}
                                                        error={Boolean(formErrors.expiry)}
                                                    />
                                                    <FormHelperText>{formErrors.expiry}</FormHelperText>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth error={Boolean(formErrors.cvv)}>
                                                    <TextFieldCustom
                                                        label="CVV"
                                                        name="cvv"
                                                        type="password"
                                                        value={formData.cvv}
                                                        method={handleChange}
                                                        error={Boolean(formErrors.cvv)}
                                                    />
                                                    <FormHelperText>{formErrors.cvv}</FormHelperText>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </form>
                                ) :
                                    <Typography>Cash on Delivery (₹10 extra)</Typography>
                                }
                            </Box>
                            <Button
                                fullWidth
                                variant="contained"
                                color="success"
                                sx={{ mt: 3 }}
                                onClick={handlePayment}
                            >
                                Pay Now
                            </Button>

                            {paymentSuccess && (
                                <Alert severity="success" sx={{ mt: 2 }}>
                                    Payment Successful! Redirecting to home...
                                </Alert>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default PaymentPage;
