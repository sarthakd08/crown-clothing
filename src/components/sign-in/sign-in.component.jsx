import React from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../Button/button.compoent';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import './sign-in.style.scss';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password} = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        } catch(error) {
            console.log(error);
        }

    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]:value });
    }

    render() {
        return (
            <div className="sign-in" onSubmit={this.handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />

                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required />

                    <div className="buttons">
                        <Button type="submit"> Sign In </Button>
                        <Button isGoogleSignIn='true' onClick={signInWithGoogle}>Google SignIn</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;