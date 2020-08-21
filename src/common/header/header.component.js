import React, { useEffect, useState, useContext } from 'react';
import NavbarLink from './nav-link/nav-link.component';
import classes from './header.module.css';
import { ThemeContext } from '../../App';
import { useHistory } from 'react-router';
import { logPageView } from '../../ga-tracking';

const Header = (props) => {
  const history = useHistory();
  useEffect(() => {
    logPageView(history);
  }, [history]);

  const [windowIsScrolled, setWindowIsScrolled] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const pageOffset = window.pageYOffset;
    setWindowIsScrolled(pageOffset > 40);
  };

  const onToggleMenu = () => {
    setMenuOpen((curr) => {
      return !curr;
    });
  };

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        handleScroll();
      },
      { passive: true }
    );
  }, []);

  const theme = useContext(ThemeContext);

  const buttonTheme = [classes.changeThemeButton];
  if (theme.scheme === 'dark') {
    buttonTheme.push(classes.dark);
  }

  const headerClasses = [classes.Header];

  if (windowIsScrolled) {
    headerClasses.push(classes.HeaderDark);
  }

  if (isMenuOpen) {
    headerClasses.push(classes.open);
  }

  return (
    <div
      className={headerClasses.join(' ')}
      style={
        theme.scheme === 'dark'
          ? { backgroundColor: theme.backgroundFaded }
          : {}
      }>
      <div className={classes.NavBar}>
        <NavbarLink
          link="/"
          title="Faisal Rashid"
          isTitle
          isMenuOpen={isMenuOpen}
          toggleMenu={onToggleMenu}
        />
        <NavbarLink
          toggleMenu={onToggleMenu}
          isMenuOpen={isMenuOpen}
          link="/blogs"
          title="Blogs"
        />
        <NavbarLink
          toggleMenu={onToggleMenu}
          isMenuOpen={isMenuOpen}
          link="/games"
          title="Games"
        />
        <NavbarLink
          toggleMenu={onToggleMenu}
          isMenuOpen={isMenuOpen}
          link="/libraries"
          title="Libraries"
        />
        {/* <NavbarLink toggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} link="/about" title="About Me" /> */}
        {/* <NavbarLink link="/sign-in" title="Login" />
        <NavbarLink link="/write-new" title="Write New" />
        <NavbarLink link="/admin" title="Admin" /> */}
      </div>
      <div
        className={buttonTheme.join(' ')}
        onClick={() => {
          props.changeTheme(theme.scheme !== 'dark');
        }}>

          {theme.scheme === 'dark' && (
            <span className={classes.themeToggle}>&#9728;</span>
          )}
          {theme.scheme === 'light' && (
            <span className={classes.themeToggle}>&#9680;</span>
          )}
        
        {/* <div className={classes.outerCircle}>
          <div className={classes.innerCircle}></div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
