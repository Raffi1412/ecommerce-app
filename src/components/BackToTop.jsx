// src/components/BackToTop.jsx
import React from 'react';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a href="#" className="btn btn-warning border-3 border-warning rounded-circle back-to-top" onClick={scrollToTop}>
      <i className="fa fa-arrow-up"></i>
    </a>
  );
};

export default BackToTop;
