import { searchClient } from '../config/config.js'

const search = instantsearch({
    indexName: 'menu-products-demo',
    searchClient
});


search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchBox',
        placeholder: 'Search for Products',
        cssClasses: {
            input: 'form-control bg-transparent mt-5'
        }
    }),



]);

search.start();
