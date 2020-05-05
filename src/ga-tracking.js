
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

export const initTracking = () => {
  if (process.env.NODE_ENV === "production") {
    const history = createBrowserHistory();
  
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
    ReactGA.set({
      page: "/",
    });
  
    history.listen((location) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
  }
}

