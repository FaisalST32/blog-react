import React, { useState, useEffect } from 'react';
import { axiosWrapper } from '../../utility/axios';
import PostThumbnail from './post-thumbnail/post-thumbnail.component';
import classes from './posts.module.css';
import ReactIf from '../../common/react-if/react-if.component';
import { withRouter } from 'react-router';
import PageTitle from '../../common/page-title/page-title.component';

const Posts = ({ maxCount, isLanding, ...props }) => {
  const [blogPosts, setPosts] = useState([]);

  useEffect(() => {
    (async function () {
      const posts = await getPosts(maxCount);
      setPosts(posts);
    })();
  }, [])

  const getPosts = async (count) => {
    const resp = await axiosWrapper.get('blog');
    console.log(resp);
    if (!resp?.data) {
      return;
    }
    return count ? resp.data.slice(0, count) : resp.data;
  }

  let postsEl = null;

  if (blogPosts && blogPosts.length > 0) {
    postsEl = blogPosts.map(post => {
      return <PostThumbnail post={post} key={post.Id} />
    })
  }



  return (
    <div className={[classes.posts, 'content-container'].join(' ')}>
      <ReactIf showIf={!isLanding}>
        <PageTitle title="Blogs" />
      </ReactIf>
      {postsEl}
      <ReactIf showIf={isLanding}>
        <div onClick={() => { props.history.push('/blogs') }} className="more-content">view all posts<span role="img" aria-label="link">&nbsp;&rarr;</span></div>
      </ReactIf>
    </div>
  )
}

export default withRouter(Posts);
