import React, { Component } from 'react';
import MessageList from './MessageList';
import './style.scss';
//import { view } from 'react-easy-state';
//import {handleMessageChange} from './_controller'


class ChatPage extends Component {
 render() {
   return (
    <div className="chat">
      <MessageList />
    </div>
   )
 }
}

export default ChatPage