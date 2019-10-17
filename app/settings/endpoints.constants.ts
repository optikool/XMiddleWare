'use strict';

const EndpointsSettings = {
    path: '/index.php?',
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
    collection: {
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
            Itemid: 117
        }
    },
    galleryRandom: {
        query: {
            option: 'com_xgallery',
            view: 'main',
            sort: 'random',
            limitstart: 0,
            Itemid: 117
        }
    },
    galleryPopular: {
        query: {
            option: 'com_xgallery',
            view: 'main',
            sort: 'popular',
            limitstart: 0,
            Itemid: 117
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
            Itemid: 137
        }
    },
    movieRandom: {
        query: {
            option: 'com_xmovie',
            view: 'main',
            sort: 'random',
            limitstart: 0,
            Itemid: 137
        }
    },
    moviePopular: {
        query: {
            option: 'com_xmovie',
            view: 'main',
            sort: 'popular',
            limitstart: 0,
            Itemid: 137
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