import React from "react";
import classes from "./post-thumbnail.module.css";
import { contentUrl } from "../../../environments/environment";

const PostThumbnail = ({ post }) => {
	const getTrimmedHtml = html => {
		return html.replace(/<[^>]+>/g, '').split(' ').slice(0, 20).join(' ') + '...';
	}
	return (
		<article className={classes.postThumbnail}>
			<div
				className={[classes.postImageContainer, "irregular-border"].join(" ")}
			>
				<img
					src={contentUrl + post.HeaderImagePath}
					className={classes.postImage}
					alt={post.Heading}
				/>
			</div>
			<div className={classes.postContent}>
				<h2 className={classes.heading}>{post.Heading}</h2>
				<h3 className={classes.subheading}>{post.SubHeading}</h3>
				<div className={classes.datePublished}>
					<span role="img" aria-label="calendar">&#128197;</span> {new Date(post.DatePublished).toDateString()}
				</div>
				<div className={classes.postHtml}>
					{getTrimmedHtml(post.Body)}
				</div>
			</div>
		</article>
	);
};

export default PostThumbnail;
