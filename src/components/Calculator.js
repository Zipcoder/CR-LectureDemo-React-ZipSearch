import React from 'react';

class Calculator extends React.Component {
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
					<button onClick={this.buildString} type="button" value="1">1</button>
					<button onClick={this.buildString} type="button" value="2">2</button>
					<button onClick={this.buildString} type="button" value="3">3</button>
					<button onClick={this.buildString} type="button" value="/">&divide;</button>
					<button onClick={this.buildString} type="button" value="4">4</button>
					<button onClick={this.buildString} type="button" value="5">5</button>
					<button onClick={this.buildString} type="button" value="6">6</button>
					<button onClick={this.buildString} type="button" value="*">&times;</button>
					<button onClick={this.buildString} type="button" value="7">7</button>
					<button onClick={this.buildString} type="button" value="8">8</button>
					<button onClick={this.buildString} type="button" value="9">9</button>
					<button onClick={this.buildString} type="button" value="-">-</button>
					<button onClick={this.clearString} type="button">AC</button>
					<button onClick={this.buildString} type="button" value=".">.</button>
					<button onClick={this.buildString} type="button" value="0">0</button>
					<button onClick={this.buildString} type="button" value="+">+</button>
					<button type="submit">Submit</button>
				</form>
          	</div>
		);
	}
}

export default Calculator;