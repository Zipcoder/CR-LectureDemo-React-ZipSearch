import Header from './Header';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'disconnected'
    }
  }
  render() {
    return (
      <div>
        <Header {...this.state}/>
        <p>Here lives the beginings of a great app</p>
      </div>
    )
  }
}

export default App;
