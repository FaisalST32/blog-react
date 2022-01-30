import React from 'react';
import classes from './games.module.css';
import GamesThumbnail from './games-thumbnail/games-thumbnail.component';
import ReactIf from '../../common/react-if/react-if.component';
import { withRouter } from 'react-router';
import PageTitle from '../../common/page-title/page-title.component';

const Games = ({ maxCount, isLanding, ...props }) => {
	let games = [
		{ title: 'wordle-online', url: 'http://wordler.faisalrashid.tech/' },
		{ title: 'drop-ball', url: 'https://dropball.faisalrashid.tech' },
		{ title: 'dodge-car', url: 'https://dodge-car.faisalrashid.tech' },
		{
			title: 'tic-tac-toe',
			url:
				'https://games.' + process.env.REACT_APP_PRIMARY_DOMAIN + '/tictactoe/',
		},
		{
			title: 'minesweeper',
			url:
				'https://games.' +
				process.env.REACT_APP_PRIMARY_DOMAIN +
				'/minesweeper/',
		},
		{
			title: 'carrom-tac-toe',
			url:
				'https://games.' +
				process.env.REACT_APP_PRIMARY_DOMAIN +
				'/carrom-tac-toe/',
		},
		{ title: 'quizzo', url: 'https://quizzo.faisalrashid.tech/' },
	];

	if (maxCount) {
		games = games.slice(0, maxCount);
	}

	const gamesHtml = games.map((game) => {
		return (
			<GamesThumbnail title={game.title} url={game.url} key={game.title} />
		);
	});

	return (
		<div className='content-container'>
			<ReactIf showIf={!isLanding}>
				<PageTitle title='Games' />
			</ReactIf>
			<div className={classes.Games}>{gamesHtml}</div>
			<ReactIf showIf={isLanding}>
				<div
					onClick={() => {
						props.history.push('/games');
					}}
					className='more-content'
				>
					view all games
					<span role='img' aria-label='link'>
						&nbsp;&rarr;
					</span>
				</div>
			</ReactIf>
		</div>
	);
};

export default withRouter(Games);
