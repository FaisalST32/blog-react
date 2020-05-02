import React from 'react';
import classes from './games-thumbnail.module.css';
import { withRouter } from 'react-router';

const GamesThumbnail = ({ title, url, ...props }) => {

  const openNewWindow = url => {
    window.open(url, '_blank');
  }

  return (
    <div onClick={() => {openNewWindow(url)}} className={[classes.GamesThumbnail, 'irregular-border'].join(' ')}>
      <div className={classes.imageContainer}>
        <img className="fitting-image" src={require(`../../../assets/images/${title}.png`)} alt={title} />
      </div>
      <div className={[classes.overlay, 'irregular-border-nocolor'].join(' ')}>
        <div className={classes.label}>
          {title}
        </div>
      </div>
    </div>
  )
}

export default withRouter(GamesThumbnail)
