import { searchClient } from './config';

function card_product_view() {
    const search = instantsearch({
        indexName: 'menu-products-demo',
        searchClient
    });
    search.addWidgets([
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
}
