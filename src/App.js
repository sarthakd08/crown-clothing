import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Routes from './routings/routes';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({currentUser: userAuth});
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {                        // second argument is function which runs once asynchrous work of setState is done
            console.log(this.state); 
          })
        })
      } else {
        this.setState({currentUser: userAuth});
      }
      console.log('loggedIn User', userAuth);
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
