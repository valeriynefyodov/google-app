import Dispatcher from '../Dispatcher';

export function hideCourse(id) {
    Dispatcher.dispatch({
        type: 'HIDE_COURSE',
        id
    })
}