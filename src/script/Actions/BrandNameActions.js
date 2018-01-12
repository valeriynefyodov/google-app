import Dispatcher from '../Dispatcher';
import $ from "jquery";

const HOST = 'http://192.168.1.30:8088';

export function loadFeedbacks() {
    Dispatcher.dispatch({
        type: 'FETCH_FEEDBACKS'
    });

    $.getJSON(HOST + '/feedbacks.json', (data) => {
        Dispatcher.dispatch({
            type: 'RECEIVE_FEEDBACKS',
            feedbacks: data
        });
    });
}

export function submitSubscribeForm(name, email) {
    Dispatcher.dispatch({
        type: 'SUBMIT_FORM',
        subscriber: {
            name,
            email
        }
    });
}