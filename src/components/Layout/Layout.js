import React, { PureComponent } from 'react';
import './Layout.css';
import Header from '../Header/Header'
import LoginForm from '../LoginForm/LoginForm'
import Footer from '../Footer/Footer';

class Layout extends PureComponent {
  state = {
    value: 1
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="main">
            <LoginForm/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
