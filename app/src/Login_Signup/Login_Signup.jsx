import React, { Component } from 'react';
import Card from '@mui/material/Card';
import Login from './LogIn';
import SignUp from './Signup';

const Login_Signup = () => {
    return (
        <div>
            <Card variant="outlined">
                {/* <Login /> */}
                <SignUp />
            </Card>

        </div>
    );

}

export default Login_Signup;