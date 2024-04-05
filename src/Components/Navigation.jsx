import "./styles/navigation.css";
import SwachhPariveshLogo from "../assets/NGO_Logo.png";
import Hamburger from "../assets/hamburger.svg";

import { Link } from "react-router-dom";
function Navigation() {
  const hamburgerHandler = () => {
    let hamburgerIcon = document.getElementById("hamburger__icon");
    let nav = document.getElementById("nav__menu__container");
    let menu = document.getElementById("menu__container");
    hamburgerIcon.classList.toggle("hamburger__icon--active");
    nav.classList.toggle("nav__menu__container--active");
    menu.classList.toggle("nav__menu--active");
  };
  return (
    <div className="nav__container row">
      <div className="ngo__name__container row">
        <p className="ngo__name">Swachh Parivesh Foundation</p>
      </div>
      <div className="ngo__logo__container cent">
        <img
          className="logo_img"
          src={SwachhPariveshLogo}
          alt="Swachh Parivesh NGO"
        />
      </div>

      <div className="nav__hamburger__container row" id="nav__menu__container">
        <button
          className="hamburger__btn"
          id="hamburger__menu__btn"
          onClick={hamburgerHandler}
        >
          <img
            src={Hamburger}
            id="hamburger__icon"
            className="hamburger__icon"
            alt="hamburger menu"
          />
        </button>
        <div className="menu__container" id="menu__container">
          <ul className="nav__menu__ul" id="nav__menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/goal">Goal</Link>
            </li>
            <li>
              <Link to="/donation">Donation</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
