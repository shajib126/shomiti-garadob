import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const userData = JSON.parse(localStorage.getItem('authUser'))
  return (
    <div className="header">
      <img src={Logo} alt="" />
      <nav className="header_nav">
        <Link to="/">
          <span class="material-symbols-outlined">home</span>হোম
        </Link>
        <Link to="/login">
          <span class="material-symbols-outlined">login</span>লগিন
        </Link>
        {userData.role && <Link to='/admin'>Admin Dashboard</Link>}
      </nav>
    </div>
  );
};

export default Header;
