import React from 'react';
import LibraryThumbnail from './library-thumbnail/library-thumbnail.component';
import classes from './libraries.module.css';
import ReactIf from '../../common/react-if/react-if.component';
import { withRouter } from 'react-router';
import PageTitle from '../../common/page-title/page-title.component';

const Libraries = ({ maxCount, isLanding, ...props }) => {
	const librariesArr = [
		{
			title: 'fs-lightbox',
			url: 'https://github.com/FaisalST32/fs-lightbox',
			description: 'A simple lightbox for your image gallery',
		},
		{
			title: 'fullpage-react-fs',
			url: 'https://github.com/FaisalST32/fullpage-react-fs',
			description: 'A lightweight react library to create fullpage websites',
		},
		{
			title: 'fs-toast',
			url: 'https://github.com/FaisalST32/fs-toast',
			description:
				'A simple no-dependency JavaScript library for showing toast notifications',
		},
		{
			title: 'fs-scrollanimate',
			url: 'https://github.com/FaisalST32/fs-scrollanimate',
			description:
				'A lightweight JavaScript library to animate elements on scroll',
		},
		{
			title: 'use-validation-react',
			url: 'https://github.com/FaisalST32/use-validation-react',
			description: 'A simple react hook for all your form validations.',
		},
	];

	maxCount = maxCount ? maxCount : librariesArr.length;

	let librariesHtml = librariesArr.slice(0, maxCount).map((library) => {
		return <LibraryThumbnail key={library.title} library={library} />;
	});
	return (
		<div className='content-container'>
			<ReactIf showIf={!isLanding}>
				<PageTitle title='Libraries' />
			</ReactIf>
			<div className={classes.Library}>{librariesHtml}</div>
			<ReactIf showIf={isLanding}>
				<div
					onClick={() => {
						props.history.push('/libraries');
					}}
					className='more-content'
				>
					view all libraries
					<span role='img' aria-label='link'>
						&nbsp;&rarr;
					</span>
				</div>
			</ReactIf>
		</div>
	);
};

export default withRouter(Libraries);
