import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
        <header>
          <div className="header-menu">
            <div className="header-menu__email"></div>
          </div>
        </header>
    );
  }
}


export default Header;
