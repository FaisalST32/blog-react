import React, { useState } from "react";
import ReactIf from "../react-if/react-if.component";

const Img = ({ src, className, alt, imageDidLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  let style = {
    display: "none",
    transition: "all 200ms ease-out 200ms",
    opacity: "0",
  };
  if (imageLoaded) {
    style = { transition: "opacity 2000ms ease-out 200ms", opacity: "1" };
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
        className={className}
        onLoad={onLoadImage}
        style={style}
      />
      <ReactIf showIf={!imageLoaded}>
        <img src={require("./loading.png")} alt={alt} className={className} />
      </ReactIf>
    </React.Fragment>
  );
};

export default Img;
