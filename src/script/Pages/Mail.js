import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MailStore from '../Stores/MailStore';
import * as MailActions from '../Actions/MailActions';

class Mail extends Component {
    constructor(props) {
        super(props);
        this.getMail = this.getMail.bind(this);
        this.state = {inboxList: MailStore.getMail()};
    }

    componentWillMount() {
        MailStore.on('mail received', this.getMail);
    }

    componentWillUnmount() {
        MailStore.removeListener('mail received', this.getMail);
    }

    getMail() {
        this.setState({
            inboxList: MailStore.getMail()
        })
    }

    refreshInbox() {
        MailActions.refreshInbox();
    }

    render () {
        return (
            <div>
                <h1>This is Mail</h1>
                <Link to='/'>Home</Link>
                <br/>
                <br/>
                <button onClick={this.refreshInbox.bind(this)}>Receive mail</button>
                <ol>
                    {this.state.inboxList.map((item) => {
                        return <li key={item.id}>{item.sender} — {item.title}</li>;
                    })}
                </ol>
            </div>
        );
    }
}

export default Mail;
