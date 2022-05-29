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
        attribute: 'percent_thc',
        min: 0,
    }),

    instantsearch.widgets.rangeSlider({
        container: '#rangeSlider-cbd-potency',
        attribute: 'percent_cbd',
        min: 0
    }),

    instantsearch.widgets.refinementList({
        container: '#refinementList-categories',
        attribute: 'kind'
    }),

    instantsearch.widgets.numericMenu({
        container: '#refinementList-price',
        attribute: 'bucket_price',
         items : [
             {
                 label: 'All'
             },
             {
                label: 'Less than $500', end: 500
             },
             {
                 label: 'Between 500$ - 1000$', start: 500, end: 1000
             },
             {},
             {},
             {}
         ]
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
