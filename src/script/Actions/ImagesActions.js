import Dispatcher from '../Dispatcher';

export function uploadImage(color) {
    Dispatcher.dispatch({
        type: "UPLOAD_IMAGE",
        color
    });
}

