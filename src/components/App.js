import Display from './Display';
import Header from './Header';
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
          <p>this will be were an awesome app lives</p>
        </Display>
      </div>
    )
  }
}

export default App;
