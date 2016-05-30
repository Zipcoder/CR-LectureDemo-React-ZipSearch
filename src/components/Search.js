import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
	constructor(props){
		super(props);

		this.clearString = this.clearString.bind(this);
		this.submit = this.submit.bind(this);
	}

	clearString(){
		ReactDOM.findDOMNode(this.refs.search).value = '';
	}

	submit(){
		console.log("here in submit");
		var query = ReactDOM.findDOMNode(this.refs.search).value;

		if(query !== ''){
			this.props.emit('submitting', query);
			this.clearString();
		}
	}

	render(){
		return(
			<div id="search-box">
				<form action="javascript:void(0)" onSubmit={this.submit}>
					<button className="btn btn-primary">Submit</button>
					<input id="form-search" className="form-control" type="text" ref="search" name="search" />
				</form>
          	</div>
		);
	}
}

export default Search;