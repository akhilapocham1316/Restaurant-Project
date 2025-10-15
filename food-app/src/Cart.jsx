import React from 'react';
import {
    Grid,
    Box,
    Typography,
    Card,
    CardMedia,
    Button,
    Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/payment');
    };

    const getTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const deliveryFee = 99;

    return (
        <Box sx={{ p: 4, pt: 15 }}>
            <Typography variant="h5" align="center" gutterBottom>
                My Bag ({cartItems?.length} {cartItems?.length === 1 ? 'item' : 'items'})
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid
                container
                spacing={6}
                justifyContent="center"
                sx={{ width: "100%", margin: "auto", borderRadius: 2, }}
            >
                <Grid item xs={12} md={8}>
                    {cartItems.map((item) => (
                        <Card
                            key={item._id}
                            sx={{
                                display: 'flex',
                                mb: 2,
                                p: 2,
                                gap: 2,
                                alignItems: 'center',
                                borderRadius: 2,
                                backgroundColor: '#fafafa',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                                width: '100%',
                            }}
                        >

                            <CardMedia
                                component="img"
                                image={item.image_url}
                                alt={item.title}
                                sx={{ width: 180, height: 160, borderRadius: 2, objectFit: 'cover' }}
                            />

                            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    {item?.title}
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mt: 1,
                                    }}
                                >
                                    <Typography variant="body2" className='me-5'>Qty: {item?.quantity}</Typography>
                                    <Typography fontWeight={600}>
                                        Rs. {item?.price * item?.quantity}/-
                                    </Typography>

                                </Box>

                                {/* <IconButton color="error" onClick={() => removeFromCart(item?._id)}> */}
                                <DeleteIcon color="error" onClick={() => removeFromCart(item?._id)} className='mt-3' />
                                {/* </IconButton> */}
                            </Box>
                        </Card>
                    ))}
                </Grid>

                {/* Right: Summary */}
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            border: '1px solid #ddd',
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: '#fafafa',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Order Details
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
                            <Typography>Bag total</Typography>
                            <Typography>₹{getTotalPrice()}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
                            <Typography>Delivery Fee</Typography>
                            <Typography>₹{deliveryFee}</Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography fontWeight={600}>Order Total</Typography>
                            <Typography fontWeight={600}>
                                ₹{getTotalPrice() + deliveryFee}
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2, backgroundColor: '#8B6B32' }}
                            onClick={handleClick}
                        >
                            PROCEED TO CHECK OUT
                        </Button>
                    </Box>

                    {/* Coupon Box */}
                    {/* <Box
                        sx={{
                            border: '1px dashed #bbb',
                            p: 2,
                            mt: 3,
                            borderRadius: 2,
                            backgroundColor: '#fffdf5',
                        }}
                    > */}
                    {/* <Typography variant="subtitle1" fontWeight={500}>
                            Apply Coupon
                        </Typography>
                        <Box sx={{ display: 'flex', mt: 1 }}>
                            <TextField
                                placeholder="Enter coupon code"
                                variant="outlined"
                                size="small"
                                fullWidth
                            />
                            <Button variant="contained" sx={{ ml: 1 }}>
                                APPLY
                            </Button>
                        </Box> */}
                    {/* </Box> */}
                </Grid>
            </Grid>
        </Box>
    );
};

export default CartPage;
