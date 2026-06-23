import React from "react";

function Navbar({ cartCount = 0, onCartClick }) {
  return (
    <div>
      <div style={{ display: "flex", background: "red", justifyContent: "center" }}></div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "black",
          height: "70px",
          padding: "0 20px",
        }}
      >
        <div className="logo" style={{ color: "aqua" }}>
          <h1 style={{ margin: 0 }}>Shop</h1>
        </div>
        <div
          className="links"
          style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "1.2rem" }}
        >
          <a href="/about" style={{ color: "white" }}>
            About
          </a>
          <a href="/signin" style={{ color: "white" }}>
            Sign in
          </a>
          <a href="/login" style={{ color: "white" }}>
            Log in
          </a>
          <a href="/contact" style={{ color: "white" }}>
            Contact us
          </a>
          <button
            type="button"
            onClick={onCartClick}
            style={{
              background: "#1e90ff",
              color: "white",
              border: "none",
              padding: "10px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Cart ({cartCount})
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar