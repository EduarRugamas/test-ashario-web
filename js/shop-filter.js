import { searchClient } from '../config/config.js';

const search = instantsearch({
    indexName: 'stores-demo',
    searchClient
});

search.addWidgets([

    instantsearch.widgets.hits({
        container: '#container-hits-demo'
    }),

    instantsearch.widgets.index({indexName: 'menu-products-demo', indexId: '4434'}).addWidgets([
        instantsearch.widgets.hits({
            container: '#container-hits',
            templates: {
                item: `
                <div>
                    <div class="hit-name">
                        {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
                    </div>
                    <div class="hit-description">
                        {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}
                    </div>
                </div>
                
                `
            }
        })
    ])
]);

search.start();
