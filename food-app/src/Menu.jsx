import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const Menu = () => {
  const { addToCart } = useCart();

  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get("http://localhost:8081/menu");
        setProduct(res?.data);
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    };

    fetchMenu();
  }, []);

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');

  const handleSnackClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setSnackOpen(false);
  };

  const handleCartClick = (product) => {
    addToCart(product);
    setSnackMessage(`${product?.title} added to cart`);
    setSnackOpen(true);
  };

  return (
    <>
      <h2 className="text-center mt-5 pt-5 pb-3 fw-bold">Our Full Menu</h2>

      <div className="card-parent d-flex flex-wrap gap-4 px-5 mx-5 mb-5">
        {product?.map((product) => (
          <div key={product?._id} className="card shadow" style={{ width: "400px" }}>
            <img
              src={product?.image_url}
              className="card-img-top"
              alt={product?.title}
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product?.title}</h5>
              <div className="d-flex justify-content-between mb-2 flex-wrap">
                <p className="card-text text-muted">{product?.brand}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleCartClick(product)}
                >
                  Add To Cart
                </button>
              </div>
              <div className="d-flex justify-content-between flex-wrap">
                <p className="fw-bold">Rs. {product?.price}/-</p>
                <p className="text-success"><FontAwesomeIcon icon={faStar} /> {product?.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleSnackClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ top: '4.5rem !important' }}
      >
        <Alert onClose={handleSnackClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          {snackMessage}
        </Alert>
      </Snackbar>

    </>

  );
};

export default Menu;
