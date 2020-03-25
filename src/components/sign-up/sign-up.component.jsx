import React from 'react';

import Button from '../Button/button.compoent';
import FormInput from '../form-input/form-input.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleChange = (event) => {
        const { value, name} = event.target;
        this.setState({ [name]:value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert('Paswwords do not match');
            return;
        }

        try {
            const user = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user , {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch(error) {
            console.log(error);
        }
    }


    render() {
        return (
            <div className="sign-up">
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name='displayName' value={this.state.displayName} onChange={this.handleChange} label="Display Name" required />
                    <FormInput type="email" name='email' value={this.state.email} onChange={this.handleChange} label="Enter Email" required/>
                    <FormInput type="password" name='password' value={this.state.password} onChange={this.handleChange} label="Enter Password" required/>
                    <FormInput type="password" name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} label="Enter Password" required/>
                    <div className="buttons">
                        <Button type="submit" >Sign Up</Button>
                    </div>
                </form>

            </div>
        )
    }
}


export default SignUp;