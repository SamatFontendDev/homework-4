import React, { PureComponent } from 'react';
import './Layout.css';
import Header from '../Header/Header'
import LoginForm from '../LoginForm/LoginForm'

class Layout extends PureComponent {
  state = {
    value: 1
  }

  render() {
    return (
      <div className="main">
          <Header/>
          <LoginForm/>
      </div>
    );
  }
}

export default Layout;
