import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Homepage from '../pages/homepage/hompage.component';
import routeConfig from './routeConfig';

// const RandomPage = () => (
//     <div>
//       <h3>GTGTGTGTG</h3>
//     </div>
//   )

const Routes = () => {
    return (
        <Switch>
            {routeConfig.map(({path, name, component, exact}) => (
                <Route path={path} component={component} exact={exact} />
            ))}
        </Switch>
    )
}

export default Routes