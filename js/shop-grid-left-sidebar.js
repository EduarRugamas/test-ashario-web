import { searchClient } from '../config/config.js'

const search = instantsearch({
    indexName: '',
    searchClient
});


search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchBox',
        placeholder: 'Search for Products',
        showLoadingIndicator: false,
        showSubmit: false,
        cssClasses: {
            root: 'searchBox-css',
            input: 'form-control search-input'
        }
    })
]);

search.start();
