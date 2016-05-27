import React from 'react';

class Search extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			equation: ''
		}

		this.buildString = this.buildString.bind(this);
		this.clearString = this.clearString.bind(this);
		this.submit = this.submit.bind(this);
	}

	buildString(e){
		this.props.clearResult();
		this.setState({equation: this.state.equation + e.target.value});
	}

	clearString(){
		this.setState({equation: ''});
	}

	submit(){
		if(this.state.equation !== ''){
			this.props.emit('submitting', this.state.equation);
			this.clearString();
		}
	}

	render(){
		return(
			<div>
				<div>{this.state.equation} {this.props.answer}</div>
				<form action="javascript:void(0)" onSubmit={this.submit}>
					<input type="text" ref="search" name="search" />
					<button type="submit">Submit</button>
				</form>
          	</div>
		);
	}
}

export default Calculator;