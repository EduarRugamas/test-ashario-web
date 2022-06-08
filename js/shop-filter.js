import { searchClient } from '../config/config.js';

const search = instantsearch({
    indexName: 'stores-demo',
    searchClient
});

search.addWidgets([
    instantsearch.widgets.index({indexName: 'menu-products-demo', indexId: '4434'}).addWidgets([
        instantsearch.widgets.hits({
            container: '#container-hits',

        })
    ])
]);
