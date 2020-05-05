import React, { useEffect, useState } from "react";
import Banner from "./banner/banner.component";
import Posts from "../posts/posts.component";
import classes from "./landing.module.css";
import NavIndicators from "../../common/nav-indicators/nav-indicators.component";
import Games from "../Games/games.component";
import Libraries from "../Libraries/libraries.component";
import { Helmet } from "react-helmet-async";

const Landing = () => {
  const [viewState, setViewState] = useState({
    currentPanel: 1,
    transitioning: false,
  });

  const PANELS_COUNT = 4;

  const prevSection = () => {
    setViewState((prev) => {
      if (prev.currentPanel <= 1 || prev.transitioning) return prev;
      setTimeout(() => {
        setViewState((prev) => ({ ...prev, transitioning: false }));
      }, 1000);
      return { transitioning: true, currentPanel: prev.currentPanel - 1 };
    });
  };

  const nextSection = () => {
    setViewState((prev) => {
      if (prev.currentPanel >= PANELS_COUNT || prev.transitioning) return prev;
      setTimeout(() => {
        setViewState((prev) => ({ ...prev, transitioning: false }));
      }, 1000);
      return { transitioning: true, currentPanel: prev.currentPanel + 1 };
    });
  };

  const handleScroll = (e) => {
    if (e.deltaY > 40 && viewState.currentPanel < PANELS_COUNT) {
      nextSection();
    } else if (e.deltaY < -40 && viewState.currentPanel > 0) {
      prevSection();
    }
    return;
  };

  const onSetSection = (sectionNumber) => {
    setViewState((prev) => {
      return { ...prev, currentPanel: sectionNumber };
    });
  };

  useEffect(() => {
    window.removeEventListener("wheel", (e) => {
      handleScroll(e);
    });
    window.addEventListener("wheel", (e) => {
      handleScroll(e);
    });
    return () => {
      window.removeEventListener("wheel", (e) => {
        handleScroll(e);
      });
    };
  }, []);

  return (
    <div className={classes.screenPane}>
      <Helmet>
        <title>Faisal Rashid</title>
        <meta name="description" content="Personal website of Faisal Rashid" />
        <meta
          name="keywords"
          content="Faisal Rashid, Faisal, Blog, JavaScript, React, Software Developer, Tic-Tac-Toe"
        />
      </Helmet>
      <div
        className={classes.panelsContainer}
        style={{ top: `${-100 * (viewState.currentPanel - 1)}vh` }}>
        <div className={classes.fullPanel}>
          <Banner />
        </div>
        <div className={classes.fullPanel} style={{ backgroundColor: "azure" }}>
          <div className={classes.panelLabel}>BLOGS</div>
          <Posts maxCount={3} isLanding />
        </div>
        <div
          className={classes.fullPanel}
          style={{ backgroundColor: "bisque" }}>
          <div className={classes.panelLabel}>GAMES</div>
          <Games maxCount={4} isLanding />
        </div>
        <div
          className={classes.fullPanel}
          style={{ backgroundColor: "lightgoldenrodyellow" }}>
          <div className={classes.panelLabel}>LIBRARIES</div>
          <Libraries maxCount={2} isLanding />
        </div>
      </div>
      <NavIndicators
        count={PANELS_COUNT}
        activeIndex={viewState.currentPanel}
        setIndicator={onSetSection}
      />
    </div>
  );
};

export default Landing;
