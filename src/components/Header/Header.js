import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
// import { Form, Nav, Navbar } from "react-bootstrap";
// import { Button } from "bootstrap";
import './header.css'
function Header() {
  return (
    <div className="navbar_container">
      <ul className='navbar'>
          <li className='navbar_item menu-active'>About me</li>
          <li className='navbar_item'>Resume</li>
          <li className='navbar_item'>Portfolio</li>
          <li className='navbar_item'>Contact me</li>
      </ul>
    </div>
  );
}

export default Header;
