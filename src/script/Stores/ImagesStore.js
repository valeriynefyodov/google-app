import Dispatcher from '../Dispatcher';
import { EventEmitter } from 'events';

class ImagesStore extends EventEmitter {
    constructor() {
        super();

        this.images = [
            {
                backgroundColor: "#F5F5F5"
            },
            {
                backgroundColor: "#000000"
            },
            {
                backgroundColor: "#F5F5F5"
            },
            {
                backgroundColor: "#ABCE12"
            },
        ];
    }

    getAll() {
        return this.images;
    }

    handleActions(action) {
        switch (action.type){
            case 'UPLOAD_IMAGE':
                this.images.push({backgroundColor: action.color});
                this.emit('image uploaded');
                break;

            default:
                break;
        }
    }
}

const imagesStore = new ImagesStore();
Dispatcher.register(imagesStore.handleActions.bind(imagesStore));

export default imagesStore;
