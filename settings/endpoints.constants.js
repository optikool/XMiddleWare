'use strict';

const EndpointsSettings = {
    path: '/maesworld2/index.php?',
    home: {
        query: {
            option: 'com_content',
            view: 'featured',
            Itemid: 101
        }
    },
    article: {
        query: {
            option: 'com_content',
            view: 'article',
        }
    },
    articleCategory: {
        query: {
            option: 'com_content',
            view: 'category',
            layout: 'blog'
        }
    },
    gallery: {
        query: {
            option: 'com_xgallery',
            view: 'single'
        }
    },
    galleryCategory: {
        query: {
            option: 'com_xgallery',
            view: 'category'
        }
    },
    galleryMain: {
        query: {
            option: 'com_xgallery',
            view: 'main',
            Itemid: 112
        }
    },
    search: {
        query: {
            option: 'com_search',
            searchphrase: 'all',
            Itemid: 134
        }
    },
    contact: {
        query: {
            option: 'com_contact',
            task: 'contact.submit',
            id: 1
        },
        get: {
            option: 'com_contact',
            view: 'contact',
            id: 1,
            Itemid: 133
        }
    }
};

module.exports = EndpointsSettings;