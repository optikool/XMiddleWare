'use strict';

const EndpointsSettings = {
    home: {
        path: '/maesworld2/index.php?',
        query: {
            option: 'com_content',
            view: 'featured',
            Itemid: 101
        }
    },
    article: {
        path: '/maesworld2/index.php?',
        query: {
            option: 'com_content',
            view: 'article',
        }
    },
    articleCategory: {
        path: '/maesworld2/index.php?',
        query: {
            option: 'com_content',
            view: 'category',
            layout: 'blog'
        }
    },
    gallery: '',
    galleryCategory: '',
    galleryMain: {
        path: '/maesworld2/index.php?',
        query: {
            option: 'com_xgallery',
            view: 'main',
            Itemid: 112
        }
    },
    search: '',
    contact: ''
};

module.exports = EndpointsSettings;