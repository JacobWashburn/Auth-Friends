import React from 'react';
import styled from 'styled-components';

import LoginForm from './Forms/LoginForm';

const LoginPage = props => {
    return (
        <LoginForm {...props}/>
    )
}

export default LoginPage