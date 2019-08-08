import React, { PureComponent } from 'react';
import './Layout.css';
import Header from '../Header/Header'

class Layout extends PureComponent {
  render() {
    return (
      <div className="main">
        <Header/>
      </div>
    );
  }
}

export default Layout;
