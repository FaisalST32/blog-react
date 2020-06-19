import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './common/header/header.component';
import Footer from './common/footer/footer.component';
import Post from './areas/Post/post.component';
import Games from './areas/Games/games.component';
import About from './areas/About/about.component';
import Admin from './areas/Admin/admin.component';
import WriteNew from './areas/WriteNew/write-new.compnent';
import Login from './areas/Auth/Login/login.component';
import Landing from './areas/Landing/landing.component';
import Libraries from './areas/Libraries/libraries.component';
import Posts from './areas/posts/posts.component';
import { HelmetProvider } from 'react-helmet-async';

const themes = {
  light: {
    scheme: 'light',
    foreground: '#000',
    background: '#fff',
    backgroundFaded: '#d4d4d4',
  },
  dark: {
    scheme: 'dark',
    foreground: '#fff',
    background: '#000',
    backgroundFaded: '#1b1b1b',
  },
};

export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const themeFetched = useRef(false);

  const onChangeTheme = (isDark) => {
    themeFetched.current = true;
    setTheme((prev) => {
      if (isDark) {
        return themes.dark;
      }      
      return themes.light;
    });
  };

  useEffect(() => {
    if (themeFetched.current) {
      window.localStorage.setItem('theme', theme.scheme);
    }
    document.body.style.background = theme.background;
  }, [theme]);

  useEffect(() => {    
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      console.log(savedTheme)
      if (savedTheme === themes.dark.scheme) {
        onChangeTheme(true);
      } else if (savedTheme === themes.light.scheme) {
        onChangeTheme(false);
      }
      themeFetched.current = true;
    }
  }, []);

  return (
    <BrowserRouter>
      <HelmetProvider>
        <ThemeContext.Provider value={theme}>
          <div
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
            }}>
            <Header changeTheme={onChangeTheme} />
            <Switch>
              <Route
                path="/blogs/:id"
                exact
                render={(props) => <Post {...props} />}
              />
              <Route
                path="/blogs"
                exact
                render={(props) => <Posts {...props} />}
              />
              <Route
                path="/games"
                exact
                render={(props) => <Games {...props} />}
              />
              <Route
                path="/about"
                exact
                render={(props) => <About {...props} />}
              />
              <Route
                path="/write-new"
                exact
                render={(props) => <WriteNew {...props} />}
              />
              <Route
                path="/admin"
                exact
                render={(props) => <Admin {...props} />}
              />
              <Route
                path="/sign-in"
                exact
                render={(props) => <Login {...props} />}
              />
              <Route
                path="/libraries"
                exact
                render={(props) => <Libraries {...props} />}
              />
              <Route
                path="/"
                exact
                render={(props) => <Landing {...props} />}
              />
            </Switch>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
