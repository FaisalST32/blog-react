import React, { useState } from "react";
import ReactIf from "../react-if/react-if.component";

const Img = ({ src, className, alt, imageDidLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  let style = { display: "none" };
  if (imageLoaded) {
    style = {};
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
