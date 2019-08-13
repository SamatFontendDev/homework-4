import React, { PureComponent } from 'react';
import './Header.css'
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button/Button'; 


class Header extends PureComponent {
  render() {
    const {logout, email} = this.props
    return (
        <header className="header">
          <div className="header__content">
            <div className="header__title">HEADER</div>
            <div className="header-menu">
              <div className="header-menu__email">{email}</div>
              <Button onClick={logout} />
            </div>
          </div>
        </header>
      );
  }
}


export default () => ( <AuthConsumer>
  {({ isAuthorized, email, logout }) =>
    (
      <Header email={isAuthorized && email} logout={logout} />
    )
  }
</AuthConsumer>)

