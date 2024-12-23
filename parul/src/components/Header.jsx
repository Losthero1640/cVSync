import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import kochi from "../assets/kochi.svg";

const Header = () => {
    return (
      <header className="header">
        <a href="/" className="logo">
          
          cVSync
        </a>
        <ul className="navbar">
          <li className="nav-item">
          <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/events">Book Online</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>

          <li className='nav-item'>
            <Link to="/Services">Services</Link>
          </li>
        </ul>
      </header>
    );
  };

export default Header;
