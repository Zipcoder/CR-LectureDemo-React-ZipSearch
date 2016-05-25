import React from 'react';

class Logger extends React.Component {
	addEntry(log, i){
		return (
			<div key={i}>
				{log.name} {log.equation} {log.result}
			</div>
		);
	}

	render(){
		return(
			<div>
				{this.props.logs.map(this.addEntry)}
			</div>
		);
	}
}

export default Logger