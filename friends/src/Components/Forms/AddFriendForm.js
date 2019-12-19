import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {postFriend} from '../../Actions';

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


const AddFriendForm = props => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: '',
    });
    const onChangeHandler = e => {
        setFriend({...friend, [e.target.name]: e.target.value});
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.postFriend(friend);
        setFriend({
            name: '',
            age: '',
            email: '',
        });
        setTimeout(() => {
            props.history.push('/friends');
        }, 1000);

    };

    return (
        <FormWrapper>
            <Form onSubmit={e => onSubmitHandler(e)}>
                <Label>Name:
                    <Input
                        required
                        type='text'
                        name='name'
                        onChange={e => onChangeHandler(e)}
                        value={friend.username}
                    />
                </Label>
                <Label>Age:
                    <Input
                        required
                        type='number'
                        name='age'
                        onChange={e => onChangeHandler(e)}
                        value={friend.password}
                    />
                </Label>
                 <Label>Email:
                    <Input
                        required
                        type='email'
                        name='email'
                        onChange={e => onChangeHandler(e)}
                        value={friend.password}
                    />
                </Label>
                <Button type='submit'>Add Friend</Button>
            </Form>
        </FormWrapper>
    );
};

const mapStateToProps = state => {
    return {
        ...state
    };
};

export default connect(mapStateToProps, {postFriend})(AddFriendForm);