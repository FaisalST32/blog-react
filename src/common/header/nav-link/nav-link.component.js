import React from "react";
import classes from "./nav-link.module.css";
import { NavLink } from "react-router-dom";
import ReactIf from "../../react-if/react-if.component";

const NavbarLink = ({ link, isTitle, title, isMenuOpen, toggleMenu }) => {
  let linkClasses = [classes.link];
  let navClasses = [classes.navbarLink];

  if (isTitle) {
    linkClasses.push(classes.isTitle);
    navClasses.push(classes.navTitle);
  }

  if (isMenuOpen) {
    linkClasses.push(classes.open);
    navClasses.push(classes.navOpen);
  }

  const tryCloseMenu = () => {
    if (isTitle) {
      return;
    }
    toggleMenu();
  };

  return (
    <div className={navClasses.join(" ")}>
      <NavLink
        onClick={tryCloseMenu}
        className={linkClasses.join(" ")}
        activeClassName={classes.activeLink}
        to={link}
        exact>
        {title}
      </NavLink>
      <ReactIf showIf={isTitle}>
        <div onClick={toggleMenu} className={classes.menuButton}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </ReactIf>
    </div>
  );
};

export default NavbarLink;
