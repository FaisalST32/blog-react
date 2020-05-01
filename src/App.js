import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./common/header/header.component";
import Footer from "./common/footer/footer.component";
import Post from "./areas/Post/post.component";
import Games from "./areas/Games/games.component";
import About from "./areas/About/about.component";
import Admin from "./areas/Admin/admin.component";
import WriteNew from "./areas/WriteNew/write-new.compnent";
import Login from "./areas/Auth/Login/login.component";
import Landing from "./areas/Landing/landing.component";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/blogs/:id"
            exact
            render={(props) => <Post {...props} />}
          />
          <Route path="/games" exact render={(props) => <Games {...props} />} />
          <Route path="/about" exact render={(props) => <About {...props} />} />
          <Route
            path="/write-new"
            exact
            render={(props) => <WriteNew {...props} />}
          />
          <Route path="/admin" exact render={(props) => <Admin {...props} />} />
          <Route
            path="/sign-in"
            exact
            render={(props) => <Login {...props} />}
          />
          <Route path="/" exact render={(props) => <Landing {...props} />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
