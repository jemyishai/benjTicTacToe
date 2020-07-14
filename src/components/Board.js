import React from 'react';
import Square from './Square';

const Board = ({squares, onClick}) => (
	<div>
		<Square value="1" onClick={() => onClick("dumbo prop")} />
		<Square value="2" onClick={() => onClick("dumbo prop")} />
		<Square value="3" onClick={() => onClick("dumbo prop")} />
		<Square value="4" onClick={() => onClick("dumbo prop")} />
		<Square value="5" onClick={() => onClick("dumbo prop")} />
		<Square value="6" onClick={() => onClick("dumbo prop")} />
		<Square value="7" onClick={() => onClick("dumbo prop")} />
		<Square value="8" onClick={() => onClick("dumbo prop")} />
		<Square value="9" onClick={() => onClick("dumbo prop")} />
	</div>
)

export default Board;
