// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-2 text-gray-500 text-sm mt-2 w-full">
      © {new Date().getFullYear()} Kuntal Maity. All rights reserved.
    </footer>
  );
};

export default Footer;