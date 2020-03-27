import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Homepage from '../pages/homepage/hompage.component';
import routeConfig from './routeConfig';

// const RandomPage = () => (
//     <div>
//       <h3>GTGTGTGTG</h3>
//     </div>
//   )

const Routes = (props) => {
    console.log('ROUTE Props', props);
    return (
        <Switch>
            {routeConfig.map(({path, name, Component, exact, showOnlyToLoggedInUser}) => (
                <Route key={name} path={path} exact={exact} render={() => ((showOnlyToLoggedInUser && props.isCurrentUser) ? (<Redirect to='/' />) : (<Component />) )} />  //using render() instaead of component={component} here
            ))}
        </Switch>
    )
}

export default Routes;