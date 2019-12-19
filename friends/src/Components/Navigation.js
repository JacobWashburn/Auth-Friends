import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
   display: flex;
   justify-content: space-around;
   align-items: center;
   
`;

const TitleWrapper = styled.div`
   display: flex;
   justify-content: center;
   width: 30%;
`;

const HeaderTitle = styled.h1`
`;

const NavWrapper = styled.div`
   display: flex;
   justify-content: space-evenly;
   width: 30%;
   a {
      text-decoration: none;
      font-size: 1.5rem;
   }
`;
const InnerNavWrapper = styled.div`
  display: flex;
   justify-content: space-evenly;
   width: 100%;
   a {
      text-decoration: none;
      font-size: 1.5rem;
   }
`

const NavigationHeader = (props) => {
    console.log('nav props', props);
    const locationURL = props.location.pathname;
    let navLink = '';
    if (locationURL === '/login') {
        navLink = <Link to=''>Register</Link>;
    } else if (locationURL === '/friends') {
        navLink = (
            <InnerNavWrapper>
                <Link to='/addFriend'>Add a Friend</Link>
                <Link to='/'>Home</Link>
            </InnerNavWrapper>
        );
    } else if (locationURL === '/addFriend') {
        navLink = (
            <InnerNavWrapper>
                <Link to='/friends'>Back to Friends</Link>
                <Link to='/'>Home</Link>
            </InnerNavWrapper>
        );
    } else {
        navLink = <Link to='/friends'>See Some Friends</Link>;
    }
    return (
        <Header>
            <TitleWrapper>
                <HeaderTitle>Friends!</HeaderTitle>
            </TitleWrapper>
            <NavWrapper>
                {navLink}
            </NavWrapper>
        </Header>
    );
};

export default NavigationHeader;