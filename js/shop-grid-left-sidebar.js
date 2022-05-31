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
            input: 'form-control search-input cursor-pointer bg-transparent p-1'
        }
    })
]);

search.start();
