import React from 'react';
const Footer = () => {
  const year = new Date().getFullYear();
  return <footer>{`Copyright © CompareMate ${year}`}</footer>;
};



export default Footer;