import React, {useState} from "react";
import './sign-in.styles.scss'
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

export const SignIn = () => {
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const handleSubmit = event => {
        event.preventDefault();

        setEmail('');

        setPassword('');
    }

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }


    return <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput
                type="email"
                handleChange={handleEmailChange}
                name="email"
                value={email}
                label='email'
                required
            />

            <FormInput
                type="password"
                handleChange={handlePasswordChange}
                name="password"
                value={password}
                label='password'
                required
            />

            <div className='buttons'>
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
            </div>
        </form>
    </div>
}