import React from 'react';
import ReactDOM from 'react-dom';

class Join extends React.Component {
	constructor(){
		super();
		this.join = this.join.bind(this);
	}

	join(){
		var memberName = ReactDOM.findDOMNode(this.refs.name).value;
		this.props.emit('join', {name:memberName});
	}

	render(){
		return(
			<form action="javascript:void(0)" onSubmit={this.join}>
				<button className="btn btn-primary">Join</button>
				<input id="form-name"
					ref="name"
					className="form-control"
					placeholder="enter your full name..."
					required />
			</form>
		);
	}
}

export default Join;