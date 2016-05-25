import Display from './Display';
import Header from './Header';
import IO from 'socket.io-client';
import Join from './Join';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.emit = this.emit.bind(this);
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.joined = this.joined.bind(this);

    this.state = {
      status: 'disconnected',
      member: {name:null}
    }
  }

  componentWillMount(){
    this.socket = IO('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('joined', this.joined);
  }

  emit(eventName, payload){
    this.socket.emit(eventName, payload);
  }

  connect() {
    var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;
    if(member)
      this.emit('join', member);

    this.setState({status:'connected'});
  }

  disconnect() {
    this.setState({status: 'disconnected'});
  }

  joined(member) {
    sessionStorage.member = JSON.stringify(member);
    this.setState({member: member})
    console.log(this.state.member);
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
