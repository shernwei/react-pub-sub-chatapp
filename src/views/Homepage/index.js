import React, { Component } from 'react';
import { view,store } from 'react-easy-state';
//import { Link } from 'react-router-dom';
import './styles.scss';
import UserDatabase from './UserDatabase';
import {getUsers} from './_controller';
//import ChatPage from '../Chatpage';

class Homepage extends Component {
  constructor (props){
    super(props)
    this.myState = store({
      'users': []
    })
  }
  componentDidMount (){
    getUsers(this)
  }
  render() {
    return (
      <div className="home-page">
          <p>
            Pub/Sub chat application
          </p>
      <div className = "button-block">
        {this.myState.users.map((item, index) => <UserDatabase key = {index} name={item['name']} organisation={item['organisation']}/>)}
      </div>
      </div>
    );
  }
}

export default view(Homepage);
