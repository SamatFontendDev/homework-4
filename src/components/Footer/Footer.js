import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <p className="header__title section-title">footer</p>
        <p className="footer-message t-footer">Вы в этой системе гость</p>
      </footer>
    )
  }
}

export default () => (<AuthConsumer>
  {({isAuthorized}) => 
  isAuthorized && (
    <Footer/>
  )
}
</AuthConsumer>)
