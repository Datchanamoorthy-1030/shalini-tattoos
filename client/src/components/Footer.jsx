import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "24px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Shalini Tattoos. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
