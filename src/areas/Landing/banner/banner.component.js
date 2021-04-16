import React from "react";
import classes from "./banner.module.css";
import avi from "../../../assets/images/avi.png";
import Img from "../../../common/img/img.component";

const Banner = () => {
  return (
    <div className={[classes.banner, "content-container"].join(" ")}>
      <div className={classes.info}>
        <span className={classes.greeting}>Hi, I'm</span>
        <span className={classes.name}>Faisal Rashid</span> 
        <span className={classes.title}>Senior Software Engineer at DealerSocket India</span>
        <span className={classes.description}>Full-Stack Web Development | App Development</span>  
        <span className={classes.socialLinks}>
          <ul>
            <li>
              <a
                className={classes.link}
                href="https://www.facebook.com/faisalrashid32"
                target="_blank">
                <img
                  className="transition"
                  src={require("../../../assets/images/facebook.png")}
                  alt=""
                />
                <span className={classes.username}>&nbsp; /faisalrashid32</span>
              </a>
            </li>
            <li>
              <a
                className={classes.link}
                href="https://www.linkedin.com/in/faisalst32"
                target="_blank">
                <img
                  className="transition"
                  src={require("../../../assets/images/linkedin.png")}
                  alt=""
                />
                <span className={classes.username}>&nbsp; /in/faisalst32</span>
              </a>
            </li>
            <li>
              <a
                className={classes.link}
                href="https://www.twitter.com/faisalst32"
                target="_blank">
                <img
                  className="transition"
                  src={require("../../../assets/images/twitter.png")}
                  alt=""
                />
                <span className={classes.username}>&nbsp; @faisalst32</span>
              </a>
            </li>
            <li>
              <a
                className={classes.link}
                href="https://github.com/faisalst32"
                target="_blank">
                <img
                  className="transition"
                  src={require("../../../assets/images/github.png")}
                  alt=""
                />
                <span className={classes.username}>&nbsp; /faisalst32</span>
              </a>
            </li>
          </ul>
        </span>
      </div>
      <div className={classes.avi}>
        <Img src={avi} alt="Faisal Rashid" />
      </div>
    </div>
  );
};

export default Banner;
