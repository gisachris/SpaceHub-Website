import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/navigation.css';

const Navigation = () => (
  <section className="headerSection">
    <nav className="navbar">
      <span className="logoArea">
        <img src={logo} alt="logo fot the header" />
        <h1 className="logoText">Space Traveler&apos;s Hub</h1>
      </span>
      <ul className="linksHolder">
        <li>
          <NavLink to="/rockets">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/profile">MyProfile</NavLink>
        </li>
        <Outlet />
      </ul>
    </nav>
  </section>
);

export default Navigation;
