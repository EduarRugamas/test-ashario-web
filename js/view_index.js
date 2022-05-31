import { searchClient } from '../config/config.js';

const search = instantsearch({
    indexName: 'menu-products-demo',
    searchClient
});

search.addWidgets([

    instantsearch.widgets.searchBox({
        container: '#searchBox',
    }),
]);

search.start();


