import React, { useState } from "react";
import { auth } from "../../firebase/firebase.utils";
import { toast } from "react-toastify";

import './forgot-password.styles.scss';

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const ForgotPasswordPage = ({ history }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const config = {
            url: 'https://kidft-store-client-server.herokuapp.com/signin',
            handleCodeInApp: true,
        };

        await auth.sendPasswordResetEmail(email, config)
        .then(() => {
            setEmail('');
            setLoading(false);
            toast.success('Please check your email for password reset link');
        })
        .catch((e) => {
            setLoading(false);
            toast.error(e.message);
            console.log('ERROR MESSAGE IN FORGOT PASSWORD ERROR', e);
        });
    };

    return (
        <div className="forgot-password-page">
            {loading ? (
                <h2 className='text-danger'>Loading</h2>
            ) : (
                <React.Fragment>
                    <h2>Forgot Passowrd ? </h2>
                    <span>Enter your email address to reset password.</span>
                </React.Fragment>
            )}

            <form onSubmit={handleSubmit}>

                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={e => setEmail(e.target.value)}
                    label='Email'
                    required
                />

                <CustomButton type="submit" disabled={!email}> Submit </CustomButton>
                
            </form>
        </div>
    );
};

export default ForgotPasswordPage;
