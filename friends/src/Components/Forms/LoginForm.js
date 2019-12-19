import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {postLogin} from '../../Actions';

const FormWrapper = styled.div`

`;
const Form = styled.form`

`;
const Input = styled.input`

`;
const Label = styled.label`

`;
const Button = styled.button`

`;

const LoginForm = props => {
    const [creds, setCreds] = useState({
        username: '',
        password: ''
    });
    const onChangeHandler = e => {
        setCreds({...creds, [e.target.name]: e.target.value});
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.postLogin(creds);
        setCreds({
            username: '',
            password: ''
        });
        setTimeout(() => {
           props.history.push('/')
        },1000)

    };

    return (
        <FormWrapper>
            <Form onSubmit={e => onSubmitHandler(e)}>
                <Label>Username:
                    <Input
                        required
                        type='text'
                        name='username'
                        onChange={e => onChangeHandler(e)}
                        value={creds.username}
                    />
                </Label>Password:
                <Label>
                    <Input
                        required
                        type='password'
                        name='password'
                        onChange={e => onChangeHandler(e)}
                        value={creds.password}
                    />
                </Label>
                {props.isLoggingin ? 'Logging In':<Button type='submit'>Login</Button>}
            </Form>
            {props.error ? <p></p>:<p></p>}
        </FormWrapper>
    );
};

const mapStateToProps = state => {
    return {
        ...state
    };
};

export default connect(mapStateToProps, {postLogin})(LoginForm);