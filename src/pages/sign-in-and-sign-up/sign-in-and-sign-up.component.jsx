import React from 'react';
import './sign-in-and-sign-up.style.scss';
import Layout from '../../views/Layout/Layout';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {

    return (
        <Layout showHeader={true}>
            <div className="sign-in-and-sign-up">
                <SignIn />
                <SignUp />
            </div>
        </Layout>
    )
}

export default SignInAndSignUpPage;