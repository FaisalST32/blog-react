import React from 'react'
import classes from './library-thumbnail.module.css';
import Img from '../../../common/img/img.component';

const LibraryThumbnail = ({ library: { url, title, description } }) => {
  const openUrl = linkUrl => {
    window.open(linkUrl, '_blank');
  }
  return (
    <div onClick={() => { openUrl(url) }} className={classes.LibraryThumbnail}>
      <div className={[classes.imageContainer, 'irregular-border'].join(' ')}>
        <Img className="fitting-image" src={require(`../../../assets/images/${title}.gif`)} alt={title} />
        <div className={classes.imageOverlay}>
          <img src={require('../../../assets/images/github.svg')} alt="github" />
          <span>View on GitHub</span>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.title}>
          {title}
        </div>

        <div className={classes.description}>
          {description}
        </div>
      </div>
    </div>
  )
}

export default LibraryThumbnail;
