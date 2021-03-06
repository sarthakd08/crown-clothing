import React from 'react';
// import Homepage from '../pages/homepage/hompage.component';
// import TestComponent from '../components/TestComponent/TestComponent';
const TestComponent = React.lazy(() => import('../components/TestComponent/TestComponent'))
// import ShopPage from '../pages/shop/shop.component';
const ShopPage = React.lazy(() => import('../pages/shop/shop.component'))
// import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
const SignInAndSignUpPage = React.lazy(() => import('../pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
// import CheckoutPage from '../pages/checkout/checkout.component';
const CheckoutPage = React.lazy(() => import('../pages/checkout/checkout.component'))



const Homepage = React.lazy(() => import('../pages/homepage/hompage.component'));

const Route1 = (props) => {
    console.log('Route1 props', props);
    return (
    <div>
        <h3>Route 1</h3>
    </div>
    )
}

// const hats = (props) => {
//     console.log('hats props', props);
//     return (
//     <div>
//         <h3>hats </h3>
//     </div>
//     )
// }

const routesConfig = [
    {
      path: '/',
      Component: Homepage,
      exact: true,
      name: 'HOMEPAGE',
      doNeedStateEngine: false,
      showOnlyToLoggedInUser: false,
    },
    {
      path: '/route1',
      Component: Route1,
      exact: true,
      name: 'route1', 
      doNeedStateEngine: true,
      showOnlyToLoggedInUser: false,
    },
    {
      path: '/shop',
      Component: ShopPage,
      exact: false,
      name: 'shop',
      doNeedStateEngine: true,
      showOnlyToLoggedInUser: false,
    },
    {
      path: '/signin',
      Component: SignInAndSignUpPage,
      exact: true,
      name: 'signin',
      doNeedStateEngine: true,
      showOnlyToLoggedInUser: true,
    },
    {
      path: '/checkout',
      Component: CheckoutPage,
      exact: true,
      name: 'signin',
      doNeedStateEngine: true,
      showOnlyToLoggedInUser: false,
    },
    {
      path: '/test',
      Component: TestComponent,
      exact: true,
      name: 'test',
      doNeedStateEngine: true,
      showOnlyToLoggedInUser: false,
    }
]

export default routesConfig;