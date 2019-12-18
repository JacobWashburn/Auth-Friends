import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import FriendCard from './FriendCard';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 2.5%;
`;

const FriendList = props => {
    return (
        <CardWrapper>
            {props.friendsList.map(friend => <FriendCard key={friend.id} person={friend}/>)}
        </CardWrapper>
    );
};

const mapStateToProps = state => {
    return {...state};
};

export default connect(mapStateToProps, {})(FriendList);