import React, { Component } from "react";
import "./style.scss";

class MessageList extends Component {
    render() {
        return (
            <div className="MessageList">
                <div>Connecting...</div>
                <div><span className="author">You:</span>Hello</div>
                <div><span className="author">Andy:</span>Hey everyone</div>
            </div>
        )
    }
}

export default MessageList