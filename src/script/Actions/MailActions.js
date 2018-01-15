import Dispatcher from '../Dispatcher';
import $ from 'jquery';
import HOST from '../Settings';
// const HOST = 'http://192.168.1.30:8088';

export function refreshInbox () {
    $.getJSON(HOST + '/inbox.json').then((data) => {
        Dispatcher.dispatch({
            type: 'REFRESH_INBOX',
            data: data
        })
    });
}

