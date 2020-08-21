import React, { useState } from 'react';
import classes from './img.module.css';

const Img = ({ src, className, alt, imageDidLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  let imgClasses = [classes.imgHidden, className]
  if (imageLoaded) {
    imgClasses.shift();
    imgClasses.unshift(classes.imgShown);
  }

  const onLoadImage = () => {
    if (imageDidLoad) {
      imageDidLoad();
    }
    setImageLoaded(true);
  };

  return (
    <React.Fragment>
      <img
        src={src}
        alt={alt}
        className={imgClasses.join(' ')}
        onLoad={onLoadImage}
      />
      {(!imageLoaded &&
        <img src={require('./loading.png')} alt={alt} className={className} />
      )}
    </React.Fragment>
  );
};

export default Img;
