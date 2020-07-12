import React from 'react';
import Square from './Square';

const Board = ({squares, onClick}) => (
	<div>
		<Square value="1" onClick={() => onClick("dumbo prop")} />
		<Square value="2" onClick={() => onClick("dumbo prop")} />
		<Square value="1" onClick={() => onClick("dumbo prop")} />
		<Square value="1" onClick={() => onClick("dumbo prop")} />
		<Square value="1" onClick={() => onClick("dumbo prop")} />
		<Square value="1" onClick={() => onClick("dumbo prop")} />
		<Square value="1" onClick={() => onClick("dumbo prop")} />
		<Square value="1" onClick={() => onClick("dumbo prop")} />
	</div>
)

export default Board;
