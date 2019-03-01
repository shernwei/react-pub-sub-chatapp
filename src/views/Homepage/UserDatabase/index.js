import { view } from 'react-easy-state';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './style.scss';
import { Link } from 'react-router-dom';
import ChatPage from '../../Chatpage';

class UserDatabase extends Component {
    componentDidMount(){

    }
    render(){
        const {name = 'Not Set', organisation = 'Not Set'} = this.props
        return(
                <button className="button" onClick={ChatPage}>
                {name}<br></br>
                {organisation}<br></br>
                    <Link to = '/chatpage' >
                    Login
                    </Link>
                </button>
        )
    }
}

UserDatabase.propTypes = {
    'name': PropTypes.string,
    'organisation': PropTypes.string
}

export default view(UserDatabase)