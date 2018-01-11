import { EventEmitter } from 'events';
import $ from 'jquery'

const HOST = 'http://192.168.1.30:8088';

class PortfolioStore extends EventEmitter {
    constructor() {
        super();

        this.coursesList = [];
        this.loadCourses();
    }

    loadCourses() {
        $.getJSON(HOST + '/courses.json').then((data) => {
            data.forEach((item) => {
                this.coursesList.push($.extend({}, {id:  Math.floor(Math.random() * (9999 - 1000)) + 1000}, item))
            });
            this.emit('data changed');
        });
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

            default:
                break;
        }
    }
}

// const portfolioStore = new PortfolioStore();
// Dispatcher.register(portfolioStore.handleActions.bind(portfolioStore));
export default PortfolioStore;