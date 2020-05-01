import React from "react";
import classes from "./banner.module.css";
import avi from '../../../assets/images/avi.png';

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.info}>
        <span className={classes.name}>Faisal Rashid</span> 
        <span className={classes.title}>Software Developer at DealerSocket India</span>
        <span className={classes.description}>Full-Stack Web Development | App Development</span>  
      </div>
      <div className={classes.avi}>
        <img src={avi} alt="Faisal Rashid" />
      </div>
    </div>
  );
};

export default Banner;
