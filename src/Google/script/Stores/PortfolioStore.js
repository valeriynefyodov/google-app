import { EventEmitter } from 'events';
import Dispatcher from "../Dispatcher";

class PortfolioStore extends EventEmitter {
    constructor() {
        super();

        this.coursesList = [];
    }

    getAllCourses() {
        return this.coursesList;
    }

    deleteCourse(id) {
        let courseArrayID = -1;
        this.coursesList.find((element, index) => {
            if (element.id === id) {
                courseArrayID = index;
                return true;
            }

            return false;
        });

        this.coursesList.splice(courseArrayID, 1);
        this.emit('data changed');
    }

    handleActions(action) {
        switch (action.type) {
            case 'HIDE_COURSE':
                this.deleteCourse(action.id);
                break;

            case 'RECEIVE_COURSES':
                this.coursesList = action.courses;
                this.emit('data changed');
                break;

            default:
                break;
        }
    }
}

const portfolioStore = new PortfolioStore();
Dispatcher.register(portfolioStore.handleActions.bind(portfolioStore));

export default portfolioStore;