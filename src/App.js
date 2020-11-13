import React, {Suspense} from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import Routes from './routings/routes';
import ErrorHandler from './components/Errorhandler/Errorhandler'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {/* <Suspense fallback={<div>LOADING CONTENT...</div>}> */}
          <ErrorHandler>
            <Routes isCurrentUser={this.props.user} />
          </ErrorHandler>
        {/* </Suspense> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
