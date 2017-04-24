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
    gallery: '',
    galleryCategory: '',
    galleryMain: {
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