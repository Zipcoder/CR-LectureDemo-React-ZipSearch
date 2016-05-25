import Display from './Display';
import Header from './Header';
import IO from 'socket.io-client';
import Join from './Join';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.emit = this.emit.bind(this);
    this.state = {
      status: 'disconnected',
      member: {name:null}
    }
  }

  componentWillMount(){
    this.socket = IO('http://localhost:3000');
  }

  emit(eventName, payload){
    this.socket.emit(eventName, payload);
  }

  render() {
    return (
      <div>
        <Header {...this.state}/>
        <Display if={!this.state.member.name}>
          <Join emit={this.emit}/>
        </Display>
      </div>
    )
  }
}

export default App;
