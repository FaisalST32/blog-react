import React from "react";
import classes from "./post-thumbnail.module.css";
import Img from "../../../common/img/img.component";

const PostThumbnail = ({ post, openPost }) => {
	const getTrimmedHtml = (html) => {
		return (
			html
				.replace(/<[^>]+>/g, "")
				.split(" ")
				.slice(0, 20)
				.join(" ") + "..."
		);
	};
	return (
		<article
			onClick={() => {
				openPost(post.Heading);
			}}
			className={[
				classes.postThumbnail,
				"irregular-border irregular-border-nocolor",
			].join(" ")}>
			<div
				className={[classes.postImageContainer, "irregular-border"].join(" ")}>
				<Img
					src={process.env.REACT_APP_CONTENT_URL + post.HeaderImagePath}
					className={classes.postImage}
					alt={post.Heading}
				/>
			</div>
			<div className={classes.postContent}>
				<h2 className={classes.heading}>{post.Heading}</h2>
				<h3 className={classes.subheading}>{post.SubHeading}</h3>
				<div className={classes.datePublished}>
					<span role="img" aria-label="calendar">
						&#128197;
					</span>{" "}
					{new Date(post.DatePublished).toDateString()}
				</div>
				<div className={classes.postHtml}>{getTrimmedHtml(post.Body)}</div>
			</div>
		</article>
	);
};

export default PostThumbnail;
