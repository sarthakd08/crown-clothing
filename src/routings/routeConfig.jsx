import React from 'react';
import Homepage from '../pages/homepage/hompage.component';
import ShopPage from '../pages/shop/shop.component';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const Route1 = (props) => {
    console.log('Route1 props', props);
    return (
    <div>
        <h3>Route 1</h3>
    </div>
    )
}

const hats = (props) => {
    console.log('hats props', props);
    return (
    <div>
        <h3>hats </h3>
    </div>
    )
}

const routesConfig = [
    {
      path: '/',
      component: Homepage,
      exact: true,
      name: 'HOMEPAGE',
      doNeedStateEngine: false,
    },
    {
      path: '/route1',
      component: Route1,
      exact: true,
      name: 'route1',
      doNeedStateEngine: true,
    },
    {
      path: '/shop',
      component: ShopPage,
      exact: true,
      name: 'shop',
      doNeedStateEngine: true,
    },
    {
      path: '/signin',
      component: SignInAndSignUpPage,
      exact: true,
      name: 'signin',
      doNeedStateEngine: true,
    }
]

export default routesConfig;