import React from 'react';



export default class GameBox extends React.Component {
	render(){
		return (
			<div>
				<Feedback />
				<GuessContainerBox />
				<GuessesBox />
			</div>
		)
	}
}
