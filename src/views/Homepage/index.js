import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './styles.scss';
import ChatPage from '../Chatpage';

class Homepage extends Component {
  render() {
    return (
      <div className="home-page">
          <p>
            Pub/Sub chat application
          </p>
      <div className="button-block">
        <button className="btn" onClick={ChatPage}>
          <Link to = '/chatpage' >
              John <br></br>
              Accenture
            </Link>
          </button>
          <button className="btn" onClick={ChatPage}>
          <Link to = '/chatpage' >
              Andy <br></br>
              Petronas
          </Link>
          </button>
          <button className="btn" onClick={ChatPage}>
          <Link to = '/chatpage' >
              William <br></br>
              Petronas
          </Link>
          </button>
      </div>
      </div>
    );
  }
}

export default withRouter(Homepage);
