import { EventEmitter } from 'events';

import Dispatcher from "../Dispatcher";

class BrandNameStore extends EventEmitter {
    constructor() {
        super();

        this.subscribers = [];

        this.logoData = {
            header: {
                containerClass: 'header-logo',
                imgClass: 'header-logo__img',
                nameClass: 'header-logo__name',
                imgSrc: 'img/BrandName/header_logo.png'
            },
            footer: {
                containerClass: '',
                imgClass: 'footer-logo__img',
                nameClass: 'footer-logo__name',
                imgSrc: 'img/BrandName/footer_logo.png'
            }
        };

        this.menuData = {
            header: {
                containerClass: 'header-menu',
                itemClass: 'header-menu__item',
                items: [
                    'Home',
                    'Services',
                    'About Us',
                    'Blog',
                    'Contact Us'
                ]
            },
            footer: {
                containerClass: 'footer-menu',
                itemClass: 'footer-menu__item',
                items: [
                    'Company',
                    'Location',
                    'Help',
                    'Advertise',
                    'Terms',
                    'Privacy'
                ]
            }
        };

        this.servicesData = [
            {
                imageClass: 'brandname__sprite_cup',
                title: 'Duis Aute Irure',
                subtitle: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur.',
                isDecor: true
            },
            {
                imageClass: 'brandname__sprite_crown',
                title: 'Duis Aute Irure',
                subtitle: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur.',
                isDecor: true
            },
            {
                imageClass: 'brandname__sprite_scroll',
                title: 'Duis Aute Irure',
                subtitle: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur.',
                isDecor: false
            }
        ];

        this.titlesData = {
            callToAction: {
                class: 'brandname-call-to-action__title',
                title: 'We Design Beautiful Templates'
            },
            feedbacks: {
                class: 'brandname-feedbacks__title',
                title: 'Our Happy Clients.'
            },
            subscription: {
                class: 'brandname-subscription__title',
                title: 'subscribe to our newsletter.'
            }
        };
    }

    getLogoData(block) {
        return this.logoData[block];
    }

    getMenuData(block) {
        return this.menuData[block];
    }

    getServicesData() {
        return this.servicesData;
    }

    getTitlesData(block) {
        return this.titlesData[block];
    }

    getFeedbacks() {
        return this.feedbacks;
    }

    handleActions(action) {
        switch (action.type) {
            case 'RECEIVE_FEEDBACKS':
                this.feedbacks = action.feedbacks;
                this.emit('feedbacks received');
                break;

            case 'SUBMIT_FORM':
                this.subscribers.push(action.subscriber);
                this.emit('clear form');
                alert(`Dear ${action.subscriber.name}, thank you for your subscription!\n${action.subscriber.email} is successfully added to subscribers list.`);
                break;

            default:
                break;
        }
    }
}

const brandnameStore = new BrandNameStore();
Dispatcher.register(brandnameStore.handleActions.bind(brandnameStore));

export default brandnameStore;