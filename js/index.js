import { searchClient } from './config.js'

const search = instantsearch({
    indexName: 'menu-products-demo',
    searchClient
});

search.addWidgets([

    instantsearch.widgets.searchBox({
        container: '#searchbox'
    }),

    instantsearch.widgets.refinementList({
        container: '#search-lineage',
        attribute: 'category'
    }),

    instantsearch.widgets.rangeSlider({
        container: '#rangeSlider-thc-potency',
        attribute: 'percent_thc'
    }),

    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: `
                <p class="texto"> {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</p>
              `
        }
    })
]);

search.start();
