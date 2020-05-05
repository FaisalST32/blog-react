import React, { useState, useEffect } from "react";
import { axiosWrapper } from "../../utility/axios";
import PostThumbnail from "./post-thumbnail/post-thumbnail.component";
import classes from "./posts.module.css";
import ReactIf from "../../common/react-if/react-if.component";
import { withRouter } from "react-router";
import PageTitle from "../../common/page-title/page-title.component";
import Loader from "../../common/loader/loader.component";

const Posts = ({ maxCount, isLanding, ...props }) => {
  const [blogPosts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const posts = await getPosts(maxCount);
      setPosts(posts);
      setLoading(false);
    })();
  }, [maxCount]);

  const getPosts = async (count) => {
    const resp = await axiosWrapper.get("blog");
    if (!resp?.data) {
      return;
    }
    return count ? resp.data.slice(0, count) : resp.data;
  };

  const onOpenPost = (postHeading) => {
    const urlEncodedHeading = postHeading.replace(/\s/g, "-");
    props.history.push(`/blogs/${urlEncodedHeading}`);
  };

  let postsEl = null;

  if (blogPosts && blogPosts.length > 0) {
    postsEl = blogPosts.map((post) => {
      return <PostThumbnail post={post} key={post.Id} openPost={onOpenPost} />;
    });
  }

  return (
    <div className={[classes.posts, "content-container"].join(" ")}>
      <ReactIf showIf={!loading}>
        <ReactIf showIf={!isLanding}>
          <PageTitle title="Blogs" />
        </ReactIf>
        {postsEl}
        <ReactIf showIf={isLanding}>
          <div
            onClick={() => {
              props.history.push("/blogs");
            }}
            className="more-content">
            view all posts
            <span role="img" aria-label="link">
              &nbsp;&rarr;
            </span>
          </div>
        </ReactIf>
      </ReactIf>
      <ReactIf showIf={loading}>
        <div style={{height: '100vh'}}>
          <Loader message="Loading Posts..." showIf={loading} />
        </div>
      </ReactIf>
    </div>
  );
};

export default withRouter(Posts);
