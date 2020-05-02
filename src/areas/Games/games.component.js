import React from 'react'
import classes from './games.module.css';
import GamesThumbnail from './games-thumbnail/games-thumbnail.component';

const Games = ({ maxCount }) => {
    let games = [
        { title: 'tic-tac-toe', url: 'https://games.faisalrashid.online/tictactoe/' },
        { title: 'minesweeper', url: 'https://games.faisalrashid.online/minesweeper/' },
        { title: 'carrom-tac-toe', url: 'https://games.faisalrashid.online/carrom-tac-toe/' },
        { title: 'quizzo', url: 'https://www.quizzo.xyz/' }
    ];

    if (maxCount) {
        games = games.slice(0, maxCount);
    }

    const gamesHtml = games.map(game => {
        return <GamesThumbnail title={game.title} url={game.url} key={game.title} />;
    });

    return (
        <div className={[classes.Games, 'content-container'].join(' ')}>
            {gamesHtml}
        </div>
    )
}

export default Games
