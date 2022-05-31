import { searchClient } from '../config/config.js'

const search = instantsearch({
    indexName: '',
    searchClient
});


search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchBox',
        placeholder: 'Search for Products',
        showLoadingIndicator: true,
        showSubmit: true
    })
]);

search.start();
