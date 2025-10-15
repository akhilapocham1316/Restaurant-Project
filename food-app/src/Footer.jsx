import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary-subtle text-dark text-center py-4">
      <div className="container">
        <h5 className="mb-1">Copyright &copy; {new Date().getFullYear()} AR Restaurant. All rights reserved.</h5>
        <p className='fs-5'>Made with love by AR Restaurant Team</p>
      </div>
    </footer>
  );
};

export default Footer;
