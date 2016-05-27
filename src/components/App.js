import Search from './Search';
import Display from './Display';
import Header from './Header';
import IO from 'socket.io-client';
import Join from './Join';
import Logger from './Logger';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.emit = this.emit.bind(this);
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.joined = this.joined.bind(this);
    this.result = this.result.bind(this);
    this.log = this.log.bind(this);
    this.clearResult = this.clearResult.bind(this);

    this.state = {
      status: 'disconnected',
      member: {name:null},
      answer: '',
      logs: [],
      clearResult: this.clearResult
    }
  }

  componentWillMount(){
    this.socket = IO('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('joined', this.joined);
    this.socket.on('result', this.result);
    this.socket.on('log', this.log);
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
  }

  result(answer) {
    this.setState({answer: answer});
  }

  clearResult() {
    this.setState({answer: ''});
  }

  log(payload) {
    this.setState({logs: payload});
  }

  render() {
    return (
      <div>
        <Header {...this.state}/>

        <Display if={this.state.status==='connected'}>

          <Display if={!this.state.member.name}>
            <Join emit={this.emit}/>
          </Display>

          <Display if={this.state.member.name}>
            <Logger {...this.state} />
            <Search emit={this.emit} {...this.state}/>
          </Display>

        </Display>
      </div>
    )
  }
}

export default App;
