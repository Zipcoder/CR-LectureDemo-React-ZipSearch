import React from 'react';

class Display extends React.Component {
	render() {
		return(this.props.if) ? <div className="display">{this.props.children}</div> : null;
	}
}

export default Display;