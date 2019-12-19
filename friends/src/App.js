import React,{useEffect} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import PrivateRoute from './Utils/PrivateRoute';

import FriendsList from './Components/FriendsList';
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import {getAllFriends} from './Actions';
import AddFriendForm from './Components/Forms/AddFriendForm';
import NavigationHeader from './Components/Navigation';

function App (props) {
    console.log('app props', props);
   useEffect(() => {
       props.getAllFriends()
   },[props.loggedIn]);
    return (
        <div className='App'>
            <Route path='/' component={NavigationHeader} />
            <Route path='/login' component={LoginPage}/>
            <PrivateRoute exact path='/' component={Dashboard}/>
            <PrivateRoute path='/friends' component={FriendsList}/>
            <PrivateRoute path='/addFriend' component={AddFriendForm}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {...state}
}

export default connect(mapStateToProps,{getAllFriends})(App);
