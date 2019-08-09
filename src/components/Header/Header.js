import React, { PureComponent } from 'react';
import './Header.css'
import { AuthConsumer } from '../../contexts/Auth';



class Header extends PureComponent {
  render() {
    const {logout, email} = this.props
    return (
        <header>
          <div className="header-menu">
            <div className="header-menu__email">{email}</div>
          </div>
          <button onClick={logout}>LogIn</button>
        </header>
      );
  }
}


export default () => ( <AuthConsumer>
  {({ isAuthorized, email, logout }) =>
    isAuthorized && (
      <Header email={email} logout={logout} />
    )
  }
</AuthConsumer>)

