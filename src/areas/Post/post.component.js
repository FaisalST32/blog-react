import React, { useEffect, useState } from "react";
import { axiosWrapper } from "../../utility/axios";
import ReactIf from "../../common/react-if/react-if.component";
import classes from "./post.module.css";
import { Helmet } from "react-helmet";
import { contentUrl, siteUrl } from "../../environments/environment";

const Post = (props) => {
  const getBlogContent = async (blogUrl) => {
    console.log(blogUrl);
    const resp = await axiosWrapper.get(blogUrl);
    console.log(resp);
    if (!resp || !resp.data) {
      return null;
    }
    return resp.data;
  };

  const [blogContent, setBlogContent] = useState(null);

  useEffect(() => {
    (async () => {
      const blogUrl = props.match.params.id;
      const blogContentResp = await getBlogContent(`blog/${blogUrl}`);
      if (blogContentResp) {
        setBlogContent(blogContentResp);
      }
    })();
  });

  return (
    <div className="content-container">
      <ReactIf showIf={!!blogContent}>
        <Helmet>
          <title>{blogContent?.Heading}</title>
          <meta name="description" content={blogContent?.SubHeading} />
          <meta property="og:title" content={blogContent?.Heading} />
          <meta
            property="og:image"
            content={contentUrl + blogContent?.HeaderImagePath}
          />

          <meta property="og:description" content={blogContent?.SubHeading} />
          <meta property="og:url" content={siteUrl + props.match.params.id} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@faisalst32"></meta>
        </Helmet>
        <div className={classes.Post}>
          <h1 className={classes.heading}>{blogContent?.Heading}</h1>
          <h2 className={classes.subHeading}>{blogContent?.SubHeading}</h2>
          <div className={classes.info}>
            <div className={classes.avi}>
              <img className="fitting-image"
                src={require("../../assets/images/author-avi.jpg")}
                alt="author"
              />
            </div>
            <div className={classes.textInfo}>
              <span className={classes.authorName}>Faisal Rashid</span>
              <span className={classes.datePublished}>
                <span role="img" aria-label="calendar">
                  &#128197;
                </span>{" "}
                {new Date(blogContent?.DatePublished).toDateString()}
              </span>
            </div>
          </div>
          <img className={classes.headerImage} src={contentUrl + blogContent?.HeaderImagePath} alt={blogContent?.Heading} />
          <div
            className={classes.body}
            dangerouslySetInnerHTML={{ __html: blogContent?.Body }}></div>
        </div>
      </ReactIf>
    </div>
  );
};

export default Post;
