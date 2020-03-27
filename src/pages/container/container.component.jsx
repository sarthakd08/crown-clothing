
import React from 'react';
import {connect} from 'react-redux';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import {setCurrentUser} from '../../redux/user/user.actions';

class Container extends React.Component {

    unSubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({currentUser: userAuth});
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            }) 
        });
      } else {
       setCurrentUser(userAuth);
      }
      console.log('loggedIn User', userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

    render() {
        return(
            <div></div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  })  

export default connect(null, mapDispatchToProps)(Container);