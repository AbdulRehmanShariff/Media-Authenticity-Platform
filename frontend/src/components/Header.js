import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>Deep-Fake Detection System</h1>
      </Link>
    </header>
  );
}
export default Header;
