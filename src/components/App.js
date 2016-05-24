import Display from './Display';
import Header from './Header';
import Join from './Join';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'disconnected',
      member: {name:null}
    }
  }
  render() {
    return (
      <div>
        <Header {...this.state}/>
        <Display if={!this.state.member.name}>
          <Join emit={this.props.emit}/>
        </Display>
      </div>
    )
  }
}

export default App;
