import React from "react";

const Footer = () => {
  return (
    <footer
  style={{
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "32px 24px",
    textAlign: "center",
    marginTop: "80px",
    borderTop: "1px solid #1f1f1f",
  }}
>

      <p style={{ margin: 0, color: "#777", fontSize: "14px" }}>

        © {new Date().getFullYear()} Shalini Tattoos. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
