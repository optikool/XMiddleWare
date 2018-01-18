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
    galleryRandom: {
        query: {
            option: 'com_xgallery',
            view: 'single',
            id: 6,
            catid: 25,
            Itemid: 136
        }
    },
    movie: {
        query: {
            option: 'com_xmovie',
            view: 'single'
        }
    },
    movieCategory: {
        query: {
            option: 'com_xmovie',
            view: 'category'
        }
    },
    movieMain: {
        query: {
            option: 'com_xmovie',
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