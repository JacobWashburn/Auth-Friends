import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {startEditing, stopEditing, putFriend} from '../Actions';

const CardWrapper = styled.div`
width: 30%;
height: 15rem;
`;
const Card = styled.div`
  width: 100%;
  border: 3px solid forestgreen;
  border-radius: .7rem;
  margin-top: 2.5%;
`;
const Name = styled.h2`

`;
const Attribute = styled.h4`

`;
const ButtonWrapper = styled.div`
 display: flex;
 justify-content: space-evenly;
`;
const Button = styled.button`
  background-color: lightgrey;
`;
const FormWrapper = styled.div`
height: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin: 4% 0;
`;
const Label = styled.label`

`;

const FriendCard = props => {
    const [editPerson, setEditPerson] = useState({
        id: props.person.id,
        name: props.person.name,
        age: props.person.age,
        email: props.person.email
    });
    const onChangeHandler = e => {
        setEditPerson({...editPerson, [e.target.name]: e.target.value});
    };
    const onSubmitHandler = e => {
        e.preventDefault();
        props.putFriend(editPerson);
    };
    return (
        <CardWrapper>
            {props.isEditing && props.editId === props.person.id ? <Card> <FormWrapper>
            <Form onSubmit={e => onSubmitHandler(e)}>
                <Label>Name:
                    <Input
                        required
                        type='text'
                        name='name'
                        onChange={e => onChangeHandler(e)}
                        value={editPerson.name}
                    />
                </Label>
                <Label>Age:
                    <Input
                        required
                        type='number'
                        name='age'
                        onChange={e => onChangeHandler(e)}
                        value={editPerson.age}
                    />
                </Label>
                 <Label>Email:
                    <Input
                        required
                        type='email'
                        name='email'
                        onChange={e => onChangeHandler(e)}
                        value={editPerson.email}
                    />
                </Label>
                <Button type='submit'>Change Friend</Button>
                <Button onClick={props.stopEditing}>Cancel</Button>
            </Form>
        </FormWrapper></Card> : <Card>
                <Name>{props.person.name}</Name>
                <Attribute>{props.person.age}</Attribute>
                <Attribute>{props.person.email}</Attribute>
                <ButtonWrapper>
                    <Button onClick={e => {
                        e.preventDefault();
                        props.startEditing(props.person.id);
                    }}>Edit</Button>
                    <Button>Delete</Button>
                </ButtonWrapper>
            </Card>}
        </CardWrapper>
    );
};

const mapStateToProps = state => {
    return {...state};
};


export default connect(mapStateToProps, {startEditing, stopEditing, putFriend})(FriendCard);