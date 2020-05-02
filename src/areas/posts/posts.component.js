import React, { useState, useEffect } from 'react';
import { axiosWrapper } from '../../utility/axios';
import PostThumbnail from './post-thumbnail/post-thumbnail.component';
import classes from './posts.module.css';

const Posts = ({maxCount}) => {
  const [blogPosts, setPosts] = useState([]);

  useEffect(() => {
    (async function() {
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
      {postsEl}
    </div>
  )
}

export default Posts;
