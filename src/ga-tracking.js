import ReactGA from 'react-ga';

export const initTracking = () => {
  if (process.env.NODE_ENV === 'production') {
    console.log('loading');
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
    ReactGA.set({
      page: '/',
    });
    ReactGA.pageview('/');
  }
};

export const logPageView = (history) => {
  if (process.env.NODE_ENV === 'production') {
    history.listen((location) => {
      const page = location.pathname || window.location.pathname;
      ReactGA.set({ page: page });
      ReactGA.pageview(page);
    });
  }
};
