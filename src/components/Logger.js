import React from 'react';

class Logger extends React.Component {
	componentDidUpdate(){
		var elem = document.getElementById('logger');
  		elem.scrollTop = elem.scrollHeight;	
	}

	addEntry(log, i){
		return (
			<div className="log-entry" key={i}>
				<div className="log-name">{log.name}</div>
				<div className="log-search">{log.equation}</div>
				<div className="log-result">{log.result}</div>
			</div>
		);
	}

	render(){
		return(
			<div id="logger">
				{this.props.logs.map(this.addEntry)}
			</div>
		);
	}
}

export default Logger