import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

const Paragraph = () => <p className="footer-message t-footer">Вы в этой системе гость</p>

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <p className="header__title section-title">footer</p>
        <AuthConsumer>
        {({isAuthorized}) => 
            (
              isAuthorized &&
              <Paragraph/>
            )
          }
        </AuthConsumer>
      </footer>
    )
  }
}

export default () => (<AuthConsumer>
  {({isAuthorized}) => 
  (
    <Footer/>
  )
}
</AuthConsumer>)
