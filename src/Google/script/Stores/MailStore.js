import Dispatcher from '../Dispatcher';
import { EventEmitter } from 'events';
import $ from 'jquery';

class MailStore extends EventEmitter {
    constructor() {
        super();

        this.inboxList = [
            {
                id: 123123123,
                sender: 'Alex Cutcher',
                title: 'Christmas plans'
            },
            {
                id: 456456456,
                sender: 'Robert Johns',
                title: 'Birthday present'
            },
        ]
    }

    refreshInbox(letters) {
        this.inboxList.length = 0;
        let self = this;
        letters.forEach((item) => {
            self.inboxList.push($.extend({}, {id: Math.floor(Math.random() * (999999999 - 100000000)) + 100000000}, item));
        });
        this.emit('mail received');
    }

    getMail() {
        return this.inboxList;
    }

    handleActions(action) {
        switch (action.type){
            case 'REFRESH_INBOX':
                this.refreshInbox(action.data);
                break;

            default:
                break;
        }
    }
}

const mailStore = new MailStore();
Dispatcher.register(mailStore.handleActions.bind(mailStore));

export default mailStore;
