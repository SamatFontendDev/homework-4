/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: 'stu@dent.com',
    authorizeError: '',
    isAuthorized: false
  }

  authorize = (email, password) => {
    if(email === 'stu@dent.com' && password === 123) {
      this.setState({
        email: email,
        authorizeError: '',
        isAuthorized: true
      })
    }
    else if (!(email === 'stu@dent.com' && password === 123)) {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      })
    }
  }
  logout = () => {
    this.setState({
      isAuthorized: false
    })
  }
  getProviderValue = () => {
    return {
      email: '',
      isAuthorized: false,
      authorizeError: false,
      authorize: this.authorize,
      logout: this.logout
    }
  }
  render() {
    const { children } = this.props;
    const {isAuthorized, email, authorizeError} = this.state;
    
    return <Provider value={{
      isAuthorized, email, logout: this.logout, autorize: this.authorize, authorizeError
    }}>{children}</Provider>
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
