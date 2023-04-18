import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Created by Anyelo Fonseca Rubí, ${year}`}</footer>;
  };
  
  export default Footer;