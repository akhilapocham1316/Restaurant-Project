import React from 'react';
import Reviews from './Reviews';

const About = () => {

  return (
    <>
      <div className="container my-5 py-5">
        <h2 className="text-center mb-5 fw-bold">About Us</h2>

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c"
              alt="Restaurant"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <p className="fs-4 fw-semibold">
              Welcome to <strong>AR Restaurant</strong> - your go-to destination for delicious food with a street-style twist!
            </p>
            <p className="fs-5">
              Whether you're craving spicy Indian snacks, cheesy pizzas, or refreshing juices, we've got something to satisfy every craving. Our chefs use only the freshest ingredients to craft meals that are as delicious as they are memorable.
            </p>
            <p className="fs-5">
              Join us for a memorable dining experience — or order online and enjoy AR Restaurant from the comfort of your home.
            </p>
          </div>
        </div>
      </div>

      <Reviews />
    </>
  );
};

export default About;
