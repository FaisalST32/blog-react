import React, { useContext } from 'react';
import Banner from './banner/banner.component';
import Posts from '../posts/posts.component';
import classes from './landing.module.css';
import Games from '../Games/games.component';
import Libraries from '../Libraries/libraries.component';
import { Helmet } from 'react-helmet-async';
// import {
//   FullPageContainer,
//   FullPagePanel,
// } from 'fullpage-react-fs';
// import 'fullpage-react-fs/dist/index.css';
import {
  FullPageContainer,
  FullPagePanel,
} from '../../common/fullpage/fullpage';
import { ThemeContext } from '../../App';

const Landing = () => {
  const theme = useContext(ThemeContext);
  const isDarkTheme = theme.scheme === 'dark';
  return (
    <React.Fragment>
      <Helmet>
        <title>Faisal Rashid</title>
        <meta name="description" content="Personal website of Faisal Rashid" />
        <meta
          name="keywords"
          content="Faisal Rashid, Faisal, Blog, JavaScript, React, Software Developer, Tic-Tac-Toe"
        />
      </Helmet>
      <FullPageContainer showIndicators={true}>
        <FullPagePanel>
          <Banner />
        </FullPagePanel>
        <FullPagePanel bgColor={isDarkTheme ? theme.backgroundFaded : 'azure'}>
          <div
            style={isDarkTheme ? { color: theme.foreground } : {}}
            className={classes.panelLabel}>
            BLOGS
          </div>
          <Posts maxCount={3} isLanding />
        </FullPagePanel>
        <FullPagePanel bgColor={isDarkTheme ? theme.background : 'bisque'}>
          <div
            style={isDarkTheme ? { color: theme.foreground } : {}}
            className={classes.panelLabel}>
            GAMES
          </div>
          <Games maxCount={4} isLanding />
        </FullPagePanel>
        <FullPagePanel
          bgColor={
            isDarkTheme ? theme.backgroundFaded : 'lightgoldenrodyellow'
          }>
          <div
            style={isDarkTheme ? { color: theme.foreground } : {}}
            className={classes.panelLabel}>
            LIBRARIES
          </div>
          <Libraries maxCount={2} isLanding />
        </FullPagePanel>
      </FullPageContainer>
    </React.Fragment>
  );
};

export default Landing;
