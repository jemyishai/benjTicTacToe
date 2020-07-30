import React, { useState } from 'react';
import calculateWinner from '../helpers'
import Board from './Board';

const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = () => {

	}

	const jumpTo = () => {

	}

	const renderMoves = () => {

	}


 return (
	 <div>
	<p>TicTacToe for BenjABoogALoo</p>

	<Board squares={board} onClick={handleClick} />
	</div>
 )

}

export default Game;
