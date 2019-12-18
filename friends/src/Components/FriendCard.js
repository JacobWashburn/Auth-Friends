import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Card = styled.div`
  width: 30%;
  border: 3px solid forestgreen;
  border-radius: .7rem;
  margin-top: 2.5%;
`;
const Name = styled.h2`

`;
const Attribute = styled.h4`

`;

const FriendCard = ({person}) => {
    return (
        <Card>
            <Name>{person.name}</Name>
            <Attribute>{person.age}</Attribute>
            <Attribute>{person.email}</Attribute>
        </Card>
    );
};

const mapStateToProps = state => {
    return {...state};
};


export default connect(mapStateToProps, {})(FriendCard);