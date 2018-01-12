import Dispatcher from '../Dispatcher';
import $ from "jquery";

const HOST = 'http://192.168.1.30:8088';

export function hideCourse(id) {
    Dispatcher.dispatch({
        type: 'HIDE_COURSE',
        id
    })
}

export function loadCourses() {
    Dispatcher.dispatch({
        type: 'FETCH_COURSES'
    });

    $.getJSON(HOST + '/courses.json').then((data) => {
        let fullData = [];

        data.forEach((item) => {
            fullData.push($.extend({}, {id:  Math.floor(Math.random() * (9999 - 1000)) + 1000}, item))
        });

        Dispatcher.dispatch({
            type: 'RECEIVE_COURSES',
            courses: fullData
        });
    });
}