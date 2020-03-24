import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Routes from './routings/routes';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user});

      console.log('loggedIn User', user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Routes/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
