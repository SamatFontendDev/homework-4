import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: 'sass',
    authorizeError: '',
    isAuthorized: true
  }

  authorize(email, password) {
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
  logout() {
    this.setState({
      isAuthorized: false
    })
  }
  getProviderValue() {
    return {
      email: '',
      isAuthorized: false,
      authorizeError: false,
      authorize: false,
      logout: this.logout
    }
  }
  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
