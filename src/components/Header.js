import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div id="product">
          <h1>ZipSearch</h1>
        </div>
        <div id="status">
          <span id="connection-status" className={this.props.status}>&nbsp;</span>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {status:'disconnected'}

export default Header;
