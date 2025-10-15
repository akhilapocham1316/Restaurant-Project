import React from 'react';
import { Box, Button, Typography, Popover, IconButton } from '@mui/material';
import image1 from '../src/assets/image1.jpg';
import location from "../src/assets/location.jpg";
import foodImage from "../src/assets/food_image.jpg";
import foodImage2 from "../src/assets/food_image2.jpg";
import aboutSection from "../src/assets/about-section.webp";
import ImagesSection from './ImagesSection';
import { useNavigate } from 'react-router-dom';
import { CalendarToday as CalendarIcon } from '@mui/icons-material';
import { useState, useRef } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Home = () => {

    const navigate = useNavigate()

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [calendarAnchorEl, setCalendarAnchorEl] = useState(null);
    const calendarButtonRef = useRef(null);

    const handleCalendarClick = (event) => {
        setCalendarAnchorEl(event.currentTarget);
    };

    const handleCalendarClose = () => {
        setCalendarAnchorEl(null);
    };

    const open = Boolean(calendarAnchorEl);

    const handleDateChange = (newValue) => {
        setSelectedDate(newValue);
        handleCalendarClose();
    };

    const handleClick = () => {
        navigate("/menu")
    }

    const handleContact = () => {
        navigate("/contact")
    }

    const handleAbout = () => {
        navigate("/about")
    }

    return (
        <>
            {/* welcome page */}
            <div>
                <Box
                    sx={{
                        position: "relative",
                        height: "100vh",
                        backgroundImage: `url(${image1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        color: "white",
                        textAlign: "center",
                        px: 2,
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            zIndex: 1,
                        }}
                    />

                    <Box sx={{ zIndex: 2, maxWidth: "800px" }}>
                        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>
                            Welcome to <br />AR Restaurant
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "1.2rem", mb: 4 }}>
                            Welcome to AR Restaurant in India, the perfect experience for special people.
                            Our fancy restaurant will bring your special moments to another level.
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "row", gap: 4, justifyContent: "center", flexWrap: "wrap" }}>
                            <Button variant='contained' color='success' sx={{ fontSize: "18px" }} onClick={handleClick}>Our Full Menu</Button>
                            <Button variant='outlined' color='info' onClick={handleContact} sx={{ fontSize: "18px", fontWeight: "bold" }}>Contact Us</Button>
                        </Box>
                    </Box>
                </Box>
            </div>

            {/* about us */}
            <div className='my-5'>

                <Box sx={{ display: "flex", flexDirection: "row", gap: 5, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>

                    <img
                        src={aboutSection}
                        alt="Delicious Food"
                        style={{ borderRadius: '8px', border: "solid white 4px", height: "80vh", width: "30vw" }}
                    />

                    <Box>
                        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 5 }}>
                            About us
                        </Typography>
                        <Typography variant="h5" sx={{ maxWidth: "600px", mb: 5 }}>
                            Welcome to Restaurant in India, the perfect experience for special people. Our fancy restaurant will bring your special moments to another level.
                        </Typography>

                        <Typography variant="h5" sx={{ maxWidth: "600px", mb: 5 }}>
                            Our restaurant is situated at 5 minutes walk from train station and shopping center. The location is ideal for a perfect breakfast, a fancy lunch or a nice dinner with your family or friends. We can't wait to serve you our delicious dishes!
                        </Typography>

                        <Box className="btn btn-dark btn-lg rounded-0 text-capitalize shadow">
                            <Button style={{ color: "white" }} onClick={handleAbout}>
                                More About Us
                            </Button>
                        </Box>

                    </Box>

                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pb: 2,
                    borderBottom: '1px solid #e9ecef'
                }}>
                    <h2>Clinic Availability Report</h2>
                    <IconButton
                        ref={calendarButtonRef}
                        onClick={handleCalendarClick}
                        sx={{
                            backgroundColor: 'white',
                            border: '2px solid #e9ecef',
                            width: 48,
                            height: 48,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                backgroundColor: '#f8f9fa',
                                borderColor: '#dc3545',
                                transform: 'scale(1.05)',
                                '& .MuiSvgIcon-root': {
                                    color: '#dc3545'
                                }
                            }
                        }}
                    >
                        <CalendarIcon sx={{ color: '#666', transition: 'color 0.2s ease' }} />
                    </IconButton>
                </Box>

                {/* MUI DateCalendar inside Popover */}
                <Popover
                    open={open}
                    anchorEl={calendarAnchorEl}
                    onClose={handleCalendarClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    sx={{
                        mt: 1,
                        '& .MuiPopover-paper': {
                            borderRadius: '16px',
                            padding: 2,
                        }
                    }}
                >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateCalendar
                            value={selectedDate}
                            onChange={(newValue) => {
                                handleDateChange(newValue);
                                // getAllClinics(); // Refresh data after date select
                            }}
                        />
                    </LocalizationProvider>
                </Popover>
            </div>

            {/* our menu */}
            <div>
                <Box
                    sx={{
                        position: 'relative',
                        backgroundImage: `linear-gradient(#000c, #000c), url(${foodImage2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: "wrap",
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center',
                        px: 3,
                    }}
                >

                    <Box
                        sx={{
                            marginTop: "5rem",
                            zIndex: 2,
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'space-evenly',
                            alignItems: 'flex-start',
                            flexWrap: "wrap",
                            gap: "15rem",
                            mb: 2,
                        }}
                    >
                        <Box className="left-slide">
                            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
                                Mains
                            </Typography>

                            <ul className="px-0">
                                <li className="d-flex justify-content-between">
                                    <p className="fs-4 me-5 text-capitalize fw-semibold">classic Breakfast</p>
                                    <p className="fs-4 text-success">₹199.00</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="fs-4 me-5 text-capitalize fw-semibold">Paneer Butter Masala with Naan</p>
                                    <p className="fs-4 text-success">₹310.00</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="fs-4 me-5 text-capitalize fw-semibold">Grilled Chicken</p>
                                    <p className="fs-4 text-success">₹260.00</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="fs-4 me-5 text-capitalize fw-semibold">Chef's Special Biryani</p>
                                    <p className="fs-4 text-success">₹420.00</p>
                                </li>
                            </ul>

                        </Box>

                        <Box className="right-slide">
                            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
                                Drinks
                            </Typography>

                            <ul className="px-0">
                                <li className="d-flex justify-content-between">
                                    <p className="fs-4 me-5 text-capitalize fw-semibold">Watermelon Juice</p>
                                    <p className="fs-4 text-success">₹120.00</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="fs-4 me-5 text-capitalize fw-semibold">Cappuccino</p>
                                    <p className="fs-4 text-success">₹160.00</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="fs-4 me-5 text-capitalize fw-semibold">Masala Chai</p>
                                    <p className="fs-4 text-success">₹90.00</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="fs-4 me-5 text-capitalize fw-semibold">Lemon Iced Tea</p>
                                    <p className="fs-4 text-success">₹110.00</p>
                                </li>
                            </ul>

                        </Box>
                    </Box>

                    <Box sx={{
                        zIndex: 2, marginBottom: "5rem", marginLeft: "8rem"
                    }}
                        onClick={handleClick}>
                        <Button variant="contained" color="success" sx={{ fontSize: "18px" }}>
                            Our Full Menu
                        </Button>
                    </Box>
                </Box>
            </div>

            {/* image section */}
            <div className='my-5'><ImagesSection /></div>

            {/* location */}
            <div>
                <Box
                    sx={{
                        position: "relative",
                        backgroundImage: `url(${location})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        color: "white",
                        textAlign: "center",
                        px: 2,
                    }}
                >

                    <Box sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        zIndex: 1,
                    }} />

                    <Box sx={{
                        zIndex: 2, display: "flex", flexDirection: "row", gap: "15rem", flexWrap: "wrap", alignItems: "center", marginTop: "5rem", marginBottom: "5rem"
                    }}>
                        <Box>
                            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                                Where to find us
                            </Typography>
                            <Typography variant="h5" sx={{ maxWidth: "600px", mb: 5 }}>
                                47 Baker Street, Hyderabad, India
                            </Typography>
                            <Typography sx={{ mb: 2 }} variant='h4'>Opening hours</Typography>
                            <Typography sx={{ mb: 2 }} variant='body1'>Mon - Fri: 09:00 - 17:00</Typography>
                            <Typography sx={{ mb: 2 }} variant='body1'>Sat - Sun: 10:00 - 15:00</Typography>
                        </Box>

                        <img
                            src={foodImage}
                            alt="Delicious Food"
                            style={{ borderRadius: '8px', border: "solid white 4px" }}
                        />

                    </Box>
                </Box>
            </div>

        </>
    );
};

export default Home;
