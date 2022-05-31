import { searchClient } from '../config/config.js'

const search = instantsearch({
    indexName: '',
    searchClient
});


search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchBox',
        placeholder: 'Search for Products',
        showSubmit: true,
        showReset: true,
        searchAsYouType: true,
        cssClasses: {
            input: 'bg-transparent mt-5'
        }
    })
]);

search.start();
